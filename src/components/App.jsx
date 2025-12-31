
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronUp, ShoppingBag, X, Plus, Minus, Trash2 } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const menuSections = [
  { id: 'entradas', title: 'Entradas', items: [
    { id: 'e1', name: 'Bruschetta de Tomate e Manjericão', description: 'Pão italiano grelhado com tomates frescos, manjericão e azeite extra virgem', price: 1200, image: '/placeholder.svg?height=100&width=100' },
    { id: 'e2', name: 'Carpaccio de Salmão', description: 'Finas fatias de salmão com alcaparras, rúcula e molho de limão', price: 1800, image: '/placeholder.svg?height=100&width=100' },
  ]},
  { id: 'principais', title: 'Pratos Principais', items: [
    { id: 'p1', name: 'Risotto de Cogumelos Selvagens', description: 'Arroz arbóreo cremoso com mix de cogumelos e parmesão', price: 2500, image: '/placeholder.svg?height=100&width=100' },
    { id: 'p2', name: 'Filé Mignon ao Molho de Vinho Tinto', description: 'Filé mignon grelhado com molho reduzido de vinho tinto e batatas rústicas', price: 3200, image: '/placeholder.svg?height=100&width=100' },
  ]},
  { id: 'sobremesas', title: 'Sobremesas', items: [
    { id: 's1', name: 'Crème Brûlée de Baunilha', description: 'Clássica sobremesa francesa com crocante de açúcar caramelizado', price: 1500, image: '/placeholder.svg?height=100&width=100' },
    { id: 's2', name: 'Tiramisù', description: 'Sobremesa italiana com camadas de biscoito, café e creme de mascarpone', price: 1700, image: '/placeholder.svg?height=100&width=100' },
  ]},
  { id: 'bebidas', title: 'Bebidas', items: [
    { id: 'b1', name: 'Espresso Martini', description: 'Coquetel sofisticado com vodka, licor de café e espresso', price: 1400, image: '/placeholder.svg?height=100&width=100' },
    { id: 'b2', name: 'Vinho Tinto Reserva', description: 'Taça de vinho tinto premium selecionado pelo sommelier', price: 1600, image: '/placeholder.svg?height=100&width=100' },
  ]},
]

function Header({ setIsCartOpen, cart }) {
  const cartItemsCount = cart.reduce((total, item) => total + item.quantity, 0)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-zinc-200 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-zinc-800">Gourmet Digital</h1>
        <Button variant="outline" onClick={() => setIsCartOpen(true)}>
          <ShoppingBag className="h-5 w-5 mr-2" />
          Carrinho
          {cartItemsCount > 0 && (
            <span className="ml-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
              {cartItemsCount}
            </span>
          )}
        </Button>
      </div>
    </header>
  )
}

function MenuSection({ title, items, onAddToCart }) {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-6 text-zinc-800">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((item) => (
          <motion.div key={item.id} whileHover={{ scale: 1.03 }} transition={{ type: 'spring', stiffness: 300 }}>
            <Card className="overflow-hidden">
              <CardHeader className="p-0">
                <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
              </CardHeader>
              <CardContent className="p-4">
                <CardTitle className="text-xl mb-2">{item.name}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardContent>
              <CardFooter className="flex justify-between items-center p-4 bg-zinc-50">
                <span className="text-lg font-semibold text-zinc-800">AOA {(item.price / 100).toFixed(2)}</span>
                <Button onClick={() => onAddToCart(item)}>
                  <Plus className="h-5 w-5 mr-2" />
                  Adicionar
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

function Cart({ isOpen, setIsOpen, cart, updateItemQuantity }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: '100%' }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: '100%' }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="fixed inset-y-0 right-0 w-full sm:w-96 bg-white shadow-lg z-50 flex flex-col"
        >
          <div className="p-4 border-b border-zinc-200 flex justify-between items-center">
            <h2 className="text-2xl font-bold text-zinc-800">Seu Pedido</h2>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
              <X className="h-6 w-6" />
            </Button>
          </div>
          <ScrollArea className="flex-grow">
            {cart.length === 0 ? (
              <p className="p-4 text-center text-zinc-500">Seu carrinho está vazio.</p>
            ) : (
              <ul className="divide-y divide-zinc-200">
                {cart.map((item) => (
                  <li key={item.id} className="p-4 flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-zinc-800">{item.name}</h3>
                      <p className="text-sm text-zinc-500">AOA {(item.price / 100).toFixed(2)}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button size="icon" variant="outline" onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <Button size="icon" variant="outline" onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>
                        <Plus className="h-4 w-4" />
                      </Button>
                      <Button size="icon" variant="destructive" onClick={() => updateItemQuantity(item.id, 0)}>
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </ScrollArea>
          <div className="p-4 border-t border-zinc-200">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-semibold text-zinc-800">Total:</span>
              <span className="text-2xl font-bold text-zinc-800">AOA {(total / 100).toFixed(2)}</span>
            </div>
            <Button className="w-full" size="lg">Finalizar Pedido</Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function Footer() {
  return (
    <footer className="bg-zinc-800 text-zinc-300 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Gourmet Digital</h3>
            <p>Rua da Gastronomia, 123 - Luanda, Angola</p>
            <p>Telefone: +244 923 456 789</p>
          </div>
          <div className="flex flex-col items-center md:items-end">
            <h4 className="text-lg font-semibold mb-2">Horário de Funcionamento</h4>
            <p>Segunda a Domingo: 11:00 - 23:00</p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2024 Gourmet Digital. Todos os direitos reservados.</p>
          <p className="mt-2 text-sm">Desenvolvido por Vakeetu Ethinics Technology</p>
        </div>
      </div>
    </footer>
  )
}

export default function App1() {
  const [cart, setCart] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)

  const addToCart = (item) => {
    setCart(currentCart => {
      const existingItem = currentCart.find(cartItem => cartItem.id === item.id)
      if (existingItem) {
        return currentCart.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      }
      return [...currentCart, { ...item, quantity: 1 }]
    })
  }

  const updateItemQuantity = (itemId, newQuantity) => {
    setCart(currentCart =>
      currentCart.map(item =>
        item.id === itemId
          ? { ...item, quantity: Math.max(0, newQuantity) }
          : item
      ).filter(item => item.quantity > 0)
    )
  }

  const handleScroll = (event) => {
    setShowScrollTop(event.currentTarget.scrollTop > 300)
  }

  return (
    <div className="flex flex-col min-h-screen bg-zinc-50">
      <Header setIsCartOpen={setIsCartOpen} cart={cart} />
      <ScrollArea className="flex-grow" onScrollCapture={handleScroll}>
        <main className="container mx-auto px-4 py-8">
          {menuSections.map(section => (
            <MenuSection
              key={section.id}
              title={section.title}
              items={section.items}
              onAddToCart={addToCart}
            />
          ))}
        </main>
        <Footer />
      </ScrollArea>
      <Cart
        isOpen={isCartOpen}
        setIsOpen={setIsCartOpen}
        cart={cart}
        updateItemQuantity={updateItemQuantity}
      />
      <AnimatePresence>
        {showScrollTop && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-4 right-4"
          >
            <Button
              size="icon"
              className="rounded-full shadow-lg"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <ChevronUp className="h-6 w-6" />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

