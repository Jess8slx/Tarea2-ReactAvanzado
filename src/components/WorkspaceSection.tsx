import React from 'react';

interface WorkspaceSectionProps {
    title: string;
    children: React.ReactNode;
}

export const WorkspaceSection: React.FC<WorkspaceSectionProps> = ({ title, children }) => {
    return (
        <section style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '20px', marginBottom: '20px', background: '#fff' }}>
            <h2>{title}</h2>
            <div>{children}</div>
        </section>
    );
};