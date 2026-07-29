# 🚀 Ruba Studio API

API RESTful robusta desarrollada con TypeScript, Node.js y Express para la gestión integral del sistema, orientada a servicios en la nube, autenticación segura y consumo de APIs de terceros (Mashup).

---

## 📋 Tabla de Contenidos
1. [Acerca del Proyecto](#-acerca-del-proyecto)
2. [Tecnologías Utilizadas](#-tecnologías-utilizadas)
3. [Estructura del Proyecto](#-estructura-del-proyecto)
4. [Requisitos Previos](#-requisitos-previos)
5. [Variables de Entorno](#-variables-de-entorno)
6. [Instalación y Configuración Local](#-instalación-y-configuración-local)
7. [Endpoints Principales](#-endpoints-principales)
8. [Despliegue](#-despliegue)

---

## 🎯 Acerca del Proyecto
**Ruba Studio API** funciona como el núcleo del sistema, diseñado para procesar solicitudes de manera eficiente, validar identidades mediante **JWT (JSON Web Tokens)**, realizar persistencia de datos en tiempo real con **Firebase Firestore** y automatizar procesos de comunicación externa (Mashup) mediante el envío de correos electrónicos transaccionales con **Resend**.

---

## 🛠️ Tecnologías Utilizadas
* **Lenguaje:** TypeScript / JavaScript (Node.js)
* **Framework:** Express.js
* **Base de Datos NoSQL:** Firebase Firestore
* **Autenticación y Seguridad:** JWT (JSON Web Tokens), bcrypt
* **Servicios Externos (Mashup):** Resend API (Notificaciones y correos)
* **Control de Versiones:** Git y GitHub
* **Despliegue (Hosting):** Vercel (Serverless Functions)

---

## 📂 Estructura del Proyecto
```text
api/
├── src/
│   ├── config/
│   │   └── firebase.ts        # Inicialización y credenciales de Firebase Firestore
│   ├── middlewares/
│   │   └── auth.middleware.ts # Interceptor para la validación de tokens JWT
│   ├── modules/
│   │   ├── auth/              # Módulo de Autenticación (Controller, Routes, Schemas, Services)
│   │   └── mail/              # Módulo de Correo y Mashup (Integración con Resend)
│   ├── utils/
│   │   └── jwt.ts             # Utilidades para generación y decodificación de tokens
│   ├── index.ts               # Punto de entrada de la aplicación Express
│   └── server.ts              # Configuración de arranque del servidor
├── .env                       # Variables de entorno privadas (Oculto en producción)
├── .gitignore                 # Exclusión de archivos sensibles y node_modules
├── package.json               # Dependencias, scripts y metadatos del proyecto
├── tsconfig.json              # Configuración y reglas del compilador de TypeScript
└── vercel.json                # Configuración de enrutamiento y adaptadores para Vercel

⚙️ Requisitos Previos

Asegúrate de contar con lo siguiente en tu entorno local antes de iniciar:

    Node.js (Versión 18.x o superior recomendada).

    Un gestor de paquetes como npm (incluido con Node.js).

    Una cuenta activa en Firebase con una base de datos Firestore configurada.

🔐 Variables de Entorno (.env)

El proyecto requiere un archivo .env en la raíz de la carpeta api con las siguientes variables de configuración:
Code snippet

PORT=3000
JWT_SECRET=tu_clave_secreta_jwt_muy_segura
RESEND_API_KEY=tu_api_key_proporcionada_por_resend
# Credenciales adicionales de Firebase / Configuración del sistema

🚀 Instalación y Configuración Local

Sigue estos pasos para clonar y echar a andar el proyecto en tu máquina:

    Clonar el repositorio:
    Bash

    git clone [https://github.com/AaronDaGoat2/api.git](https://github.com/AaronDaGoat2/api.git)
    cd api

    Instalar las dependencias del proyecto:
    Bash

    npm install

    Configurar las credenciales:
    Crea tu archivo .env en la raíz basándote en la sección anterior e introduce tus llaves reales.

    Ejecutar en entorno de desarrollo:
    Bash

    npm run dev

🌐 Endpoints Principales
🔐 Autenticación (/api/auth)

    POST /api/auth/register — Registra un nuevo usuario en el sistema.

    POST /api/auth/login — Autentica al usuario y devuelve un token JWT de acceso.

✉️ Servicios / Mashup (/api/mail)

    POST /api/mail/send — Dispara una notificación por correo electrónico mediante la API externa de Resend ante eventos del sistema (ej. inicio de sesión).

☁️ Despliegue

La aplicación está configurada para integrarse mediante despliegue continuo (CI/CD) en Vercel. Cualquier cambio validado y sincronizado en la rama main de GitHub se compila de manera automática utilizando funciones serverless.