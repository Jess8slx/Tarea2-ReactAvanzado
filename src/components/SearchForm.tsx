import React, { useState } from 'react';
import type { CriteriosBusqueda } from '../types/prestamo';

interface SearchFormProps {
    onSearch: (criterios: CriteriosBusqueda) => void;
}

export const SearchForm: React.FC<SearchFormProps> = ({ onSearch }) => {
    const [termino, setTermino] = useState('');
    const [categoria, setCategoria] = useState('');

    const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTermino(e.target.value);
    };

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setCategoria(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Evita la recarga de la página
        onSearch({ termino, categoria });
    };

    return (
        <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <input
                type="text"
                placeholder="Buscar por recurso o solicitante..."
                value={termino}
                onChange={handleTextChange}
                style={{ padding: '8px', flex: '1', minWidth: '200px' }}
            />

            <select value={categoria} onChange={handleSelectChange} style={{ padding: '8px' }}>
                <option value="">Todas las categorías</option>
                <option value="Cámaras">Cámaras</option>
                <option value="Audio">Audio</option>
                <option value="Video">Video</option>
                <option value="Soporte">Soporte</option>
            </select>

            <button type="submit" style={{ padding: '8px 16px', cursor: 'pointer' }}>Buscar</button>
        </form>
    );
};