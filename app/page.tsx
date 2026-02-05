export default function Home() {
return (
<main className="flex min-h-screen flex-col items-center justify-center p-6 bg-gray-100">
<h1 className="text-4xl font-bold text-green-600 mb-8">Coleta Inteligente ♻️</h1>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
{/* Card para o Gerador */}
<a href="/registrar" className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all border-t-4 border-green-500 text-center">
<h2 className="text-2xl font-bold mb-4">Gerador de Resíduos</h2>
<p className="text-gray-600 mb-6">Tenho entulho ou material seco para descartar e quero que alguém colete.</p>
<span className="bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold">Anunciar Coleta</span>
</a>

{/* Card para o Coletor */}
<a href="/mapa" className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all border-t-4 border-blue-500 text-center">
<h2 className="text-2xl font-bold mb-4">Coletor / Reciclador</h2>
<p className="text-gray-600 mb-6">Quero ver o mapa com resíduos disponíveis perto de mim para coletar.</p>
<span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold">Ver Mapa</span>
</a>
</div>
</main>
)
}
