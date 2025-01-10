import React from 'react';
import { Phone, MessageCircle, Clock, Package, CheckCircle } from 'lucide-react';
import { FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa";
import logoMB from '../assets/images/logo_MB.png';
import logoCase from '../assets/images/logo_case.png';
import logoCaterpillar from '../assets/images/logo_caterpillar.png';
import logoDoosan from '../assets/images/logo_doosan.png';
import logoFiatallis from '../assets/images/logo_fiatallis.png';
import logoHyundai from '../assets/images/logo_hyundai.png';
import logoJCB from '../assets/images/logo_jcb.png';
import logoJohnDeere from '../assets/images/logo_john_deere.png';
import logoKomatsu from '../assets/images/logo_komatsu.png';
import logoLiugong from '../assets/images/logo_liugong.png';
import logoMaxLoader from '../assets/images/logo_maxloader.png';
import logoNewHolland from '../assets/images/logo_new_holland.png';
import logoSany from '../assets/images/logo_sany.png';
import logoVolvo from '../assets/images/logo_volvo.png';
import logoXcmg from '../assets/images/logo_xcmg.png';
import backImage1 from '../assets/images/back_image_1.jpg';
import backImage2 from '../assets/images/back_image_2.jpg';
import rolete from '../assets/images/1_rolete.png';
import motorJS200 from '../assets/images/2_motor_de_giro_JS200.png';
import unha from '../assets/images/3_unha.png';

function App() {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5551993605427', '_blank');
  };

  const handleWhatsAppClickWithProduct = (productName) => {
    const message = `Olá, estou interessado no produto: ${productName}`;
    const url = `https://wa.me/5551993605427?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const products = [
    { name: 'Roletes para Escavadeiras', image: rolete },
    { name: 'Motor de Giro JS200', image: motorJS200 },
    { name: 'Unha para Escavadeira', image: unha },
  ];

  const brands = [
    { name: 'Case', image: logoCase },
    { name: 'Caterpillar', image: logoCaterpillar },
    { name: 'Doosan', image: logoDoosan },
    { name: 'Fiatallis', image: logoFiatallis },
    { name: 'Hyundai', image: logoHyundai },
    { name: 'JCB', image: logoJCB },
    { name: 'John Deere', image: logoJohnDeere },
    { name: 'Komatsu', image: logoKomatsu },
    { name: 'LuiGong', image: logoLiugong },
    { name: 'MaxLoader', image: logoMaxLoader },
    { name: 'New Holland', image: logoNewHolland },
    { name: 'Sany', image: logoSany },
    { name: 'Volvo', image: logoVolvo },
    { name: 'XCMG', image: logoXcmg },
  ];

  return (
    <div className="min-h-screen bg-custom-dark">
      {/* Header */}
      <header className="fixed w-full bg-custom-dark shadow-lg z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="w-60 h-18 rounded flex items-center justify-center">
              <img
                src={logoMB}
                alt="LogoMB"
                className="w-full h-full object-cover"
              />
            </div>
            <nav className="flex space-x-8">
              <a href="#home" className="text-gray-300 hover:text-custom-yellow">Home</a>
              <a href="#produtos" className="text-gray-300 hover:text-custom-yellow">Produtos</a>
              <a href="#quem-somos" className="text-gray-300 hover:text-custom-yellow">Quem Somos</a>
              <a href="#servicos" className="text-gray-300 hover:text-custom-yellow">Serviços</a>
              <a href="#contato" className="text-gray-300 hover:text-custom-yellow">Contato</a>
            </nav>
            <div className="flex space-x-4">
              <button onClick={handleWhatsAppClick} className="text-green-400 hover:text-green-300">
                <FaWhatsapp className="w-6 h-6" />
              </button>
              <a href="https://www.instagram.com/mbpecas_" target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:text-pink-300">
                <FaInstagram className="w-6 h-6" />
              </a>
              <a href="https://www.facebook.com/mbpecasrs/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                <FaFacebook className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src={backImage1}
            alt="Retroescavadeira"
            className="w-full h-full object-cover filter blur-sm"
          />
          <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        </div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Peças para máquinas pesadas, com qualidade e eficiência garantidas</h1>
          <p className="text-2xl mb-8">Motores de tração, giro e toda linha amarela!</p>
          <button
            onClick={handleWhatsAppClick}
            className="bg-custom-yellow text-custom-dark px-8 py-4 rounded-full flex items-center space-x-2 transform hover:scale-95 transition-transform duration-200 font-semibold"
          >
            <FaWhatsapp className="w-6 h-6" />
            <span>Chamar no WhatsApp</span>
          </button>
        </div>
      </section>

      {/* Quem Somos */}
      <section id="quem-somos" className="py-20 bg-custom-dark">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-custom-yellow mb-8">#SANGUEAMARELO</h2>
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <p className="text-lg text-gray-300">
              Somos líderes na fabricação e comercialização de peças para máquinas pesadas e mineração,
              com forte atuação em todo o território nacional.
            </p>
            <p className="text-lg text-gray-300">
              Atendendo milhares de clientes, nos consolidamos como referência no mercado da Linha Amarela,
              reconhecidos pela qualidade e confiabilidade de nossos produtos.
            </p>
            <p className="text-lg text-gray-300">
              Nosso compromisso é garantir agilidade, eficiência e custo-benefício, sempre priorizando
              a satisfação do cliente com entregas rápidas e soluções assertivas.
            </p>
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="produtos" className="py-20 bg-[#2A2B32]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-custom-yellow">Nossos Produtos</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div key={index} className="bg-custom-dark rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-200">
                <div className="w-full h-64 flex items-center justify-center">
                  <img src={product.image} alt={product.name} className="max-w-full max-h-full object-contain" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-gray-300">{product.name}</h3>
                  <button
                    onClick={handleWhatsAppClickWithProduct.bind(null, product.name)}
                    className="w-full bg-custom-yellow text-custom-dark py-2 rounded-lg hover:bg-opacity-90 transition-colors font-semibold"
                  >
                    Solicitar Orçamento
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="py-20 bg-custom-dark">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-custom-yellow">Trabalhamos com as Linhas Líderes do Mercado</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8">
            {brands.map((brand, index) => (
              <div key={index} className="aspect-square bg-white rounded-lg p-4 flex items-center justify-center">
                <div className="w-full h-full rounded flex items-center justify-center">
                  <img
                    src={brand.image}
                    alt={brand.name}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative py-20">
        <div className="absolute inset-0">
          <img
            src={backImage2}
            alt="Retroescavadeira ao pôr do sol"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-80"></div>
        </div>
        <div className="relative container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-white text-center">
            <div className="flex flex-col items-center">
              <Clock className="w-12 h-12 text-custom-yellow mb-4" />
              <h3 className="text-4xl font-bold mb-2 text-custom-yellow">5 Anos</h3>
              <p>de parcerias de sucesso</p>
            </div>
            <div className="flex flex-col items-center">
              <Package className="w-12 h-12 text-custom-yellow mb-4" />
              <h3 className="text-4xl font-bold mb-2 text-custom-yellow">+5000</h3>
              <p>Itens a pronta entrega</p>
            </div>
            <div className="flex flex-col items-center">
              <CheckCircle className="w-12 h-12 text-custom-yellow mb-4" />
              <h3 className="text-4xl font-bold mb-2 text-custom-yellow">100%</h3>
              <p>Garantia de entrega, teste e devolução</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-custom-yellow">
        <div className="container mx-auto px-4 text-center text-custom-dark">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Procurando peças a pronta entrega de Tração e Giro?<br />
            A solução ideal para máquinas pesadas está aqui!
          </h2>
          <button
            onClick={handleWhatsAppClick}
            className="bg-custom-dark text-custom-yellow px-8 py-4 rounded-full flex items-center space-x-2 mx-auto transform hover:scale-95 transition-transform duration-200"
          >
            <FaWhatsapp className="w-6 h-6" />
            <span>Fale Conosco</span>
          </button>
        </div>
      </section>

      {/* Contact */}
      <section id="contato" className="py-20 bg-[#2A2B32]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-custom-yellow">Contato</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-custom-yellow">Sede 1</h3>
                <p className="text-gray-300">Rua Belo Horizonte, 145 - Mathias Velho, Canoas</p>
                <p className="text-gray-300">CEP 92340-220</p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-custom-yellow">Sede 2</h3>
                <p className="text-gray-300">Rua Uruguai, 483 - São Luís, Canoas</p>
                <p className="text-gray-300">CEP 92420-340</p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-custom-yellow">Contato</h3>
              <p className="text-gray-300 flex items-center">
                <Phone className="w-5 h-5 mr-2 text-custom-yellow" />
                (51) 99360-5427
              </p>
              <p className="text-gray-300 flex items-center">
                <MessageCircle className="w-5 h-5 mr-2 text-custom-yellow" />
                mbpecasrs@hotmail.com
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-custom-yellow">Horário de Atendimento</h3>
              <div className="text-gray-300">
                <p>Segunda a sexta: 08:00 - 18:00</p>
                <p>Sábado e Domingo: Fechado</p>
              </div>
            </div>
          </div>

          <div className="mt-12 flex justify-center space-x-6">
            <button onClick={handleWhatsAppClick} className="text-green-400 hover:text-green-300">
              <FaWhatsapp className="w-8 h-8" />
            </button>
            <a href="https://www.instagram.com/mbpecas_" target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:text-pink-300">
              <FaInstagram className="w-8 h-8" />
            </a>
            <a href="https://www.facebook.com/mbpecasrs/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
              <FaFacebook className="w-8 h-8" />
            </a>
          </div>
        </div>
      </section>

      {/* Maps */}
      <section className="py-20 bg-custom-dark">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-custom-yellow">Nossas Localizações</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.7123456789!2d-51.1234567!3d-29.9876543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDU5JzE1LjYiUyA1McKwMDcnMzQuNCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Sede 1"
              ></iframe>
            </div>
            <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.7123456789!2d-51.1234567!3d-29.9876543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDU5JzE1LjYiUyA1McKwMDcnMzQuNCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Sede 2"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Copyright */}
      <footer className="py-6 bg-[#2A2B32] text-gray-300">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} MB Peças RS. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;