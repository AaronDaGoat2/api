import { Router } from 'express';
import { AuthController } from './auth.controller';
import { requireAuth } from '../../middlewares/auth.middleware';
import { validateSchema } from '../../middlewares/validate.middleware';
import { loginSchema } from './auth.schema';

const router = Router();

// Rutas públicas (con validación Zod incorporada en el login)
router.post('/login', validateSchema(loginSchema), AuthController.login);
router.post('/refresh', AuthController.refresh);
router.post('/logout', AuthController.logout);

// Ruta protegida de prueba (Obtener perfil propio)
router.get('/me', requireAuth, (req, res) => {
  res.json({
    ok: true,
    data: { usuario: req.user },
  });
});

export default router;