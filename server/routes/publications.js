import express from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { requireAuth } from '../middleware/auth.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const router    = express.Router();
const dataFile  = path.join(__dirname, '../data/publications.json');

function readData()      { return JSON.parse(fs.readFileSync(dataFile, 'utf8')); }
function writeData(data) { fs.writeFileSync(dataFile, JSON.stringify(data, null, 2), 'utf8'); }

router.get('/', (_req, res) => res.json(readData()));

router.post('/', requireAuth, (req, res) => {
  const items  = readData();
  const newItem = { id: Date.now(), ...req.body };
  items.unshift(newItem);
  writeData(items);
  res.status(201).json(newItem);
});

router.put('/:id', requireAuth, (req, res) => {
  const items = readData();
  const idx   = items.findIndex(i => i.id === Number(req.params.id));
  if (idx === -1) return res.status(404).json({ error: 'Not found' });
  items[idx] = { ...items[idx], ...req.body, id: items[idx].id };
  writeData(items);
  res.json(items[idx]);
});

router.delete('/:id', requireAuth, (req, res) => {
  let items = readData();
  if (!items.find(i => i.id === Number(req.params.id))) return res.status(404).json({ error: 'Not found' });
  items = items.filter(i => i.id !== Number(req.params.id));
  writeData(items);
  res.json({ ok: true });
});

export default router;
