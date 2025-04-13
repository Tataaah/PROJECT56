import React, { useState, useEffect } from 'react';
import { Star, Crown, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-scroll';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  const [currentDate, setCurrentDate] = useState('');
  const [timeLeft, setTimeLeft] = useState({ hours: 24, minutes: 0, seconds: 0 });
  const [notifications, setNotifications] = useState<string[]>([]);

  useEffect(() => {
    const date = new Date();
    setCurrentDate(date.toLocaleDateString());

    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        if (prevTime.seconds > 0) {
          return { ...prevTime, seconds: prevTime.seconds - 1 };
        } else if (prevTime.minutes > 0) {
          return { ...prevTime, minutes: prevTime.minutes - 1, seconds: 59 };
        } else if (prevTime.hours > 0) {
          return { hours: prevTime.hours - 1, minutes: 59, seconds: 59 };
        }
        return prevTime;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const names = ['Maria', 'João', 'Ana', 'Pedro', 'Julia', 'Carlos', 'Beatriz'];
    const interval = setInterval(() => {
      const randomName = names[Math.floor(Math.random() * names.length)];
      setNotifications(prev => [...prev, `${randomName} acabou de comprar!`]);
      setTimeout(() => {
        setNotifications(prev => prev.slice(1));
      }, 3000);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <ChevronRight />,
    prevArrow: <ChevronLeft />
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-50 to-pink-100">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-2">
          TRANSFORME RECHEIOS SEM FOGO EM UMA RENDA EXTRA DE{' '}
          <span className="text-pink-600">ATÉ R$3.735 POR MÊS!</span>
        </h1>
        
        <div className="text-center mb-4">
          <span className="text-gray-600">ATUALIZADO EM {currentDate}</span>
        </div>

        <div className="bg-green-600 text-white text-center py-1 px-4 rounded-lg mb-4 inline-block mx-auto">
          90% de desconto
        </div>

        <div className="text-center mb-4">
          <p className="text-gray-500 line-through">DE R$120,00</p>
          <p className="text-2xl font-bold">POR APENAS R$12,99</p>
        </div>

        <Link to="pacotes" smooth={true} duration={500}>
          <button className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-6 rounded-lg w-full mb-8 transform hover:scale-105 transition-all">
            EU QUERO AS RECEITAS
          </button>
        </Link>

        <div className="flex justify-center mb-8">
          <div className="flex flex-col items-center">
            <div className="flex mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="text-yellow-400 fill-current" />
              ))}
            </div>
            <img 
              src="https://i.imgur.com/2nETrBL.jpg" 
              alt="Livros de receitas" 
              className="rounded-lg shadow-lg max-w-2xl w-full"
            />
          </div>
        </div>

        <h2 className="text-3xl font-bold text-center mb-8">QUAIS SÃO OS BÔNUS?</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            {
              title: "APRENDA MESMO SENDO TOTALMENTE INICIANTE",
              text: "Receitas com passo a passo didático e facilitado, perfeitas para confeiteiras do básico ao avançado criarem recheios lucrativos sem complicação e aumentarem suas vendas com praticidade"
            },
            {
              title: "BAIXO INVESTIMENTO",
              text: "A produção de bolos caseiros exige um investimento inicial baixo. Com utensílios básicos e ingredientes acessíveis, você pode começar sem grandes custos e lucrar rápido!"
            },
            {
              title: "MERCADO EM CRESCIMENTO",
              text: "A demanda por alimentos caseiros e artesanais cresce a cada ano. Cada vez mais pessoas buscam produtos feitos à mão, criando um mercado em expansão para bolos lucrativos"
            },
            {
              title: "MARGEM DE LUCRO ATRATIVA",
              text: "A produção de bolos caseiros garante uma margem de lucro alta. Com custos baixos de ingredientes e utensílios, é possível vender por um preço atrativo e lucrar de verdade."
            },
            {
              title: "SATISFAÇÃO PESSOAL",
              text: "Produzir bolos caseiros traz uma satisfação única. Ver a alegria dos clientes é gratificante, além de permitir expressar sua criatividade com saberes e decorações que encantam e vendem."
            }
          ].map((bonus, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg border-2 border-pink-200">
              <h3 className="text-xl font-bold mb-2 text-pink-600">{bonus.title}</h3>
              <p className="text-gray-600">{bonus.text}</p>
            </div>
          ))}
        </div>

        <div className="fixed bottom-4 left-4 bg-pink-600 text-white p-4 rounded-lg shadow-lg">
          {timeLeft.hours.toString().padStart(2, '0')}:
          {timeLeft.minutes.toString().padStart(2, '0')}:
          {timeLeft.seconds.toString().padStart(2, '0')}
        </div>

        <h2 id="pacotes" className="text-4xl font-bold text-center mb-12 relative">
          <span className="relative inline-block">
            NOSSOS PACOTES
            <span className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 transform rotate-45"></span>
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Pacote Básico */}
          <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-pink-300">
            <h3 className="text-2xl font-bold mb-4">PACOTE BÁSICO</h3>
            <ul className="mb-6 space-y-2">
              <li>✓ Receba seu acesso na hora</li>
              <li>✓ Acesso Vitalício</li>
              <li>✓ +150 Tipos de Recheios Diferentes</li>
            </ul>
            <p className="text-gray-500 line-through mb-1">~R$120,00~</p>
            <p className="text-3xl font-bold mb-4">R$12,99</p>
            <a href="https://pay.kirvano.com/7b35b62b-f8b7-433f-9278-1aa162058f65" className="block">
              <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg w-full mb-4">
                COMPRAR AGORA
              </button>
            </a>
            <p className="text-center text-sm text-gray-600">
              Mas antes de comprar… temos uma oferta AINDA MAIS vantajosa para você!
              <br />
              Veja logo abaixo⬇️
            </p>
          </div>

          {/* Pacote Premium */}
          <div className="bg-gradient-to-r from-pink-100 to-pink-200 p-8 rounded-lg shadow-lg border-2 border-yellow-400 relative">
            <Crown className="absolute top-4 right-4 text-yellow-400 w-8 h-8" />
            <h3 className="text-2xl font-bold mb-4 text-yellow-600">PACOTE PREMIUM</h3>
            <ul className="mb-6 space-y-2 text-gray-800 text-lg">
              <li className="flex items-center">
                <span className="text-yellow-500 mr-2">✓</span>
                <span className="font-medium">Receba seu acesso na hora</span>
              </li>
              <li className="flex items-center">
                <span className="text-yellow-500 mr-2">✓</span>
                <span className="font-medium">Acesso Vitalício</span>
              </li>
              <li className="flex items-center">
                <span className="text-yellow-500 mr-2">✓</span>
                <span className="font-medium">+150 Recheios Diferentes</span>
              </li>
              <li className="flex items-center">
                <span className="text-yellow-500 mr-2">✓</span>
                <span className="font-medium">+40 Receitas de Massas</span>
              </li>
              <li className="flex items-center">
                <span className="text-yellow-500 mr-2">✓</span>
                <span className="font-medium">Dicas para Decorações de Bolos</span>
              </li>
              <li className="flex items-center">
                <span className="text-yellow-500 mr-2">✓</span>
                <span className="font-medium">30 Receitas Completas de Coberturas</span>
              </li>
            </ul>
            <p className="text-gray-500 line-through mb-1">~R$200,00~</p>
            <p className="text-3xl font-bold mb-4 text-yellow-600">R$19,99</p>
            <a href="https://pay.kirvano.com/9d9296aa-4d85-45b0-a3d4-09f42b71be06" className="block">
              <button className="bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-white font-bold py-3 px-6 rounded-lg w-full transform hover:scale-105 transition-all">
                COMPRAR PACOTE PREMIUM
              </button>
            </a>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-center mb-8">
          O QUE NOSSAS CLIENTES ESTÃO FALANDO SOBRE OS RECHEIOS
        </h2>

        <div className="mb-12">
          <Slider {...sliderSettings}>
            {[
              {
                user: "@elisamanugfeq",
                time: "há 2 dias",
                text: "Eu achei que era golpe, pq o preço tava muito bom pra ser verdade, mas me dei super bem 😅 O curso é maravilhoso e as receitas rendem muito, vale cada centavo",
                likes: "19"
              },
              {
                user: "@melsantossp",
                time: "há 5 horas",
                text: "Eu também fiquei com um pé atrás no começo, mas depois que comecei, percebi que realmente vale a pena! As receitas são ótimas e rendem bastante! 😍",
                likes: "1"
              },
              {
                user: "@vieiraholandasantos",
                time: "há 3 dias",
                text: "Pode comprar o curso sem medo, é ótimo e o preço cabe em qualquer bolso. Vale muito a pena",
                likes: "4"
              },
              {
                user: "@marciamsantos",
                time: "há 2 dias",
                text: "Eu achei que seria só mais um curso qualquer mas fui completamente surpreendida 😱 o conteúdo é incrível, super rico e detalhado ❤️ valeu cada centavo!! Se vc tá na dúvida, sério, não pensa duas vezes, compra agora pq é impossível se arrepender ✨🙌",
                likes: "7"
              },
              {
                user: "@assuncaomariaftg",
                time: "há 17 horas",
                text: "Comprei e amei 😍 os recheios duram muito tempo e ficam simplesmente deliciosos... nem sabia que dava pra fazer recheios assim sem precisar levar pro fogo! Super recomendo",
                likes: "12"
              }
            ].map((feedback, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg mx-2">
                <div className="flex items-center mb-2">
                  <span className="font-bold text-gray-700">{feedback.user}</span>
                  <span className="text-gray-500 ml-2">{feedback.time}</span>
                </div>
                <p className="text-gray-800 mb-4">{feedback.text}</p>
                <div className="flex items-center text-gray-500">
                  <span>👍 {feedback.likes}</span>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        <div className="bg-green-50 backdrop-blur-lg p-8 rounded-lg border-2 border-green-500 mb-12">
          <h3 className="text-2xl font-bold text-green-700 mb-4">Nossa Garantia</h3>
          <p className="text-green-600">
            Oferecemos 7 dias de garantia incondicional. Se você não ficar satisfeito(a) com o material,
            devolvemos 100% do seu dinheiro, sem questionamentos.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Perguntas Frequentes</h2>
          <div className="space-y-4">
            {[
              {
                q: "Para quem é indicado estes conteúdos?",
                a: "Estes conteúdos são ideais para qualquer pessoa, desde iniciantes sem experiência até confeiteiros mais avançados que desejam aprimorar suas habilidades em bolos caseiros e aprender técnicas eficazes de venda."
              },
              {
                q: "Preciso de equipamentos especiais para começar?",
                a: "Não. Começamos com o básico, ensinando você a trabalhar com materiais e utensílios que provavelmente já possui em sua cozinha."
              },
              {
                q: "Tenho que pagar todo mês?",
                a: "Não! O conteúdo é todo entregue assim que o pagamento for feito, com acesso vitalício e você não precisa se preocupar com mensalidades. Isso o torna uma ótima opção para confeiteiros (as) que desejam aprender novos sabores e expandir seu cardápio sem ter que se preocupar com valores mensais para isso."
              },
              {
                q: "Quais são as formas de pagamento?",
                a: "Você tem as opções de pagamento via cartões de crédito ou PIX."
              },
              {
                q: "Ainda não recebi o material. O que fazer?",
                a: "Nós damos um prazo de até 24 horas para receber seu material, caso esse prazo já tenha passado indicamos a verificar as caixas de SPAM/lixo/outros de seu e-mail. Caso ainda não encontre seu material, envie um e-mail para o nosso suporte."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold mb-2 text-pink-600">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="fixed bottom-4 right-4 max-w-xs">
          {notifications.map((notification, index) => (
            <div
              key={index}
              className="bg-white border border-green-500 text-green-700 px-4 py-2 rounded-lg shadow-lg mb-2 animate-fade-in-up"
            >
              {notification}
            </div>
          ))}
        </div>
      </div>

      <footer className="bg-pink-50 py-4">
        <p className="text-gray-500 text-sm text-center">
          © Segredos da Cozinha - Todos os Direitos Reservados
        </p>
      </footer>
    </div>
  );
}

export default App;