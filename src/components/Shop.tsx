import React, { useState } from 'react';
import { Shield, Camera, Bell, Lock, Search, Filter, ShoppingCart, Star, X, ChevronRight, Heart } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Câmera de Segurança Pro',
    category: 'cameras',
    price: 899.99,
    oldPrice: 999.99,
    rating: 4.8,
    reviews: 156,
    stock: 12,
    image: 'https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?auto=format&fit=crop&q=80',
    description: 'Câmera IP 4K com visão noturna e detecção de movimento.',
    features: ['4K Ultra HD', 'Visão Noturna', 'Áudio Bidirecional', 'IP67'],
    highlights: ['Entrega em 24h', 'Garantia 2 anos', 'Suporte Premium']
  },
  {
    id: 2,
    name: 'Sistema de Alarme Smart',
    category: 'alarms',
    price: 1299.99,
    oldPrice: 1499.99,
    rating: 4.9,
    reviews: 234,
    stock: 8,
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80',
    description: 'Sistema de alarme inteligente com integração via app.',
    features: ['Controle via App', 'Sensores Sem Fio', 'Sirene 120dB', 'Backup 4G'],
    highlights: ['Instalação Grátis', 'App Exclusivo', 'Monitoramento 24h']
  },
  {
    id: 3,
    name: 'Fechadura Digital',
    category: 'locks',
    price: 799.99,
    oldPrice: 899.99,
    rating: 4.7,
    reviews: 189,
    stock: 15,
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80',
    description: 'Fechadura biométrica com múltiplos métodos de acesso.',
    features: ['Biometria', 'Senha', 'Cartão RFID', 'App'],
    highlights: ['Fácil Instalação', 'Bateria 1 Ano', 'Design Premium']
  },
  {
    id: 4,
    name: 'Kit CFTV Completo',
    category: 'cameras',
    price: 2499.99,
    oldPrice: 2999.99,
    rating: 4.9,
    reviews: 312,
    stock: 5,
    image: 'https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?auto=format&fit=crop&q=80',
    description: 'Kit completo com 4 câmeras e DVR inteligente.',
    features: ['4 Câmeras HD', 'DVR 1TB', 'Acesso Remoto', 'Instalação'],
    highlights: ['Melhor Custo-Benefício', 'Suporte Vitalício', 'Garantia Estendida']
  }
];

const categories = [
  { id: 'all', name: 'Todos', icon: Shield },
  { id: 'cameras', name: 'Câmeras', icon: Camera },
  { id: 'alarms', name: 'Alarmes', icon: Bell },
  { id: 'locks', name: 'Fechaduras', icon: Lock },
];

type CartItem = {
  productId: number;
  quantity: number;
};

