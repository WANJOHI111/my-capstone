// frontend helper to call the serverless proxy
export async function searchTracks(query) {
  const res = await fetch(`/.netlify/functions/proxy?type=search&q=${encodeURIComponent(query)}`);
  if (!res.ok) throw new Error('Search failed');
  const json = await res.json();
  return json.data || [];
}
export async function getTrackById(id) {
  const res = await fetch(`/.netlify/functions/proxy?type=track&id=${id}`);
  if (!res.ok) throw new Error('Track fetch failed');
  return res.json();
}
