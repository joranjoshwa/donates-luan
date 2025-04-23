"use client"

import { useState } from "react";
import { VideoButton } from "@/components/VideoButton";
import { VideoPlayer } from "@/components/VideoPlayer";
import { videos } from "@/data/videos";
import { Video } from "@/types/Video";

const Page = () => {

  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-cyan-100 py-10 px-4">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Selecione um Donate do Luan
      </h1>

      <div className="flex justify-center mb-8">
        <img
          src="https://preview.redd.it/comics-gringas-s%C3%A3o-estranhas-v0-vqw5wznsiy4c1.jpeg?width=1170&format=pjpg&auto=webp&s=dac611eca87dd6f52fc39f7f955503dc6bacf8ae"
          alt="Thumbnail do vídeo"
          className="w-72 h-auto rounded-lg shadow-md"
        />
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        {videos.map((video: Video) => (
          <VideoButton
            key={video.id}
            title={video.title}
            onClick={() => setSelectedVideo(video.youtubeId)}
          />
        ))}
      </div>

      <VideoPlayer youtubeId={selectedVideo} />
    </div>
  );
}

export default Page;