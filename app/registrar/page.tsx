"use client";

import { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';

export default function Registrar() {
const [tipo, setTipo] = useState('seco');
const [foto, setFoto] = useState<File | null>(null);
const [loading, setLoading] = useState(false);
const [localizacao, setLocalizacao] = useState<{lat: number | null, lng: number | null}>({ lat: -23.5505, lng: -46.6333 }); // Localização fixa para teste

useEffect(() => {
// Tenta pegar a real, se não conseguir, mantém a fixa acima
if ("geolocation" in navigator) {
navigator.geolocation.getCurrentPosition((pos) => {
setLocalizacao({ lat: pos.coords.latitude, lng: pos.coords.longitude });
});
}
}, []);

async function handlePublicar() {
if (!foto) return alert("A foto é obrigatória!");
setLoading(true);

try {
const fileName = `${Date.now()}-${foto.name}`;
const { data: uploadData, error: uploadError } = await supabase.storage
.from('fotos-residuos')
.upload(fileName, foto);

if (uploadError) throw uploadError;

const { data: urlData } = supabase.storage
.from('fotos-residuos')
.getPublicUrl(fileName);

const { error: dbError } = await supabase.from('residuos').insert([{
tipo: tipo,
foto_url: urlData.publicUrl,
lat: localizacao.lat,
lng: localizacao.lng,
status: 'disponível'
}]);

if (dbError) throw dbError;

alert("Resíduo publicado com sucesso!");
setFoto(null);
} catch (err: any) {
alert("Erro ao publicar: " + err.message);
} finally {
setLoading(false);
}
}

return (
<div className="p-6 max-w-lg mx-auto bg-white min-h-screen">
<h1 className="text-2xl font-bold text-green-700 mb-6 text-center">Nova Coleta</h1>

<div className="mb-4">
<label className="block font-semibold mb-2">Tipo de Resíduo:</label>
<select
className="w-full p-3 border rounded-lg bg-gray-50"
value={tipo}
onChange={(e) => setTipo(e.target.value)}
>
<option value="seco">Reciclável Seco</option>
<option value="entulho">Entulho Leve</option>
</select>
</div>

<div className="mb-6 p-8 border-2 border-dashed border-gray-300 rounded-lg text-center bg-gray-50">
<p className="text-gray-500 mb-4 font-medium">A foto é obrigatória 📸</p>
<input
type="file"
accept="image/*"
onChange={(e) => setFoto(e.target.files?.[0] || null)}
className="mx-auto"
/>
</div>

<button
onClick={handlePublicar}
disabled={loading}
className="w-full bg-green-600 text-white p-4 rounded-xl font-bold text-lg hover:bg-green-700 disabled:bg-gray-400 transition-colors"
>
{loading ? 'Enviando...' : 'Publicar Resíduo'}
</button>

<p className="text-xs text-gray-400 mt-4 text-center italic">
📍 Localização: {localizacao.lat?.toFixed(4)}, {localizacao.lng?.toFixed(4)}
</p>
</div>
);
}
