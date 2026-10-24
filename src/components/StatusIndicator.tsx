import React from 'react';

interface StatusIndicatorProps {
    isProcessing: boolean;
    children: (statusText: string) => React.ReactNode;
}

export const StatusIndicator: React.FC<StatusIndicatorProps> = ({ isProcessing, children }) => {
    const statusText = isProcessing
        ? '⏳ Procesando consulta en el sistema...'
        : '✅ Resultados listos para revisión.';

    return <div style={{ margin: '10px 0', fontStyle: 'italic' }}>{children(statusText)}</div>;
};