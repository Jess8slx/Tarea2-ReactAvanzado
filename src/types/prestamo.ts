export type EstadoSolicitud = 'Pendiente' | 'Aprobado' | 'En Revisión' | 'Rechazado';

export interface SolicitudPrestamo {
    codigo: string;
    recurso: string;
    categoria: string;
    solicitante: string;
    fechaDevolucion?: string; // Opcional para representar ausencia de fecha
    estado: EstadoSolicitud;
}

export interface CriteriosBusqueda {
    termino: string;
    categoria: string;
}