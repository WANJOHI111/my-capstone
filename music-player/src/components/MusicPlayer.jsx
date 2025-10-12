import React, { useEffect, useRef, useState } from 'react';

export default function MusicPlayer({ track, onEnded }) {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(1);

  useEffect(() => {
    if (!audioRef.current) return;
    audioRef.current.volume = volume;
  }, [volume]);

  useEffect(() => {
    if (!track) return;
    
    setPlaying(true);
    audioRef.current && (audioRef.current.src = track.preview || '');
    audioRef.current && audioRef.current.play().catch(() => setPlaying(false));
  }, [track]);

  const toggle = async () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      try {
        await audioRef.current.play();
        setPlaying(true);
      } catch {
        setPlaying(false);
      }
    }
  };

  if (!track) {
    return <div className="p-4 text-gray-600">Select a track to play.</div>;
  }

  return (
    <div className="p-4 flex items-center gap-4 border-t">
      <img src={track.album?.cover_small} alt="" className="w-16 h-16 rounded" />
      <div className="flex-1">
        <div className="font-semibold">{track.title}</div>
        <div className="text-sm text-gray-600">{track.artist?.name}</div>
        <div className="flex items-center gap-2 mt-2">
          <button onClick={toggle} className="px-3 py-1 rounded bg-indigo-600 text-white">
            {playing ? 'Pause' : 'Play'}
          </button>
          <label className="text-sm">Volume</label>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={e => setVolume(Number(e.target.value))}
          />
        </div>
      </div>

      <audio
        ref={audioRef}
        onEnded={() => {
          setPlaying(false);
          onEnded && onEnded();
        }}
      />
    </div>
  );
}
