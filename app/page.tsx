"use client";

import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      
      {/* 1. SEÇÃO HERO (IMPACTO INICIAL) */}
      <section className="relative bg-gradient-to-br from-green-600 to-green-800 py-20 px-6 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
            Coleta Inteligente ♻️
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-green-100 leading-relaxed font-light">
            Conectando geradores de resíduos a cooperativas e recicladores em tempo real.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/registrar" className="bg-white text-green-700 px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:scale-105 transition-all">
              Anunciar Resíduo
            </Link>
            <Link href="/mapa" className="bg-green-900 text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:scale-105 transition-all border border-green-400">
              Ver Mapa de Coleta
            </Link>
          </div>
        </div>
      </section>

      {/* 2. COMO FUNCIONA (O FLUXO) */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-16 text-gray-800 uppercase tracking-widest text-sm text-center w-full">Como funciona o ecossistema</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center text-3xl mb-6 shadow-lg text-white">📸</div>
              <h4 className="text-xl font-bold mb-3 text-green-800">1. Fotografe</h4>
              <p className="text-gray-600 text-sm leading-relaxed">Geradores publicam o resíduo com foto obrigatória. Sem imagem real, não há publicação.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center text-3xl mb-6 shadow-lg text-white">📍</div>
              <h4 className="text-xl font-bold mb-3 text-green-800">2. Localize</h4>
              <p className="text-gray-600 text-sm leading-relaxed">Nossa tecnologia identifica a posição GPS exata, facilitando a rota para quem coleta.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center text-3xl mb-6 shadow-lg text-white">🚛</div>
              <h4 className="text-xl font-bold mb-3 text-green-800">3. Colete</h4>
              <p className="text-gray-600 text-sm leading-relaxed">O anúncio expira em 12h. Mais agilidade para as cooperativas e cidades mais limpas.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SEÇÃO COOPERATIVAS E EMPRESAS */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white p-10 md:p-16 rounded-[3rem] shadow-2xl border border-gray-100 flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <span className="text-green-600 font-bold tracking-widest uppercase text-xs mb-4 block">Parceiros Estratégicos 🤝</span>
              <h2 className="text-4xl font-black text-gray-800 mb-6 leading-tight">Ideal para Cooperativas e Empresas de Reciclagem</h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Otimize a logística da sua frota. Visualize onde estão os materiais de interesse e trace rotas inteligentes para aumentar a produtividade da sua equipe.
              </p>
              <div className="grid grid-cols-1 gap-4 text-gray-700 font-semibold mb-8">
                <div className="flex items-center gap-3">♻️ Materiais Secos Separados</div>
                <div className="flex items-center gap-3">🏗️ Logística de Entulho Leve</div>
                <div className="flex items-center gap-3">📱 Contato via WhatsApp Integrado</div>
              </div>
            </div>
            <div className="w-full md:w-1/3 text-center">
               <div className="text-7xl mb-6">🏢</div>
               <p className="text-gray-400 text-sm italic">"Tecnologia descentralizada para um mundo mais sustentável."</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SEÇÃO GOVERNAMENTAL (FUTURO / EXPANSÃO) */}
      <section className="py-16 px-6 bg-blue-900 text-white">
        <div className="max-w-5xl mx-auto text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-4">Gestão Pública & Smart Cities 🏛️</h2>
            <p className="text-blue-200 text-sm">
              Oferecemos para Prefeituras uma solução de baixo custo para monitoramento e limpeza urbana colaborativa.
            </p>
          </div>
          <Link href="https://wa.me/5591999999999" target="_blank" className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-xl font-bold transition-all whitespace-nowrap">
            Consultoria para Prefeituras
          </Link>
        </div>
      </section>

      {/* 5. FOOTER */}
      <footer className="bg-gray-100 py-12 px-6 text-center border-t border-gray-200 text-gray-500 text-center w-full">
        <div className="max-w-5xl mx-auto flex flex-col items-center">
          <p className="text-sm font-bold text-gray-800 mb-4 tracking-widest uppercase">Coleta Inteligente ♻️</p>
          <div className="flex flex-wrap justify-center gap-6 text-xs mb-8 font-medium">
            <span className="hover:text-green-600 cursor-pointer transition-colors">POLÍTICA DE PRIVACIDADE</span>
            <span className="hover:text-green-600 cursor-pointer transition-colors border-x px-6">TERMOS DE USO</span>
            <span className="hover:text-green-600 cursor-pointer transition-colors text-green-700 font-bold uppercase">Comunidade Coleta Cripto</span>
          </div>
          <p className="text-[10px] leading-relaxed">
            © 2026 - Desenvolvido para transformar a limpeza urbana através da tecnologia e geolocalização.
          </p>
        </div>
      </footer>

    </div>
  );
}
