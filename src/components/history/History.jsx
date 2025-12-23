import { useEffect, useState, useRef } from 'react'
import Agregar from './components/Agregar'

export default function InstagramStories() {
    const [stories, setStories] = useState([])
    const [loading, setLoading] = useState(true)
    const [selectedStory, setSelectedStory] = useState(null)
    const [currentStoryIndex, setCurrentStoryIndex] = useState(0)
    const [showAddStoryModal, setShowAddStoryModal] = useState(false)
    const videoRef = useRef(null)

    // Verificar si el usuario está logeado
    const isLoggedIn = () => {
        const token = localStorage.getItem('token')
        return !!token
    }

    useEffect(() => {
        async function fetchStories() {
            try {
                const response = await fetch('/api/history')
                const data = await response.json()
                setStories(data)
                console.log('📱 Historias cargadas:', data)
            } catch (error) {
                console.error('Error:', error)
            } finally {
                setLoading(false)
            }
        }
        fetchStories()
    }, [])

    // Función para manejar el fin del video
    const handleVideoEnd = () => {
        if (!selectedStory) return

        const currentIndex = stories.findIndex(s => s.uuid === selectedStory.uuid)

        if (currentIndex < stories.length - 1) {
            const nextStory = stories[currentIndex + 1]
            setSelectedStory(nextStory)
            setCurrentStoryIndex(currentIndex + 1)
        } else {
            setSelectedStory(null)
            setCurrentStoryIndex(0)
        }
    }

    // Manejar clic en cualquier parte para siguiente historia
    const handleContainerClick = (e) => {
        if (e.target.tagName === 'BUTTON' || e.target.tagName === 'A') return

        const currentIndex = stories.findIndex(s => s.uuid === selectedStory.uuid)

        if (currentIndex < stories.length - 1) {
            const nextStory = stories[currentIndex + 1]
            setSelectedStory(nextStory)
            setCurrentStoryIndex(currentIndex + 1)
        }
    }

    // Función para detectar la red social del enlace
    const detectSocialNetwork = (url) => {
        if (!url) return { name: 'Desconocido', icon: '🔗', color: 'bg-gray-500' }

        const urlLower = url.toLowerCase()

        if (urlLower.includes('instagram.com')) return { name: 'Instagram', icon: '📷', color: 'bg-gradient-to-r from-purple-600 to-pink-600' }
        if (urlLower.includes('tiktok.com')) return { name: 'TikTok', icon: '🎵', color: 'bg-black' }
        if (urlLower.includes('youtube.com') || urlLower.includes('youtu.be')) return { name: 'YouTube', icon: '▶️', color: 'bg-red-600' }
        if (urlLower.includes('facebook.com')) return { name: 'Facebook', icon: '👤', color: 'bg-blue-600' }
        if (urlLower.includes('twitter.com') || urlLower.includes('x.com')) return { name: 'Twitter/X', icon: '🐦', color: 'bg-black' }

        return { name: 'Enlace', icon: '🔗', color: 'bg-primary' }
    }

    // Función para manejar cuando se agrega una historia
    const handleStoryAdded = (newStory) => {
        // Agregar la nueva historia al inicio de la lista
        setStories([newStory, ...stories])
    }

    if (loading) return (
        <div className="flex justify-center items-center h-40">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>
    )

    return (
        <div className="bg-background pt-16">
            <div className="container p-4">
                {/* ENCABEZADO CON BOTÓN PARA AGREGAR */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
                    <div className="flex items-center">
                        <div className="w-10 h-10 bg-gradient-to-r from-primary to-primary-400 rounded-full mr-3"></div>
                        <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary-400 bg-clip-text text-transparent">
                            Tus Historias
                        </h1>
                        <span className="ml-3 bg-primary-100 text-primary-800 text-sm font-medium px-3 py-1 rounded-full">
                            {stories.length} {stories.length === 1 ? 'historia' : 'historias'}
                        </span>
                    </div>

                    {/* BOTÓN PARA AGREGAR HISTORIA (SOLO SI ESTÁ LOGUEADO) */}
                    {isLoggedIn() && (
                        <button
                            onClick={() => setShowAddStoryModal(true)}
                            className="bg-gradient-to-r from-primary to-primary-400 text-primary-foreground font-semibold py-2.5 px-6 rounded-xl hover:opacity-90 transition-opacity flex items-center gap-2"
                        >
                            <span>+</span>
                            <span>Agregar Historia</span>
                        </button>
                    )}
                </div>

                {/* LISTA DE HISTORIAS */}
                <div className="flex space-x-6 overflow-x-auto pb-6 mb-8 scrollbar-hide">
                    {stories.map((story, index) => {
                        return (
                            <button
                                key={story.uuid}
                                onClick={() => {
                                    setSelectedStory(story)
                                    setCurrentStoryIndex(index)
                                }}
                                className="flex-shrink-0 flex flex-col items-center group"
                            >
                                <div className="relative">
                                    <div className="w-24 h-24 rounded-full p-[3px] bg-gradient-to-r from-primary via-primary-400 to-primary-300 group-hover:scale-105 transition-transform duration-300">
                                        <div className="w-full h-full rounded-full bg-card p-1">
                                            <img
                                                src={story.urlMiniatura || story.urlMedia}
                                                alt={story.titulo}
                                                className="w-full h-full rounded-full object-cover"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <p className="mt-3 text-sm font-medium text-foreground max-w-[100px] truncate group-hover:text-primary transition-colors">
                                    {story.titulo}
                                </p>
                            </button>
                        )
                    })}
                </div>

                {/* MODAL PARA AGREGAR HISTORIA (USANDO EL COMPONENTE SEPARADO) */}
                {showAddStoryModal && (
                    <div className="fixed inset-0 bg-default-950 bg-opacity-90 z-50 flex items-center justify-center p-4">
                        <Agregar 
                            onStoryAdded={handleStoryAdded}
                            onClose={() => setShowAddStoryModal(false)}
                        />
                    </div>
                )}

                {/* MODAL DE VISUALIZACIÓN DE HISTORIA */}
                {selectedStory && (
                    <div className="fixed inset-0 bg-default-950 bg-opacity-90 z-50 flex items-center justify-center">
                        <div className="relative bg-card rounded-4xl overflow-hidden max-w-3xl mx-auto w-full max-h-[90vh] shadow-2xl flex flex-col lg:flex-row">

                            {/* BOTÓN CERRAR */}
                            <button
                                onClick={() => {
                                    setSelectedStory(null)
                                    setCurrentStoryIndex(0)
                                }}
                                className="cursor-pointer absolute top-6 right-4 z-20 w-10 h-10 bg-default-800 bg-opacity-40 rounded-full flex items-center justify-center text-card hover:bg-opacity-60 transition-all"
                            >
                                ✕
                            </button>

                            {/* CONTENEDOR PRINCIPAL */}
                            <div
                                className="lg:w-3/6 bg-default-950 flex items-center justify-center cursor-pointer"
                                onClick={handleContainerClick}
                            >
                                <div className="relative w-full h-full flex items-center justify-center">
                                    {selectedStory.tipoMedia === 'VIDEO' ? (
                                        <div className="relative w-full h-full max-h-[90vh] flex items-center justify-center">
                                            <video
                                                key={selectedStory.uuid}
                                                ref={videoRef}
                                                src={selectedStory.urlMedia}
                                                autoPlay
                                                muted
                                                playsInline
                                                className="w-full h-full object-cover"
                                                onEnded={handleVideoEnd}
                                                onContextMenu={(e) => e.preventDefault()}
                                            >
                                                Tu navegador no soporta videos
                                            </video>
                                        </div>
                                    ) : (
                                        <div className="relative w-full h-full max-h-[90vh] flex items-center justify-center">
                                            <img
                                                src={selectedStory.urlMedia}
                                                alt={selectedStory.titulo}
                                                className="w-auto h-full max-h-full object-contain"
                                            />

                                            {/* INDICADOR SIGUIENTE PARA IMAGEN */}
                                            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white text-sm px-3 py-2 rounded-full opacity-0 hover:opacity-100 transition-opacity">
                                                {currentStoryIndex < stories.length - 1 ? '→' : '✕'}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* PANEL DE INFORMACIÓN */}
                            <div className="lg:w-3/6 p-8 overflow-y-auto">
                                <div className="mb-8">
                                    <h3 className="text-2xl font-bold text-foreground mb-3">{selectedStory.titulo}</h3>
                                    <div className="bg-muted rounded-xl p-4">
                                        <p className="text-card-foreground whitespace-pre-line">{selectedStory.descripcion}</p>
                                    </div>
                                </div>

                                {/* INFO DE ENLACE */}
                                {selectedStory.enlacePermanente && (
                                    <div className="mb-8">
                                        <a
                                            href={selectedStory.enlacePermanente}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-full bg-gradient-to-r from-primary to-primary-400 text-primary-foreground font-semibold py-3 px-4 rounded-xl hover:opacity-90 transition-opacity flex items-center justify-center space-x-2"
                                        >
                                            <span>🔗</span>
                                            <span>Abrir en {detectSocialNetwork(selectedStory.enlacePermanente).name}</span>
                                        </a>
                                    </div>
                                )}

                                {/* HASHTAGS */}
                                {selectedStory.descripcion?.match(/#\w+/g) && (
                                    <div className="mb-8">
                                        <h3 className="text-lg font-semibold text-foreground mb-3">🏷️ Etiquetas</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {selectedStory.descripcion.match(/#\w+/g)?.map((tag, index) => (
                                                <span key={index} className="bg-primary-100 text-primary-800 text-sm font-medium px-3 py-1.5 rounded-full hover:bg-primary-200 transition-colors cursor-pointer">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* CONTROLES DE NAVEGACIÓN */}
                                <div className="flex justify-between items-center mt-8 pt-6 border-t border-border">
                                    <button
                                        onClick={() => {
                                            if (currentStoryIndex > 0) {
                                                setSelectedStory(stories[currentStoryIndex - 1])
                                                setCurrentStoryIndex(currentStoryIndex - 1)
                                            }
                                        }}
                                        disabled={currentStoryIndex === 0}
                                        className={`px-4 py-2 rounded-xl flex items-center space-x-2 ${currentStoryIndex === 0 ? 'bg-muted text-muted-foreground cursor-not-allowed' : 'bg-primary-100 text-primary-800 hover:bg-primary-200'}`}
                                    >
                                        <span>←</span>
                                        <span>Anterior</span>
                                    </button>

                                    <span className="text-sm text-muted-foreground">
                                        {currentStoryIndex + 1} / {stories.length}
                                    </span>

                                    <button
                                        onClick={() => {
                                            if (currentStoryIndex < stories.length - 1) {
                                                setSelectedStory(stories[currentStoryIndex + 1])
                                                setCurrentStoryIndex(currentStoryIndex + 1)
                                            } else {
                                                setSelectedStory(null)
                                                setCurrentStoryIndex(0)
                                            }
                                        }}
                                        className="px-4 py-2 rounded-xl flex items-center space-x-2 bg-primary-100 text-primary-800 hover:bg-primary-200"
                                    >
                                        <span>{currentStoryIndex < stories.length - 1 ? 'Siguiente' : 'Cerrar'}</span>
                                        <span>{currentStoryIndex < stories.length - 1 ? '→' : '✕'}</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}