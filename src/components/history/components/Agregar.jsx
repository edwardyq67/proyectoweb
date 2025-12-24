import { useState } from 'react'

export default function Agregar({ onStoryAdded, onClose }) {
    const [newStory, setNewStory] = useState({
        titulo: '',
        descripcion: '',
        urlMedia: '',
        urlMiniatura: '',
        tipoMedia: 'IMAGEN',
        enlacePermanente: '',
        fechaPublicacion: new Date().toISOString().slice(0, 16), // Fecha y hora actual
        esDestacada: false
    })
    const [uploading, setUploading] = useState(false)

    const handleAddStory = async () => {
        if (!newStory.titulo || !newStory.urlMedia) {
            alert('Por favor, completa al menos el título y la URL del media')
            return
        }

        setUploading(true)

        try {
            const token = localStorage.getItem('token')
            
            if (!token) {
                alert('No estás autenticado. Por favor, inicia sesión.')
                return
            }

            // Usar el endpoint de Astro (/api/history) no directamente el backend
            const response = await fetch('/api/history', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    ...newStory,
                    fechaPublicacion: new Date(newStory.fechaPublicacion).toISOString()
                })
            })

            const data = await response.json()

            if (response.ok) {
                if (onStoryAdded) {
                    onStoryAdded(data)
                }
                
                setNewStory({
                    titulo: '',
                    descripcion: '',
                    urlMedia: '',
                    urlMiniatura: '',
                    tipoMedia: 'IMAGEN',
                    enlacePermanente: '',
                    fechaPublicacion: new Date().toISOString().slice(0, 16),
                    esDestacada: false
                })
                
                if (onClose) {
                    onClose()
                }
                
                alert('✅ Historia agregada exitosamente')
            } else {
                alert(`Error: ${data.error || 'No se pudo agregar la historia'}`)
            }
        } catch (error) {
            console.error('Error al agregar historia:', error)
            alert('Error al conectar con el servidor')
        } finally {
            setUploading(false)
        }
    }

    return (
        <div className="bg-card rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-foreground">Agregar Nueva Historia</h2>
                    <button
                        onClick={onClose}
                        className="w-10 h-10 bg-muted rounded-full flex items-center justify-center text-foreground hover:bg-destructive hover:text-destructive-foreground transition-colors"
                    >
                        ✕
                    </button>
                </div>

                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                            Título *
                        </label>
                        <input
                            type="text"
                            value={newStory.titulo}
                            onChange={(e) => setNewStory({...newStory, titulo: e.target.value})}
                            className="w-full px-4 py-2.5 border border-input rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-primary"
                            placeholder="Ej: Mi viaje a la playa"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                            Descripción
                        </label>
                        <textarea
                            value={newStory.descripcion}
                            onChange={(e) => setNewStory({...newStory, descripcion: e.target.value})}
                            className="w-full px-4 py-2.5 border border-input rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-primary min-h-[100px]"
                            placeholder="Describe tu historia..."
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                            URL del Media (imagen o video) *
                        </label>
                        <input
                            type="url"
                            value={newStory.urlMedia}
                            onChange={(e) => setNewStory({...newStory, urlMedia: e.target.value})}
                            className="w-full px-4 py-2.5 border border-input rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-primary"
                            placeholder="https://ejemplo.com/imagen.jpg"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                            URL de Miniatura (opcional)
                        </label>
                        <input
                            type="url"
                            value={newStory.urlMiniatura}
                            onChange={(e) => setNewStory({...newStory, urlMiniatura: e.target.value})}
                            className="w-full px-4 py-2.5 border border-input rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-primary"
                            placeholder="https://ejemplo.com/miniatura.jpg"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                            Tipo de Media
                        </label>
                        <div className="flex gap-4">
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    value="IMAGEN"
                                    checked={newStory.tipoMedia === 'IMAGEN'}
                                    onChange={(e) => setNewStory({...newStory, tipoMedia: e.target.value})}
                                    className="mr-2"
                                />
                                <span className="text-foreground">Imagen</span>
                            </label>
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    value="VIDEO"
                                    checked={newStory.tipoMedia === 'VIDEO'}
                                    onChange={(e) => setNewStory({...newStory, tipoMedia: e.target.value})}
                                    className="mr-2"
                                />
                                <span className="text-foreground">Video</span>
                            </label>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                            Enlace Permanente (opcional)
                        </label>
                        <input
                            type="url"
                            value={newStory.enlacePermanente}
                            onChange={(e) => setNewStory({...newStory, enlacePermanente: e.target.value})}
                            className="w-full px-4 py-2.5 border border-input rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-primary"
                            placeholder="https://instagram.com/p/..."
                        />
                    </div>

                    {/* NUEVO CAMPO: Fecha de Publicación */}
                    <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                            Fecha de Publicación
                        </label>
                        <input
                            type="datetime-local"
                            value={newStory.fechaPublicacion}
                            onChange={(e) => setNewStory({...newStory, fechaPublicacion: e.target.value})}
                            className="w-full px-4 py-2.5 border border-input rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-primary"
                        />
                    </div>

                    {/* NUEVO CAMPO: Destacada */}
                    <div>
                        <label className="flex items-center">
                            <input
                                type="checkbox"
                                checked={newStory.esDestacada}
                                onChange={(e) => setNewStory({...newStory, esDestacada: e.target.checked})}
                                className="mr-2"
                            />
                            <span className="text-foreground">Marcar como destacada</span>
                        </label>
                    </div>

                    <div className="flex gap-3 pt-4">
                        <button
                            onClick={onClose}
                            className="flex-1 bg-muted text-foreground font-medium py-3 px-4 rounded-lg hover:bg-default-200 transition-colors"
                        >
                            Cancelar
                        </button>
                        <button
                            onClick={handleAddStory}
                            disabled={uploading}
                            className="flex-1 bg-gradient-to-r from-primary to-primary-400 text-primary-foreground font-medium py-3 px-4 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
                        >
                            {uploading ? (
                                <span className="flex items-center justify-center gap-2">
                                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                    Guardando...
                                </span>
                            ) : 'Guardar Historia'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}