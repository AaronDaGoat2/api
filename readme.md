
Anexo de imagenes de Vercel y zod:
vercel-import-repo>
<img width="1908" height="911" alt="vercel-import-repo" src="https://github.com/user-attachments/assets/a5eb08ab-459e-4aa3-b6a8-35cddfa6cea6" />
vercel-github-permisos:
<img width="689" height="651" alt="vercel-github-permisos" src="https://github.com/user-attachments/assets/9decb644-05ac-4eb7-9fe3-7f130b32c76f" />
vercel-deploy-exitoso:
<img width="1600" height="830" alt="vercel-deploy-exitoso" src="https://github.com/user-attachments/assets/bdb90ad9-ed46-4941-9438-1afd62ba68d9" />
vercel-confirmar-importacion:
<img width="1908" height="858" alt="vercel-confirmar-importacion" src="https://github.com/user-attachments/assets/f1d3bd74-cfb1-4ccc-bd94-12914c809288" />
vercel-config-env:
<img width="1919" height="983" alt="vercel-config-env" src="https://github.com/user-attachments/assets/0e7afe44-ce2f-4a7f-8b06-482abb731ddc" />
vercel-build-error:
<img width="1654" height="478" alt="vercel-build-error" src="https://github.com/user-attachments/assets/fdc1f9f6-e973-4a6c-8e9e-462f49cfa50b" />
captura-zod-password:
<img width="1600" height="899" alt="captura-zod-password" src="https://github.com/user-attachments/assets/6b7e26c2-da6e-4248-8e8e-d26e3cb6b599" />
captura-zod-email:
<img width="1600" height="899" alt="captura-zod-email" src="https://github.com/user-attachments/assets/8455760f-6945-4814-b01e-3cc88754a1b4" />



# 🔒 RubaStudio Auth & Mail API

API Serverless propia desarrollada en TypeScript para la gestión de autenticación, control de sesiones (JWT) e integración híbrida (Mashup) con servicios externos (Resend y Firebase Firestore) para RubaStudio.

👨‍💻 **Desarrollado por:** Aaron Gallardo Malpica  
🌐 **URL Base de Producción:** `[https://tu-url-de-vercel.vercel.app](https://tu-url-de-vercel.vercel.app)`

## 📌 Tabla de Contenidos
- [Características (Arquitectura Mashup)](#-características-arquitectura-mashup)
- [Estructura y Seguridad de Entorno](#-estructura-y-seguridad-de-entorno)
- [Endpoints de la API](#-endpoints-de-la-api)
- [Reporte de Pruebas (Zod)](#-reporte-de-pruebas-y-validación-zod)
- [Guía de Despliegue en la Nube](#-guía-paso-a-paso-de-despliegue-en-la-nube-vercel)

## 🚀 Características (Arquitectura Mashup)
- ⚡ **Arquitectura Serverless:** alojada y optimizada para la infraestructura de Vercel (PaaS).
- 🔗 **Integración Híbrida (Mashup):** consumo concurrente de la API propia junto con servicios de terceros (API de **Resend** para notificaciones por correo y **Firebase Firestore** para persistencia de datos).
- 🔄 **Gestión de sesiones:** login, verificación de perfil (`/me`), renovación silenciosa (`/refresh`) y cierre de sesión seguro (`/logout`).
- ✅ **Validación de esquemas:** rechazo *fail-fast* de datos malformados con Zod.

## 📂 Estructura y Seguridad de Entorno

Estrategia de Seguridad: La gestión de credenciales se realiza estrictamente mediante variables de entorno local. Se evita la exposición de claves privadas en este repositorio público gracias a la configuración del archivo `.gitignore`.

```text
api/
├── src/
│   ├── config/            
│   ├── middlewares/       
│   ├── modules/
│   └── server.ts          
├── evidence/              # 📸 Carpeta de evidencias y capturas de pruebas
├── .env                   # ⚠️ Excluido del repo. Contiene credenciales BD y Resend.
├── private.key            # ⚠️ Excluido del repo. Llave RSA para firmar JWT.
├── .gitignore             # Bloquea node_modules, .env, .DS_Store, dist/
├── vercel.json            # Script/Configuración de inicio Serverless
└── README.md
