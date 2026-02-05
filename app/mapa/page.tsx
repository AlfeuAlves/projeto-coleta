"use client";

import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';
import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';

// Carregamento dinâmico do mapa para evitar erros de renderização no servidor
const MapContainer = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then(mod => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import('react-leaflet').then(mod => mod.Marker), { ssr: false });
const Popup = dynamic(() => import('react-leaflet').then(mod => mod.Popup), { ssr: false });

export default function MapaColeta() {
const [residuos, setResiduos] = useState<any[]>([]);

useEffect(() => {
// 1. Corrigir ícones do Leaflet que somem no Next.js
import('leaflet').then(L => {
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});
});

// 2. Buscar resíduos 'disponíveis' no Supabase
async function buscarResiduos() {
const { data } = await supabase
.from('residuos')
.select('*')
.eq('status', 'disponível'); // Ajuste aqui se o seu banco estiver sem acento

setResiduos(data || []);
}

buscarResiduos();
}, []);

return (
<div className="h-screen w-full flex flex-col font-sans">
<header className="p-4 bg-blue-700 text-white font-bold text-center shadow-lg z-[1000]">
Coletas Disponíveis 🗺️
</header>

<div className="flex-1 z-0">
<MapContainer
center={[-1.4558, -48.4902]} // Belém/PA
zoom={13}
style={{ height: '100%', width: '100%' }}
>
<TileLayer
attribution='&copy; OpenStreetMap contributors'
url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
/>

{residuos.map((res) => (
<Marker key={res.id} position={[res.lat, res.lng]}>
<Popup>
<div className="text-center min-w-[160px]">
<p className="font-bold text-lg text-gray-800 mb-2 uppercase">
{res.tipo === 'seco' ? '♻️ Seco' : '🏗️ Entulho'}
</p>

{res.foto_url && (
<img
src={res.foto_url}
alt="Foto do resíduo"
className="w-full h-32 object-cover rounded-lg mb-3 border shadow-sm"
/>
)}

<div className="flex flex-col gap-2">
{/* Botão para WhatsApp */}
<a
href={`https://wa.me/5591999999999`} // Depois trocar pelo WhatsApp real do gerador
target="_blank"
rel="noopener noreferrer"
className="bg-green-500 text-white py-2 rounded-md font-bold text-sm hover:bg-green-600 transition-all text-center no-underline"
>
Falar com Gerador
</a>

{/* Botão para Trajeto no Google Maps */}
<a
href={`https://www.google.com/maps/dir/?api=1&destination=${res.lat},${res.lng}`}
target="_blank"
rel="noopener noreferrer"
className="bg-blue-500 text-white py-2 rounded-md font-bold text-sm hover:bg-blue-600 transition-all text-center no-underline"
>
Ver Trajeto 🚗
</a>
</div>
</div>
</Popup>
</Marker>
))}
</MapContainer>
</div>

<footer className="p-2 bg-gray-100 text-center text-[10px] text-gray-500 uppercase tracking-widest border-t">
{residuos.length} resíduos encontrados no mapa
</footer>
</div>
);
}
