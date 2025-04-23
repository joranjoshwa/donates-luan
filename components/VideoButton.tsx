type Props = {
    title: string,
    onClick: () => void
}

export const VideoButton = ({ title, onClick }: Props) => {
    return (
        <button
            onClick={onClick}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-all duration-200"
        >
            {title}
        </button>
    );
}