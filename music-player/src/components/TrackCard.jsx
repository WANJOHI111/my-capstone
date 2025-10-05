import React from 'react';

export default function TrackCard({ track, onPlay }) {
  // track has fields like: id, title, artist.name, album.cover_small, preview
  return (
    <div className="flex gap-4 items-center p-2 border-b hover:bg-gray-50">
      <img src={track.album?.cover_small} alt={track.album?.title} className="w-14 h-14 rounded" />
      <div className="flex-1">
        <div className="font-semibold">{track.title}</div>
        <div className="text-sm text-gray-600">{track.artist?.name} • {track.album?.title}</div>
      </div>
      <div>
        <button
          onClick={() => onPlay(track)}
          className="px-3 py-1 rounded bg-green-500 text-white"
        >
          Play
        </button>
      </div>
    </div>
  );
}
