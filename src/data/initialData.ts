import type { SolicitudPrestamo } from '../types/prestamo';

export const SOLICITUDES_INICIALES: SolicitudPrestamo[] = [
    {
        codigo: 'REQ-001',
        recurso: 'Cámara Sony a6400',
        categoria: 'Cámaras',
        solicitante: 'Carlos Pérez',
        fechaDevolucion: '2026-10-25',
        estado: 'Pendiente',
    },
    {
        codigo: 'REQ-002',
        recurso: 'Micrófono Shure SM58',
        categoria: 'Audio',
        solicitante: 'Ana Gómez',
        estado: 'Pendiente',
    },
    {
        codigo: 'REQ-003',
        recurso: 'Proyector Epson 1080p',
        categoria: 'Video',
        solicitante: 'Luis Martínez',
        fechaDevolucion: '2026-10-20',
        estado: 'Aprobado',
    },
    {
        codigo: 'REQ-004',
        recurso: 'Trípode Manfrotto',
        categoria: 'Soporte',
        solicitante: 'Sofía Rivas',
        fechaDevolucion: '2026-10-28',
        estado: 'En Revisión',
    },
];