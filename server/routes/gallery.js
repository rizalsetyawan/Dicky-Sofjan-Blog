import express from 'express';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { requireAuth } from '../middleware/auth.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const router    = express.Router();
const dataFile  = path.join(__dirname, '../data/gallery.json');
const uploadDir = path.join(__dirname, '../../public/uploads');

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => cb(null, uploadDir),
  filename: (_req, file, cb) => {
    const unique = `${Date.now()}-${Math.round(Math.random() * 1e6)}`;
    cb(null, `${unique}${path.extname(file.originalname)}`);
  },
});
const upload = multer({
  storage,
  limits: { fileSize: 15 * 1024 * 1024 }, // 15 MB
  fileFilter: (_req, file, cb) => {
    if (file.mimetype.startsWith('image/')) cb(null, true);
    else cb(new Error('Only image files are allowed'));
  },
});

function readData()        { return JSON.parse(fs.readFileSync(dataFile, 'utf8')); }
function writeData(data)   { fs.writeFileSync(dataFile, JSON.stringify(data, null, 2), 'utf8'); }

// GET all photos (public)
router.get('/', (_req, res) => res.json(readData()));

// POST upload new photo (admin)
router.post('/', requireAuth, upload.single('photo'), (req, res) => {
  const items = readData();
  const { caption = '', location = '', date = '', category = 'general', tags = '' } = req.body;
  const filename = req.file ? `/uploads/${req.file.filename}` : null;
  if (!filename) return res.status(400).json({ error: 'No file uploaded' });

  const newItem = {
    id:       Date.now(),
    caption,
    location,
    date,
    category,
    tags:  tags ? tags.split(',').map(t => t.trim()).filter(Boolean) : [],
    src:   filename,
    thumb: filename,
  };
  items.unshift(newItem);
  writeData(items);
  res.status(201).json(newItem);
});

// PUT update photo metadata (admin)
router.put('/:id', requireAuth, (req, res) => {
  const items = readData();
  const idx   = items.findIndex(i => i.id === Number(req.params.id));
  if (idx === -1) return res.status(404).json({ error: 'Not found' });
  const { caption, location, date, category, tags } = req.body;
  if (caption  !== undefined) items[idx].caption  = caption;
  if (location !== undefined) items[idx].location = location;
  if (date     !== undefined) items[idx].date      = date;
  if (category !== undefined) items[idx].category  = category;
  if (tags     !== undefined) items[idx].tags      = Array.isArray(tags) ? tags : tags.split(',').map(t => t.trim()).filter(Boolean);
  writeData(items);
  res.json(items[idx]);
});

// DELETE photo (admin)
router.delete('/:id', requireAuth, (req, res) => {
  let items = readData();
  const item = items.find(i => i.id === Number(req.params.id));
  if (!item) return res.status(404).json({ error: 'Not found' });

  // Delete file if it's a local upload
  if (item.src && item.src.startsWith('/uploads/')) {
    const filePath = path.join(uploadDir, path.basename(item.src));
    if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
  }

  items = items.filter(i => i.id !== Number(req.params.id));
  writeData(items);
  res.json({ ok: true });
});

export default router;
