import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import TrackList from './components/TrackList';
import MusicPlayer from './components/MusicPlayer';
import { searchTracks } from './api';

export default function App() {
  const [tracks, setTracks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [current, setCurrent] = useState(null);

  async function handleSearch(q) {
    setLoading(true);
    setError(null);
    try {
      const results = await searchTracks(q);
      setTracks(results);
    } catch (err) {
      console.error(err);
      setError('Failed to fetch tracks. Try again.');
      setTracks([]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Music Player</h1>
      <SearchBar onSearch={handleSearch} />
      {loading && <div className="mt-4">Searching...</div>}
      {error && <div className="mt-4 text-red-600">{error}</div>}
      <div className="mt-4">
        <TrackList tracks={tracks} onPlay={track => setCurrent(track)} />
      </div>
      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg">
        <MusicPlayer track={current} />
      </div>
    </div>
  );
}
