import express, { Request, Response } from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './modules/auth/auth.routes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

// CORS restringido a orígenes explícitos definidos en variables de entorno
const origenesPermitidos = (process.env.CORS_ORIGINS || '')
  .split(',')
  .map((o) => o.trim())
  .filter(Boolean);

app.use(
  cors({
    origin: origenesPermitidos.length ? origenesPermitidos : true,
    credentials: true,
  })
);

// Middlewares Globales
app.use(express.json());
app.use(cookieParser()); // Permite a Express leer req.cookies

// Rutas de la API
app.use('/api/v1/auth', authRoutes);

// Healthcheck
app.get('/health', (_req: Request, res: Response) => {
  res.status(200).json({ ok: true, mensaje: 'API Ruba Studio activa' });
});

// En Vercel (serverless) el archivo api/index.ts importa `app` y NO se
// debe llamar a listen(); en local sí es necesario.
if (!process.env.VERCEL) {
  app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
  });
}

export default app;