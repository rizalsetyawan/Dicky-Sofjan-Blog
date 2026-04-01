import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import { initData } from './init.js';
import authRouter from './routes/auth.js';
import galleryRouter from './routes/gallery.js';
import publicationsRouter from './routes/publications.js';
import eventsRouter from './routes/events.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname  = path.dirname(__filename);

const app  = express();
const PORT = process.env.PORT || 3001;

// Ensure directories exist
const dataDir    = path.join(__dirname, 'data');
const uploadsDir = path.join(__dirname, '../public/uploads');
[dataDir, uploadsDir].forEach(d => { if (!fs.existsSync(d)) fs.mkdirSync(d, { recursive: true }); });

// Middleware
app.use(cors({ origin: ['http://localhost:5173', 'http://localhost:4173'] }));
app.use(express.json());
app.use('/uploads', express.static(uploadsDir));

// Seed JSON data files from static defaults
initData(dataDir);

// API routes
app.use('/api/auth',         authRouter);
app.use('/api/gallery',      galleryRouter);
app.use('/api/publications',  publicationsRouter);
app.use('/api/events',        eventsRouter);

// In production serve built React app
if (process.env.NODE_ENV === 'production') {
  const distDir = path.join(__dirname, '../dist');
  app.use(express.static(distDir));
  app.get('*', (_req, res) => res.sendFile(path.join(distDir, 'index.html')));
}

app.listen(PORT, () => console.log(`✅  API server → http://localhost:${PORT}`));
