"use client";

import Link from 'next/link';

export default function Home() {
return (
<div className="min-h-screen bg-white font-sans text-gray-900">

<section className="bg-gradient-to-br from-green-600 to-green-800 py-20 px-6 text-center text-white">
<div className="max-w-4xl mx-auto">
<h1 className="text-5xl font-extrabold mb-6">Coleta Inteligente ♻️</h1>
<p className="text-xl mb-10">Conectando geradores de resíduos a recicladores em tempo real.</p>
<div className="flex flex-wrap justify-center gap-4">
<Link href="/registrar" className="bg-white text-green-700 px-10 py-4 rounded-full font-bold shadow-xl">Anunciar Resíduo</Link>
<Link href="/mapa" className="bg-green-900 text-white px-10 py-4 rounded-full font-bold shadow-xl border border-green-400">Ver Mapa</Link>
</div>
</div>
</section>

<section className="py-20 px-6 bg-gray-50 text-center">
<h2 className="text-2xl font-bold mb-12">Como funciona?</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
<div><div className="text-4xl mb-4">📸</div><h4 className="font-bold">1. Fotografe</h4><p className="text-sm">Foto obrigatória para segurança.</p></div>
<div><div className="text-4xl mb-4">📍</div><h4 className="font-bold">2. Localize</h4><p className="text-sm">GPS capturado na hora.</p></div>
<div><div className="text-4xl mb-4">🚛</div><h4 className="font-bold">3. Colete</h4><p className="text-sm">Anúncios expiram em 12h.</p></div>
</div>
</section>

<section className="py-20 px-6">
<div className="max-w-4xl mx-auto bg-white p-10 rounded-3xl shadow-xl border border-gray-100 text-center">
<h2 className="text-3xl font-black mb-6">Para Cooperativas e Empresas</h2>
<p className="text-gray-600 mb-8 text-lg">Otimize a logística da sua frota e aumente a produtividade.</p>
<div className="text-green-600 font-bold">♻️ Materiais Secos | 🏗️ Entulho Leve | 📱 WhatsApp</div>
</div>
</section>

<footer className="bg-gray-900 text-gray-500 py-10 text-center text-xs">
<p className="mb-4">COLETA INTELIGENTE ♻️</p>
<p>© 2026 • Comunidade Coleta Cripto</p>
</footer>

</div>
);
}
