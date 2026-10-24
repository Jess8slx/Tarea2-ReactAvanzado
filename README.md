# MediaDesk - Panel de Préstamo de Equipo Audiovisual

## 1. Objetivo del Proyecto
Desarrollar una interfaz en React y TypeScript para registrar y revisar solicitudes de préstamo de equipo audiovisual de un laboratorio universitario, aplicando contratos explícitos, props opcionales con valores predeterminados, eventos del DOM fuertemente tipados y composición avanzada mediante `children` y funciones hijas (Render Props).

## 2. Requisitos Previos y Entorno
- Node.js instalado (versión 18 o superior recomendada).
- Gestor de paquetes npm.

## 3. Instalación y Ejecución
1. Clonar o descomprimir el repositorio del proyecto.
2. Abrir la terminal en la carpeta raíz del proyecto y ejecutar la instalación de dependencias:
   ```bash
   npm install

## 4. Validación de Escenarios Principales
- **Consulta con coincidencias:** Permite verificar el filtrado reactivo de tarjetas y el contador.
- **Búsqueda sin coincidencias:** Comprueba el mensaje de control cuando no existen registros.
- **Marcar para revisión:** Valida la alteración del estado visual y los colores sin mutar el objeto original.

## 5. Evidencia 
### A. Consulta con Resultados ("Ana")
![Escenario Con Resultados](./images/concidencias.png)

### B. Búsqueda sin Coincidencias ("1234")
![Escenario Sin Coincidencias](./images/sincoincidencias.png)

### C. Solicitud Marcada para Revisión
![Marcar para Revisión](./images/marcarevision.png)

### D. Tsc --noEmit
![Marcar para Revisión](./images/noEmit.png)
