import React from 'react';
import TrackCard from './TrackCard';

export default function TrackList({ tracks, onPlay }) {
  if (!tracks) return null;
  if (tracks.length === 0) {
    return <div className="p-4 text-gray-600">No results found.</div>;
  }
  return (
    <div className="divide-y">
      {tracks.map(t => <TrackCard key={t.id} track={t} onPlay={onPlay} />)}
    </div>
  );
}
