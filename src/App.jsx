import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { HandPlatter, PlusCircleIcon, ChevronDown, ShoppingCart } from "lucide-react";
import { HamburgerMenu } from "@/components/hamburguer-menu";
// Palavras-chave para detectar itens destacados (usadas globalmente)
const POPULAR_KEYWORDS = [
  "hambúrg",
  "hamburgueres",
  "calzone de carne",
  "calzone mista",
  "pizza água na boca",
  "fahita",
  "fahitas",
  "sumol lata",
  "compal lata",
];
import CartModal from "./components/CartModal";
import { motion, AnimatePresence } from "framer-motion";
import menuData from "./menuData";



// Objeto com os dados do menu

// Nota: Mantive as imagens originais onde aplicável. 
// Para novos itens sem imagem definida, seria necessário adicionar posteriormente.

// Nota: Mantive as imagens originais onde aplicável. 
// Para novos itens sem imagem definida, seria necessário adicionar posteriormente.
// Função que transforma o menuData em seções
function generateSections(data) {
  try {
    const sections = [];

    for (const category in data) {
      const value = data[category];

      if (Array.isArray(value)) {
        sections.push({ title: category, items: value, id: category });
      } else if (typeof value === "object") {
        for (const subcat in value) {
          if (Array.isArray(value[subcat])) {
            sections.push({
              title: `${category} - ${subcat}`,
              items: value[subcat],
              id: `${category}-${subcat}`,
            });
          }
        }
      }
    }

    console.log("Seções geradas:", sections.length);
    return sections;
  } catch (error) {
    console.error("Error generating sections:", error);
    return [];
  }
}

// As seções são geradas no `useEffect` do componente App a partir do `menuData`.

// Função para formatar os preços
function formatPrice(price) {
  try {
    // Se for um objeto (ex: pizzas tem preços P, M, G)
    if (typeof price === 'object') {
      // Pega o primeiro preço disponível para exibir
      const firstPrice = Object.values(price)[0];
      return formatPrice(firstPrice);
    }

    // Remove pontos e substitui vírgula por ponto para parsear
    const numericPrice = parseFloat(price.replace(/\./g, "").replace(",", "."));

    // Formata como moeda
    return new Intl.NumberFormat("pt-ao", {
      style: "currency",
      currency: "AOA",
    }).format(numericPrice);
  } catch (error) {
    console.error("Erro ao formatar preço:", price, error);
    return price; // Retorna o preço original em caso de erro
  }
}

