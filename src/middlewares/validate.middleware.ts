import { Request, Response, NextFunction } from 'express';
import { ZodSchema, ZodError } from 'zod';

export const validateSchema = (schema: ZodSchema) => 
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync(req.body);
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        const formattedErrors: Record<string, string[]> = {};
        
        // Usamos .issues en lugar de .errors para mayor compatibilidad con TS
        error.issues.forEach((err) => {
          const field = err.path.join('.');
          if (!formattedErrors[field]) {
            formattedErrors[field] = [];
          }
          formattedErrors[field].push(err.message);
        });

        return res.status(400).json({
          ok: false,
          message: "Datos de entrada inválidos.",
          errors: formattedErrors
        });
      }
      
      return res.status(500).json({ 
        ok: false, 
        message: "Error interno del servidor" 
      });
    }
  };