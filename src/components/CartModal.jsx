import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ShoppingCart, Plus, Minus, Trash2, Send, ArrowRight } from "lucide-react";

const CartModal = ({
  isOpen,
  setIsOpen,
  cart,
  updateItemQuantity,
  removeItem,
  clearCart,
}) => {
  const [nome, setNome] = useState("");
  const [endereco, setEndereco] = useState("");
  const [contacto, setContacto] = useState("");
  const [observacoes, setObservacoes] = useState("");
  const [orderNumber, setOrderNumber] = useState("");
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [checkoutStep, setCheckoutStep] = useState(1); // Step 1: Cart, Step 2: Delivery Info

  // WhatsApp number - replace with your restaurant's number
  const WHATSAPP_NUMBER = "973336729";

  // Generate order number when modal opens
  useEffect(() => {
    if (isOpen) {
      const random = Math.floor(10000 + Math.random() * 90000); // Generates 5-digit number
      setOrderNumber(random.toString());
      setCurrentDateTime(new Date());
      setCheckoutStep(1); // Reset to step 1 when opening
    }
  }, [isOpen]);

  // Função para converter o preço de string para número
  const parsePrice = (priceStr) => {
    try {
      // Se for um objeto (ex: pizzas tem preços P, M, G)
      if (typeof priceStr === 'object') {
        // Pega o primeiro preço disponível
        const firstPrice = Object.values(priceStr)[0];
        return parsePrice(firstPrice);
      }
      
      // Remove pontos e substitui vírgula por ponto para parsear
      return parseFloat(priceStr.replace(/\./g, "").replace(",", "."));
    } catch (error) {
      console.error("Erro ao parsear preço:", priceStr);
      return 0; // Retorna 0 em caso de erro
    }
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => {
      try {
        const priceNum = parsePrice(item.price);
        return total + priceNum * item.quantity;
      } catch (error) {
        console.error("Erro ao calcular total para item:", item);
        return total;
      }
    }, 0);
  };

  const formatOrderForWhatsApp = () => {
    const formattedDate = currentDateTime.toLocaleDateString();
    const formattedTime = currentDateTime.toLocaleTimeString();

    const header = `🏪 *NOVA ENCOMENDA - RESTAURANTE ÁGUA NA BOCA*\n\n`;
    const orderInfo =
      `📋 *Informações da Encomenda:*\n` +
      `Encomenda Nº: #${orderNumber}\n` +
      `Nome: ${nome}\n` +
      `Endereço: ${endereco}\n` +
      `Contacto: ${contacto}\n` +
      `Data: ${formattedDate}\n` +
      `Hora: ${formattedTime}\n\n`;

    const items = cart
      .map((item) => {
        const priceNum = parsePrice(item.price);
        return (
          `• ${item.quantity}x ${item.name}\n` +
          `   💰  ${priceNum.toFixed(2)} Kz cada =  ${(
            priceNum * item.quantity
          ).toFixed(2)} Kz`
        );
      })
      .join("\n\n");

    const observacoesText = observacoes 
      ? `\n\n📝 *Observações:* ${observacoes}` 
      : '';

    const footer = `\n\n💵 *TOTAL:  ${calculateTotal().toFixed(2)} Kz* `;

    return encodeURIComponent(header + orderInfo + items + observacoesText + footer);
  };

  const sendToWhatsApp = () => {
    if (!nome || !endereco || !contacto) {
      alert("Por favor, preencha o nome, endereço e contacto.");
      return;
    }

    const orderText = formatOrderForWhatsApp();
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${orderText}`;

    window.open(whatsappUrl, "_blank");
    clearCart();
    setIsOpen(false);
  };

  const handleContinue = () => {
    if (cart.length === 0) {
      alert("Adicione itens ao carrinho antes de continuar.");
      return;
    }
    setCheckoutStep(2);
  };

  const handleBack = () => {
    setCheckoutStep(1);
  };

  // Step 1: Cart Items
  const renderCartItems = () => (
    <>
    <DialogHeader className="bg-[#f9c74f] -m-4 mb-4 p-4 rounded-t-lg">
        <DialogTitle className="text-[#774936] font-bold text-xl">Seu Carrinho</DialogTitle>
      </DialogHeader>


      <div className="flex flex-col space-y-4">
        <div className="max-h-96 overflow-y-auto space-y-4">
          {cart.length === 0 ? (
            <p className="text-center text-gray-500">Seu carrinho está vazio</p>
          ) : (
            cart.map((item) => {
              const priceNum = parsePrice(item.price);
              return (
                <div
                  key={item.id}
                  className="flex items-center justify-between border-b pb-2"
                >
                  <div className="flex-1">
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-sm text-gray-500">
                      {new Intl.NumberFormat("pt-ao", {
                        style: "currency",
                        currency: "AOA",
                      }).format(priceNum)}
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() =>
                        updateItemQuantity(item.id, item.quantity - 1)
                      }
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="w-8 text-center">{item.quantity}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() =>
                        updateItemQuantity(item.id, item.quantity + 1)
                      }
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="destructive"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => removeItem(item.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              );
            })
          )}
        </div>

        <div className="border-t pt-4">
          <div className="flex justify-between items-center mb-4">
            <span className="font-bold">Total:</span>
            <span className="font-bold text-[#e63946]">
              Kz {calculateTotal().toFixed(2)}
            </span>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Button
              variant="outline"
              onClick={() => setIsOpen(false)}
              className="border-[#774936] text-[#774936] hover:bg-[#774936]/10"
            >
              Cancelar
            </Button>
            <Button
              className="flex items-center justify-center bg-gradient-to-r from-[#e63946] to-[#f9c74f] text-white hover:opacity-90"
              onClick={handleContinue}
              disabled={cart.length === 0}
            >
              <ArrowRight className="w-4 h-4 mr-2" />
              Continuar
            </Button>
          </div>
        </div>
      </div>
    </>
  );

  // Step 2: Delivery Information
  const renderDeliveryInfo = () => (
    <>
     <DialogHeader className="bg-[#f9c74f] -m-4 mb-4 p-4 rounded-t-lg">
        <DialogTitle className="text-[#774936] font-bold text-xl">Finalizar Encomenda #{orderNumber}</DialogTitle>
      </DialogHeader>

      <div className="flex flex-col space-y-4">
        <div className="space-y-4">
          <div>
            <Label htmlFor="nome">Nome Completo</Label>
            <Input
              id="nome"
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="Seu Nome Completo"
            />
          </div>
          <div>
            <Label htmlFor="endereco">Endereço de Entrega</Label>
            <Input
              id="endereco"
              type="text"
              value={endereco}
              onChange={(e) => setEndereco(e.target.value)}
              placeholder="Rua, Bairro, Referência"
            />
          </div>
          <div>
            <Label htmlFor="contacto">Contacto</Label>
            <Input
              id="contacto"
              type="text"
              value={contacto}
              onChange={(e) => setContacto(e.target.value)}
              placeholder="Seu número de telefone"
            />
          </div>
          <div>
            <Label htmlFor="observacoes">Observações</Label>
            <Input
              id="observacoes"
              type="text"
              value={observacoes}
              onChange={(e) => setObservacoes(e.target.value)}
              placeholder="Instruções especiais para o pedido"
            />
          </div>
        </div>

        <div className="border-t pt-4">
          <div className="flex justify-between items-center mb-4">
            <span className="font-bold">Total a Pagar:</span>
            <span className="font-bold text-[#e63946]">
              Kz {calculateTotal().toFixed(2)}
            </span>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Button
              variant="outline"
              onClick={handleBack}
              className="border-[#774936] text-[#774936] hover:bg-[#774936]/10"
            >
              Voltar
            </Button>
            <Button
              className="flex items-center justify-center bg-gradient-to-r from-[#e63946] to-[#f9c74f] text-white hover:opacity-90"
              onClick={sendToWhatsApp}
            >
              <Send className="w-4 h-4 mr-2" />
              Enviar Encomenda
            </Button>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-md w-full border-[#774936]">
        {checkoutStep === 1 ? renderCartItems() : renderDeliveryInfo()}
      </DialogContent>
    </Dialog>
  );
};

export default CartModal;