import React, { useState } from 'react';

export default function SearchBar({ onSearch }) {
  const [q, setQ] = useState('');
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        if (q.trim()) onSearch(q.trim());
      }}
      className="flex gap-2"
    >
      <input
        type="text"
        value={q}
        onChange={e => setQ(e.target.value)}
        placeholder="Search songs, artists, or albums..."
        className="flex-1 p-2 rounded border"
      />
      <button type="submit" className="px-4 py-2 rounded bg-indigo-600 text-white">Search</button>
    </form>
  );
}