// Componente para cada item do menu com modal de imagem expandida
function MenuItem({ item, onAddToCart, itemKey }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSize, setSelectedSize] = useState(null);

  const isPopular = POPULAR_KEYWORDS.some((kw) =>
    (item.name || "").toLowerCase().includes(kw)
  );

  useEffect(() => {
    if (typeof item.price === "object") {
      const firstKey = Object.keys(item.price)[0];
      setSelectedSize(firstKey);
    } else {
      setSelectedSize(null);
    }
  }, [item.price]);

  const toggleOpen = () => setIsOpen((s) => !s);
  const toggleModal = () => setIsModalOpen((s) => !s);

  const SizeOptions = ({ priceObj }) => (
    <div className="flex space-x-2 mb-2">
      {Object.entries(priceObj).map(([sizeKey, sizePrice]) => (
        <button
          key={sizeKey}
          onClick={() => setSelectedSize(sizeKey)}
          className={`px-2 py-1 rounded text-sm border ${selectedSize === sizeKey ? 'bg-[#e63946] text-white border-[#e63946]' : 'bg-white text-[#774936]'}`}
        >
          {sizeKey.toUpperCase()} - {formatPrice(sizePrice)}
        </button>
      ))}
    </div>
  );

  const displayedPrice = () => {
    if (typeof item.price === "object") {
      return formatPrice(item.price[selectedSize] || Object.values(item.price)[0]);
    }
    return formatPrice(item.price);
  };

  return (
    <div
      key={itemKey}
      className={`flex flex-col bg-white rounded-lg shadow-sm p-3 h-full transition-transform duration-150 ${isPopular ? 'ring-2 ring-[#f9c74f] shadow-lg' : ''}`}
    >
      <div className="relative">
        <motion.img
          src={item.image || "/default.jpg"}
          alt={item.name}
          className="w-full h-32 object-cover rounded-md mb-2"
          whileTap={{ scale: 1.02 }}
        />

        {isPopular ? (
          <button
            aria-label={isOpen ? 'Ocultar detalhes' : 'Mostrar detalhes'}
            onClick={toggleOpen}
            className="absolute top-2 right-2 bg-white/90 rounded-full p-1 shadow-md hover:bg-white"
          >
            <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
              <ChevronDown className="w-5 h-5 text-[#774936]" />
            </motion.span>
          </button>
        ) : (
          <button
            aria-label={isModalOpen ? 'Fechar outros' : 'Abrir outros'}
            onClick={toggleModal}
            className="absolute top-2 right-2 bg-white/90 rounded-full px-2 py-1 text-xs font-semibold shadow-md hover:bg-white"
          >
            Ver mais
          </button>
        )}

        {isPopular && (
          <button
            onClick={toggleModal}
            className="absolute top-2 left-2 bg-[#e63946] text-white text-xs px-2 py-1 rounded hover:bg-[#d62828] cursor-pointer"
          >
            Mais pedido
          </button>
        )}
      </div>

      <div className="flex-grow">
        <h3 className="text-lg font-bold mb-1 text-[#774936]">{item.name}</h3>
        <p className="text-lg font-semibold text-[#e63946] mb-2">{displayedPrice()}</p>

        <AnimatePresence>
          {isOpen && isPopular && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden mb-2"
            >
              <img src={item.image || "/default.jpg"} alt={item.name} className="w-full h-20 object-contain rounded-md mb-2" />
              {typeof item.price === 'object' && <SizeOptions priceObj={item.price} />}
              <p className="text-gray-700 text-sm">{item.description}</p>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-auto">
          <Button
            size="sm"
            className="bg-gradient-to-r from-[#e63946] to-[#f9c74f] w-full hover:opacity-90"
            onClick={() => onAddToCart(item)}
          >
            <ShoppingCart className="w-4 h-4 mr-2" />
            <p>Adicionar</p>
          </Button>
        </div>
      </div>

      {/* Modal "Detalhes" para itens populares e não-populares */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleModal}
          >
            <motion.div
              className="bg-white p-4 rounded max-w-md w-full mx-4 border-2 border-[#f9c74f]"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start">
                <h4 className="text-lg font-bold text-[#774936]">Detalhes</h4>
                <Button size="sm" onClick={toggleModal} className="bg-[#774936]">Fechar</Button>
              </div>
              <div className="mt-4">
                <img src={item.image || "/default.jpg"} alt={item.name} className={`w-full object-contain rounded-md mb-2 ${item.name.toLowerCase().includes('água') ? 'h-32' : 'h-44'
                  }`} />
                <p className="font-semibold text-[#774936]">{item.name}</p>
                <p className="text-[#e63946] mb-2">{displayedPrice()}</p>
                {typeof item.price === 'object' && <SizeOptions priceObj={item.price} />}
                <p className="text-gray-700 text-sm mt-2">{item.description}</p>
                <div className="mt-4">
                  <Button onClick={() => { onAddToCart(item); toggleModal(); }} className="bg-gradient-to-r from-[#e63946] to-[#f9c74f]">Adicionar</Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Componente para cada seção (categoria) com efeito gaveta (accordion)
function MenuSection({ title, items, id, onAddToCart, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const toggle = () => setIsOpen((s) => !s);

  return (
    <section id={id} className="mb-6 border-b pb-4">
      <button
        onClick={toggle}
        className="w-full flex justify-between items-center py-3"
      >
        <h2 className="text-2xl font-bold text-[#774936]">{title}</h2>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="w-6 h-6 text-[#774936]" />
        </motion.span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="relative">
              <div className="overflow-x-auto pb-4 hide-scrollbar">
                <div className="flex space-x-4 min-w-full">
                  {items.map((item, index) => (
                    <div
                      key={`${id}-${index}`}
                      className="min-w-[250px] max-w-[250px]"
                    >
                      <MenuItem
                        itemKey={`${id}-${index}`}
                        item={item}
                        onAddToCart={onAddToCart}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}


// Componente que agrupa secções "Outros" e exibe cada secção interna como gaveta
function OthersAccordion({ sections, onAddToCart }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen((s) => !s);

  return (
    <section className="mb-6 border-b pb-4">
      <button onClick={toggle} className="w-full flex justify-between items-center py-3">
        <h2 className="text-2xl font-bold text-[#774936]">OUTROS</h2>
        <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronDown className="w-6 h-6 text-[#774936]" />
        </motion.span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
            <div className="mt-4 space-y-4">
              {sections.map((sec) => (
                <div key={sec.id}>
                  <MenuSection
                    title={sec.title.split('-').slice(1).join(' - ').trim() || sec.title}
                    items={sec.items}
                    id={sec.id}
                    onAddToCart={onAddToCart}
                  />
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

// Tela de splash (exibida por 3 segundos)
function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-gradient-to-r from-[#e63946] to-[#f9c74f] flex items-center justify-center z-50">
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <motion.h1
          className="text-6xl font-bold text-[#774936] mb-4"
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
        >
          <div className="w-32 h-32 relative m-auto">
            <img
              src="/logoanb.jpg"
              alt="logo Agua na Boca"
              className="rounded-full shadow-lg hover:scale-110 duration-200 object-cover"
            />
          </div>
          Restaurante Agua na Boca
        </motion.h1>
        <motion.p
          className="text-xl text-[#774936]"
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.4, type: "spring", stiffness: 120 }}
        >
          Seu menu de encomendas
        </motion.p>
        <motion.div
          className="mt-8"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
        >
          <svg
            className="w-16 h-16 mx-auto text-[#774936] animate-bounce"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
            />
          </svg>
        </motion.div>
      </motion.div>
    </div>
  );
}

// Componente principal
export default function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [menuSections, setMenuSections] = useState([]);

  useEffect(() => {
    console.log("App inicializado, gerando seções...");

    // Mostrar o conteúdo após o splash screen
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 3000);

    // Garantir que as seções do menu são geradas quando o componente é montado
    try {
      const generatedSections = generateSections(menuData);
      console.log("Seções geradas com sucesso:", generatedSections.length);
      setMenuSections(generatedSections);
    } catch (error) {
      console.error("Failed to load menu data:", error);
    }

    return () => clearTimeout(timer);
  }, []);

  const addToCart = (item) => {
    // Cria uma cópia do item para não modificar o original
    const itemToAdd = { ...item };

    // Se o preço for um objeto (como pizzas com P, M, G), usar o preço P como padrão
    if (typeof itemToAdd.price === 'object') {
      // Adiciona informação sobre preços disponíveis
      itemToAdd.priceOptions = { ...itemToAdd.price };
      // Usa o primeiro preço como padrão (geralmente P)
      itemToAdd.price = Object.values(itemToAdd.price)[0];
      // Adiciona uma descrição do tamanho
      itemToAdd.selectedSize = Object.keys(itemToAdd.priceOptions)[0];
    }

    setCart((currentCart) => {
      const productId = itemToAdd.id || itemToAdd.name;
      const existingItem = currentCart.find(
        (cartItem) => (cartItem.id || cartItem.name) === productId
      );
      if (existingItem) {
        return currentCart.map((cartItem) =>
          (cartItem.id || cartItem.name) === productId
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...currentCart, { ...itemToAdd, id: productId, quantity: 1 }];
    });
  };

  const updateItemQuantity = (itemId, newQuantity) => {
    if (newQuantity < 1) {
      removeItem(itemId);
      return;
    }
    setCart((currentCart) =>
      currentCart.map((item) =>
        item.id === itemId || item.name === itemId
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  const removeItem = (itemId) => {
    setCart((currentCart) =>
      currentCart.filter((item) => item.id !== itemId && item.name !== itemId)
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartItemsCount = cart.reduce((total, item) => total + item.quantity, 0);

  console.log("Renderizando App, menuSections:", menuSections?.length);
  // Agrupa secções populares e secções "Outros"
  const isItemPopular = (item) => POPULAR_KEYWORDS.some((kw) => (item.name || "").toLowerCase().includes(kw));

  const POPULAR_SECTIONS = [
    'CALZONES',
    'PIZZAS',
    'FAHITAS',
    'HAMBURGUERES',
    'SUMOS',
  ];

  const isSectionPopular = (section) => {
    const id = (section.id || '').toUpperCase();
    const top = id.split('-')[0].trim();
    if (POPULAR_SECTIONS.includes(top)) return true;
    if (top === 'BEBIDAS') {
      // Apenas SUMOS dentro de BEBIDAS são considerados populares (conforme pedido)
      return id.includes('SUMOS') || id.includes('ÁGUAS');
    }
    return false;
  };

  const popularSections = menuSections.filter(isSectionPopular);
  const othersSections = menuSections.filter((s) => !isSectionPopular(s));

  return (
    <>
      <SplashScreen />
      {showContent && (
        <div className="min-h-screen pb-16 bg-gray-100">
          <div className="fixed top-4 left-4 z-40">
            <Button onClick={() => setIsCartOpen(true)} className="relative bg-[#f9c74f] hover:bg-[#f9c74f]/80 text-[#774936]">
              <ShoppingCart className="w-8 h-8 -ml-2" />
              <p className="font-extrabold">Carrinho</p>

              {cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#e63946] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">
                  {cartItemsCount}
                </span>
              )}
            </Button>
          </div>
          <CartModal
            isOpen={isCartOpen}
            setIsOpen={setIsCartOpen}
            cart={cart}
            updateItemQuantity={updateItemQuantity}
            removeItem={removeItem}
            clearCart={clearCart}
          />

          <HamburgerMenu />

          <header className="w-full h-[420px] bg-zinc-950 bg-[url('/image7.jpeg')] bg-cover bg-center">
            <div className="w-full h-full flex flex-col justify-center items-center bg-black bg-opacity-60">
              <div className="w-32 h-32 relative">
                <img
                  src="/logoanb.jpg"
                  alt="logo Agua na Boca"
                  className="rounded-full shadow-lg hover:scale-110 duration-200 object-cover"
                />
              </div>
              <h1 className="text-3xl mt-4 mb-2 font-bold text-white">
                Restaurante Agua na Boca
              </h1>
              <span className="text-white font-medium">
                Avenida Principal, Lubango
              </span>
              <div className="bg-gradient-to-r from-[#e63946] to-[#f9c74f] px-4 py-1 rounded-lg mt-5">
                <span className="text-[#774936] font-medium">
                  Seg a Dom - 8:00 as 22:00
                </span>
              </div>
            </div>
          </header>
          <main className="container mx-auto px-4 py-8">
            <h1 className="text-3xl md:text-4xl font-bold text-center text-[#774936]">
              Menu Digital
            </h1>
            <h3 className="md:text-sm text-center text-[#774936]">Faça o seu Pedido Receba em Casa ou retire no Local</h3>
            <div className="border border-solid border-[#f9c74f] mb-2"></div>

            {menuSections && menuSections.length > 0 ? (
              <>
                {popularSections.map((section) => (
                  <MenuSection
                    key={section.id}
                    title={section.title}
                    items={section.items}
                    id={section.id}
                    onAddToCart={addToCart}
                    defaultOpen={true} //ABERTAS POR DEFEITO
                  />
                ))}

                <OthersAccordion
                  sections={othersSections}
                  onAddToCart={addToCart}
                />
              </>
            ) : (
              <div className="text-center py-8">
                <p className="text-xl text-gray-500">Carregando menu...</p>
              </div>
            )}

          </main>

          <footer className="bg-[#774936] text-white py-8">
            <div className="container mx-auto px-4">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-xl font-bold mb-2 text-[#f9c74f]">
                    Restaurante Agua na Boca
                  </h3>
                  <p>Avenida Principal - Lubango, Angola</p>
                  <p>Telefone: +244 927123456</p>
                </div>
                <div className="flex flex-col items-center md:items-end">
                  <h4 className="text-lg font-semibold mb-2 text-[#f9c74f]">
                    Horário de Funcionamento
                  </h4>
                  <p>Segunda a Domingo: 8:00 - 22:00</p>
                </div>
              </div>
              <div className="mt-8 text-center">
                <p>
                  &copy; 2025 Água na Boca. Todos os direitos reservados.
                </p>
              </div>
            </div>
          </footer>
        </div>
      )}
    </>
  );
}
