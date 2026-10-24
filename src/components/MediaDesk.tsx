import React, { useState } from 'react';
import { SOLICITUDES_INICIALES } from '../data/initialData';
import type { SolicitudPrestamo, CriteriosBusqueda } from '../types/prestamo';
import { WorkspaceSection } from './WorkspaceSection';
import { StatusIndicator } from './StatusIndicator';
import { SearchForm } from './SearchForm';
import { RequestCard } from './RequestCard';

export const MediaDesk: React.FC = () => {
    const [solicitudes] = useState<SolicitudPrestamo[]>(SOLICITUDES_INICIALES);
    const [criterios, setCriterios] = useState<CriteriosBusqueda>({ termino: '', categoria: '' });
    const [isProcessing, setIsProcessing] = useState<boolean>(false);
    const [codigosMarcados, setCodigosMarcados] = useState<string[]>([]);

    const handleSearch = (nuevosCriterios: CriteriosBusqueda) => {
        setIsProcessing(true);
        setCriterios(nuevosCriterios);
        setTimeout(() => {
            setIsProcessing(false);
        }, 400);
    };

    const handleMarcarRevision = (codigo: string) => {
        setCodigosMarcados(prev =>
            prev.includes(codigo) ? prev.filter(c => c !== codigo) : [...prev, codigo]
        );
    };

    const solicitudesFiltradas = solicitudes.filter(s => {
        const coincideTermino =
            s.recurso.toLowerCase().includes(criterios.termino.toLowerCase()) ||
            s.solicitante.toLowerCase().includes(criterios.termino.toLowerCase());
        const coincideCategoria = criterios.categoria === '' || s.categoria === criterios.categoria;
        return coincideTermino && coincideCategoria;
    });

    return (
        <div style={{
            maxWidth: '850px',
            margin: '30px auto',
            padding: '25px',
            fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
            backgroundColor: '#f4f6f9',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
        }}>
            {/* Título corregido con line-height para evitar que se encime */}
            <h1 style={{
                textAlign: 'center',
                color: '#2c3e50',
                fontSize: '28px',
                marginBottom: '25px',
                lineHeight: '1.4'
            }}>
                MediaDesk — Panel de Préstamo de Equipo Audiovisual
            </h1>

            <WorkspaceSection title="Panel de Consulta y Filtros">
                <SearchForm onSearch={handleSearch} />
                <StatusIndicator isProcessing={isProcessing}>
                    {(statusText) => (
                        <p style={{ marginTop: '12px', color: '#555', fontSize: '14px' }}>
                            <b>Estado del Sistema:</b> {statusText}
                        </p>
                    )}
                </StatusIndicator>
            </WorkspaceSection>

            <WorkspaceSection title={`Resultados de la Solicitud (${solicitudesFiltradas.length} encontrados)`}>
                {solicitudesFiltradas.length === 0 ? (
                    <p style={{ color: '#e74c3c', textAlign: 'center', padding: '20px' }}>
                        No se encontraron solicitudes que coincidan con los criterios de búsqueda.
                    </p>
                ) : (
                    solicitudesFiltradas.map(solicitud => (
                        <RequestCard
                            key={solicitud.codigo}
                            solicitud={solicitud}
                            etiquetaSecundaria={solicitud.categoria === 'Cámaras' ? 'Prioritario' : undefined}
                            enMarcarRevision={handleMarcarRevision}
                            isMarcadoRevision={codigosMarcados.includes(solicitud.codigo)}
                        />
                    ))
                )}
            </WorkspaceSection>

            <WorkspaceSection title="Bloque de Ayuda / Resumen (Composición con Children)">
                <p style={{ margin: 0, color: '#666', fontSize: '14px', lineHeight: '1.5' }}>
                    💡 <b>Nota informativa:</b> Recuerde que los equipos sin fecha de devolución confirmada requieren validación manual con el administrador del laboratorio universitario.
                </p>
            </WorkspaceSection>
        </div>
    );
};