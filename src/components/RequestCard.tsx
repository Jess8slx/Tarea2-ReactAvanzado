import React from 'react';
import type { SolicitudPrestamo } from '../types/prestamo';

interface RequestCardProps {
    solicitud: SolicitudPrestamo;
    etiquetaSecundaria?: string;
    enMarcarRevision: (codigo: string) => void;
    isMarcadoRevision: boolean;
}

export const RequestCard: React.FC<RequestCardProps> = ({
    solicitud,
    etiquetaSecundaria = 'Estándar',
    enMarcarRevision,
    isMarcadoRevision,
}) => {
    // Función para asignar color según el estado (Semáforo de colores)
    const getEstadoBadgeStyle = (estado: string) => {
        switch (estado) {
            case 'Aprobado':
                return { bg: '#d4edda', color: '#155724', border: '#c3e6cb' };
            case 'Pendiente':
                return { bg: '#fff3cd', color: '#856404', border: '#ffeeba' };
            case 'En Revisión':
                return { bg: '#cce5ff', color: '#004085', border: '#b8daff' };
            case 'Rechazado':
                return { bg: '#f8d7da', color: '#721c24', border: '#f5c6cb' };
            default:
                return { bg: '#e2e3e5', color: '#383d41', border: '#d6d8db' };
        }
    };

    const badgeStyle = getEstadoBadgeStyle(solicitud.estado);

    return (
        <div style={{
            border: isMarcadoRevision ? '2px solid #f39c12' : '1px solid #e1e4e8',
            padding: '16px',
            borderRadius: '8px',
            marginBottom: '12px',
            backgroundColor: isMarcadoRevision ? '#fef9e7' : '#ffffff',
            boxShadow: '0 2px 4px rgba(0,0,0,0.02)',
            transition: 'all 0.2s ease'
        }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <strong style={{ fontSize: '16px', color: '#2c3e50' }}>
                    {solicitud.codigo} - {solicitud.recurso}
                </strong>
                <span style={{ fontSize: '0.75em', background: '#e9ecef', color: '#495057', padding: '3px 8px', borderRadius: '12px', fontWeight: 600 }}>
                    {etiquetaSecundaria}
                </span>
            </div>

            <p style={{ margin: '4px 0', color: '#555', fontSize: '14px' }}>
                <b>Categoría:</b> {solicitud.categoria} | <b>Solicitante:</b> {solicitud.solicitante}
            </p>

            <p style={{ margin: '4px 0', color: '#555', fontSize: '14px' }}>
                <b>Fecha Devolución:</b> {solicitud.fechaDevolucion ?? <span style={{ color: '#e74c3c', fontWeight: 600 }}>No especificada</span>}
            </p>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px' }}>
                <span style={{
                    fontSize: '13px',
                    padding: '4px 10px',
                    borderRadius: '6px',
                    backgroundColor: badgeStyle.bg,
                    color: badgeStyle.color,
                    border: `1px solid ${badgeStyle.border}`,
                    fontWeight: 600
                }}>
                    ● {solicitud.estado}
                </span>

                <button
                    onClick={() => enMarcarRevision(solicitud.codigo)}
                    style={{
                        padding: '6px 12px',
                        cursor: 'pointer',
                        backgroundColor: isMarcadoRevision ? '#e67e22' : '#3498db',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '4px',
                        fontSize: '13px',
                        fontWeight: 600
                    }}
                >
                    {isMarcadoRevision ? '⭐ Quitar de Revisión' : '☆ Marcar para Revisión'}
                </button>
            </div>
        </div>
    );
};