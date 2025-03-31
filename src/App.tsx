import React, { useState, useEffect } from 'react';
import { BookOpen, Brain, Sparkles, Shield, Star, CheckCircle, ArrowRight, ExternalLink, Clock, Siren as Fire, Gift } from 'lucide-react';

import ebookAgenteIa2 from './ebook agente ia 2.png';
import ebookConteudo1 from './ebook conteudo 1.png';

function App() {
  const [timeLeft, setTimeLeft] = useState(13 * 60); // 13 minutes in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="min-h-screen bg-[#000919] text-white">
      {/* Header with Timer */}
      <div className="bg-gradient-to-r from-red-600 to-red-800 py-3">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center gap-4">
            <Fire className="w-6 h-6 animate-pulse" />
            <div className="text-center">
              <p className="font-bold text-lg mb-1">OFERTA ESPECIAL POR TEMPO LIMITADO!</p>
              <div className="flex items-center justify-center gap-2">
                <Clock className="w-5 h-5" />
                <div className="flex gap-1 items-center">
                  <div className="bg-white text-red-600 rounded px-2 py-1 font-mono font-bold">
                    {minutes.toString().padStart(2, '0')}
                  </div>
                  <span className="font-bold">:</span>
                  <div className="bg-white text-red-600 rounded px-2 py-1 font-mono font-bold">
                    {seconds.toString().padStart(2, '0')}
                  </div>
                </div>
              </div>
            </div>
            <Fire className="w-6 h-6 animate-pulse" />
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-[#001233] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-transparent z-0"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6">
                Guia Definitivo de Agentes de IA para Iniciantes
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Imagine ter à sua disposição ferramentas inteligentes, incansáveis e altamente especializadas, trabalhando 24 horas por dia para otimizar suas tarefas, automatizar processos complexos e impulsionar seus ganhos. Essa não é mais uma visão futurista – é a realidade que os Agentes de IA oferecem AGORA!<br></br><br></br>
                No mercado digital de alta velocidade, ficar para trás não é uma opção. A Inteligência Artificial está transformando negócios em todos os setores, e aqueles que souberem aproveitar seu potencial terão uma vantagem competitiva INEGÁVEL.
              </p>
              <div className="bg-white/10 p-6 rounded-lg mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <Gift className="w-6 h-6 text-[#0088ff]" />
                  <span className="font-semibold text-lg">Oferta Especial</span>
                </div>
                <div className="mb-4">
                  <span className="text-gray-400 line-through text-2xl">R$ 197,00</span>
                  <div className="flex items-end gap-2">
                    <span className="text-4xl font-bold text-[#0088ff]">R$ 97,00</span>
                    <span className="text-gray-400 mb-1">à vista</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <a
                    href="https://pay.kiwify.com.br/LJBDNqf"
                    className="w-full bg-green-500 hover:bg-green-600 px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 inline-block text-center"
                  >
                    COMPRAR AGORA
                  </a>
                  <a
                    href="https://pay.kiwify.com.br/PapOzka"
                    className="w-full bg-[#0088ff] hover:bg-[#0066cc] px-8 py-4 rounded-lg font-bold text-lg inline-block text-center"
                  >
                    ADQUIRIR +60 PROMPT'S
                  </a>
                </div>
                <p className="text-center text-sm mt-4 text-gray-400">
                  🔒 Pagamento 100% seguro via PIX ou Cartão
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src={ebookConteudo1}
                alt="IA Book Preview"
                className="rounded-lg shadow-2xl w-full h-auto"
              />
              <div className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-full font-bold animate-bounce">
                58% OFF
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-4">Chegou a hora de você dominar as ferramentas de IA mais poderosas do mercado e se tornar um mestre na arte de criar, customizar e otimizar Agentes de IA.</h3>
          <h4 className="text-3xl font-bold text-center mb-4">O Que Você Vai Aprender</h4>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
            Um guia completo e prático para conhecer as ferramentas de criação de Agentes de IA mais avançadas do mercado
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Brain className="w-6 h-6" />,
                title: "Fundamentos de IA",
                description: "Entenda os conceitos essenciais e como aplicá-los em seus projetos. Saiba qual a importância de cada ferramenta"

              },
              {
                icon: <Sparkles className="w-6 h-6" />,
                title: "Prompts Avançados",
                description: "Técnicas para criar prompts mais eficientes. Escolha o combo e ganhei +60 prompt´s para criação de conteúdo"
              },
              {
                icon: <Shield className="w-6 h-6" />,
                title: "Melhores Práticas",
                description: "Aprenda de uma maneira simples e objetiva como criar um agente de IA do zero para Telegram, WhatsApp, Messenger e outros"
              }
            ].map((item, index) => (
              <div key={index} className="bg-[#001a47] p-8 rounded-lg">
                <div className="w-12 h-12 bg-[#0088ff] rounded-full flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Conteúdo do E-book</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              {[
                "Introdução: O impacto da IA no mundo",
                "O que são Agentes de IA?",
                "Aplicações dos Agentes de IA",
                "Principais Ferramentas e Como Acessá-las",
                "Como Criar um Agente de IA Passo a Passo",
                "Ética e Considerações Importantes"
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-4">
                  <CheckCircle className="w-6 h-6 text-[#0088ff]" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            <div className="relative">
              <img
                src={ebookAgenteIa2}
                alt="E-book Preview"
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="bg-[#0088ff] py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Conheça Nosso Blog
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Acesse o EstudaTech e descubra mais conteúdos sobre tecnologia e inovação
          </p>
          <a
            href="https://estudatech.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#001233] hover:bg-[#001a47] px-8 py-4 rounded-lg font-semibold"
          >
            Visitar Blog <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </section>


      <section className="relative bg-[#001233] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-transparent z-0"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6">
                Guia Definitivo de Agentes de IA para Iniciantes
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Chegou a hora de você dominar as ferramentas de IA mais poderosas do mercado e se tornar um mestre na arte de criar, customizar e otimizar Agentes de IA.<br></br><br></br>Não perca mais tempo com métodos ultrapassados. A revolução da Inteligência Artificial já começou, e a hora de você embarcar nessa jornada é AGORA!
              </p>
              <div className="bg-white/10 p-6 rounded-lg mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <Gift className="w-6 h-6 text-[#0088ff]" />
                  <span className="font-semibold text-lg">Oferta Especial</span>
                </div>
                <div className="mb-4">
                  <span className="text-gray-400 line-through text-2xl">R$ 197,00</span>
                  <div className="flex items-end gap-2">
                    <span className="text-4xl font-bold text-[#0088ff]">R$ 97,00</span>
                    <span className="text-gray-400 mb-1">à vista</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <a
                    href="https://pay.kiwify.com.br/LJBDNqf"
                    className="w-full bg-green-500 hover:bg-green-600 px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 inline-block text-center"
                  >
                    COMPRAR AGORA
                  </a>

                  <a
                    href="https://pay.kiwify.com.br/PapOzka"
                    className="w-full bg-[#0088ff] hover:bg-[#0066cc] px-8 py-4 rounded-lg font-bold text-lg inline-block text-center"
                  >
                    ADQUIRIR +60 PROMPT'S
                  </a>
                </div>
                <p className="text-center text-sm mt-4 text-gray-400">
                  🔒 Pagamento 100% seguro via PIX ou Cartão
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src={ebookConteudo1}
                alt="IA Book Preview"
                className="rounded-lg shadow-2xl w-full h-auto"
              />
              <div className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-full font-bold animate-bounce">
                58% OFF
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-[#001233]">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center gap-8 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5" />
              <span>Garantia de 7 dias</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>Pagamento Seguro</span>
            </div>
            <div className="flex items-center gap-2">
              <ArrowRight className="w-5 h-5" />
              <span>Acesso Imediato</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#000919] py-8">
        <div className="container mx-auto px-4 text-center text-sm text-gray-400">
          <p>© 2025 Estudatech Tecnologia. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;