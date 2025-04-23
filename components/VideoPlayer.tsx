type Props = {
    youtubeId: string | null
}

export const VideoPlayer = ({ youtubeId }: Props) => {
    if (!youtubeId) {
        return <p className="text-center text-gray-500 mt-4">Selecione um donate para assistir</p>
    }

    return (
        <div className="flex justify-center mt-6">
            <iframe 
                className="w-full max-w-3xl aspect-video rounded-xl shadow-lg"
                src={`https://www.youtube.com/embed/${youtubeId}`} 
                title="Player"
                frameBorder="0"
                allowFullScreen
            ></iframe>
        </div>
    );
}