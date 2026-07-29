// Punto de entrada para el runtime Serverless de Vercel.
// Vercel detecta cualquier archivo dentro de /api y lo expone como función;
// aquí simplemente reexportamos la instancia de Express ya configurada.
import app from '../src/server';

export default app;