export function Shop() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [favorites, setFavorites] = useState<number[]>([]);

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const addToCart = (productId: number) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.productId === productId);
      if (existingItem) {
        return prevCart.map(item =>
          item.productId === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { productId, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (productId: number) => {
    setCart(prevCart => prevCart.filter(item => item.productId !== productId));
  };

  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity < 1) return;
    setCart(prevCart =>
      prevCart.map(item =>
        item.productId === productId ? { ...item, quantity } : item
      )
    );
  };

  const toggleFavorite = (productId: number) => {
    setFavorites(prev =>
      prev.includes(productId)
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const cartTotal = cart.reduce((total, item) => {
    const product = products.find(p => p.id === item.productId);
    return total + (product?.price || 0) * item.quantity;
  }, 0);

  return (
    <section className="py-12 sm:py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Loja de Segurança
          </h1>
          <p className="text-gray-400 text-lg">
            Equipamentos profissionais para sua proteção
          </p>
        </div>

        {/* Search and Filter Bar */}
        <div className="sticky top-20 z-30 bg-black/80 backdrop-blur-lg py-4 mb-8 -mx-4 px-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar produtos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-gray-900 border border-gray-800 rounded-lg
                         focus:ring-2 focus:ring-brand-red focus:border-transparent
                         text-white placeholder-gray-400"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-hide">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all
                             whitespace-nowrap transform hover:scale-105
                             ${selectedCategory === category.id
                               ? 'bg-brand-red text-white shadow-lg shadow-brand-red/20'
                               : 'bg-gray-900 text-gray-400 hover:bg-gray-800'
                             }`}
                >
                  <category.icon className="h-4 w-4" />
                  <span>{category.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-gray-900 rounded-xl overflow-hidden border border-gray-800
                       hover:border-brand-red/50 transition-all duration-300
                       hover:shadow-xl hover:shadow-brand-red/5 flex"
            >
              {/* Smaller Product Image */}
              <div className="relative w-24 sm:w-32 shrink-0">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20" />
                
                {/* Discount Badge */}
                {product.oldPrice && (
                  <div className="absolute top-1 left-1 px-1.5 py-0.5 bg-brand-red rounded
                               text-[10px] font-bold text-white">
                    -{Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}%
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="flex-1 p-3 min-w-0">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <h3 className="text-sm font-semibold truncate">{product.name}</h3>
                  <button
                    onClick={() => toggleFavorite(product.id)}
                    className="shrink-0"
                  >
                    <Heart
                      className={`h-4 w-4 ${
                        favorites.includes(product.id)
                          ? 'fill-brand-red text-brand-red'
                          : 'text-gray-400'
                      }`}
                    />
                  </button>
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-2">
                  <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                  <span className="text-xs font-medium">{product.rating}</span>
                  <span className="text-xs text-gray-400">({product.reviews})</span>
                </div>

                {/* Features - Compact List */}
                <div className="flex flex-wrap gap-1 mb-2">
                  {product.features.slice(0, 2).map((feature, index) => (
                    <span
                      key={index}
                      className="text-[10px] px-1.5 py-0.5 bg-gray-800 rounded text-gray-300"
                    >
                      {feature}
                    </span>
                  ))}
                  {product.features.length > 2 && (
                    <span className="text-[10px] px-1.5 py-0.5 text-gray-400">
                      +{product.features.length - 2}
                    </span>
                  )}
                </div>

                {/* Price and Add to Cart */}
                <div className="flex items-center justify-between mt-2">
                  <div className="flex flex-col">
                    <span className="text-sm font-bold">
                      R$ {product.price.toLocaleString('pt-BR')}
                    </span>
                    {product.oldPrice && (
                      <span className="text-xs text-gray-400 line-through">
                        R$ {product.oldPrice.toLocaleString('pt-BR')}
                      </span>
                    )}
                  </div>
                  <button
                    onClick={() => addToCart(product.id)}
                    className="p-2 bg-brand-red rounded-lg hover:bg-red-700 
                             transition-all transform hover:scale-105
                             shadow-lg shadow-brand-red/20"
                  >
                    <ShoppingCart className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Cart Sidebar */}
        <div
          className={`fixed inset-y-0 right-0 w-full sm:w-96 bg-gray-900 shadow-2xl transform transition-transform duration-300 z-50
                     ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <div className="h-full flex flex-col p-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold">Carrinho</h2>
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {cart.length === 0 ? (
              <div className="flex-1 flex flex-col items-center justify-center text-gray-400">
                <ShoppingCart className="h-12 w-12 mb-4" />
                <p>Seu carrinho está vazio</p>
              </div>
            ) : (
              <>
                <div className="flex-1 overflow-y-auto space-y-4">
                  {cart.map((item) => {
                    const product = products.find(p => p.id === item.productId)!;
                    return (
                      <div key={item.productId} className="flex items-center space-x-4 bg-gray-800 p-3 rounded-lg">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-16 h-16 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <h3 className="font-medium">{product.name}</h3>
                          <div className="flex items-center mt-2">
                            <button
                              onClick={() => updateQuantity(item.productId, item.quantity - 1)}
                              className="p-1 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
                            >
                              -
                            </button>
                            <span className="mx-3">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                              className="p-1 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
                            >
                              +
                            </button>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-bold">
                            R$ {(product.price * item.quantity).toLocaleString('pt-BR')}
                          </p>
                          <button
                            onClick={() => removeFromCart(item.productId)}
                            className="text-brand-red hover:text-red-400 text-sm mt-2"
                          >
                            Remover
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="mt-4 pt-4 border-t border-gray-800">
                  <div className="flex justify-between mb-4">
                    <span className="text-gray-400">Total</span>
                    <span className="text-xl font-bold">
                      R$ {cartTotal.toLocaleString('pt-BR')}
                    </span>
                  </div>
                  <button className="w-full institutional-button-primary">
                    Finalizar Compra
                    <ChevronRight className="h-5 w-5 ml-2" />
                  </button>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Cart Toggle Button */}
        {!isCartOpen && cart.length > 0 && (
          <button
            onClick={() => setIsCartOpen(true)}
            className="fixed bottom-4 right-4 bg-brand-red text-white px-6 py-3 rounded-full
                     shadow-lg shadow-brand-red/20 hover:scale-105 transition-transform
                     flex items-center space-x-2"
          >
            <ShoppingCart className="h-5 w-5" />
            <span>{cart.reduce((total, item) => total + item.quantity, 0)} itens</span>
          </button>
        )}
      </div>
    </section>
  );
}