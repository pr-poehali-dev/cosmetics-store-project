import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import Index from "./pages/Index";
import Catalog from './pages/Catalog';
import ProductPage from './pages/ProductPage';
import Cart from './pages/Cart';
import Favorites from './pages/Favorites';
import Compare from './pages/Compare';
import NotFound from "./pages/NotFound";
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const queryClient = new QueryClient();

const App = () => {
  const [cart, setCart] = useState<any[]>([]);
  const [favorites, setFavorites] = useState<any[]>([]);
  const [compare, setCompare] = useState<any[]>([]);

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    const savedFavorites = localStorage.getItem('favorites');
    const savedCompare = localStorage.getItem('compare');
    
    if (savedCart) setCart(JSON.parse(savedCart));
    if (savedFavorites) setFavorites(JSON.parse(savedFavorites));
    if (savedCompare) setCompare(JSON.parse(savedCompare));
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    localStorage.setItem('compare', JSON.stringify(compare));
  }, [compare]);

  const addToCart = (product: any) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId: number) => {
    setCart(prev => prev.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart(prev =>
      prev.map(item => (item.id === productId ? { ...item, quantity } : item))
    );
  };

  const toggleFavorite = (product: any) => {
    setFavorites(prev => {
      const exists = prev.find(item => item.id === product.id);
      if (exists) {
        return prev.filter(item => item.id !== product.id);
      }
      return [...prev, product];
    });
  };

  const toggleCompare = (product: any) => {
    setCompare(prev => {
      const exists = prev.find(item => item.id === product.id);
      if (exists) {
        return prev.filter(item => item.id !== product.id);
      }
      if (prev.length >= 4) {
        alert('Можно сравнивать не более 4 товаров');
        return prev;
      }
      return [...prev, product];
    });
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="min-h-screen flex flex-col">
            <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-border shadow-sm">
              <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                  <Link to="/" className="flex items-center gap-2">
                    <span className="text-2xl">✨</span>
                    <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      BeautyShop
                    </span>
                  </Link>

                  <nav className="hidden md:flex items-center gap-6">
                    <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">
                      Главная
                    </Link>
                    <Link to="/catalog" className="text-sm font-medium hover:text-primary transition-colors">
                      Каталог
                    </Link>
                  </nav>

                  <div className="flex items-center gap-3">
                    <Link to="/favorites">
                      <Button variant="ghost" size="icon" className="relative">
                        <Icon name="Heart" size={20} />
                        {favorites.length > 0 && (
                          <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs">
                            {favorites.length}
                          </Badge>
                        )}
                      </Button>
                    </Link>
                    
                    <Link to="/compare">
                      <Button variant="ghost" size="icon" className="relative">
                        <Icon name="GitCompare" size={20} />
                        {compare.length > 0 && (
                          <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs">
                            {compare.length}
                          </Badge>
                        )}
                      </Button>
                    </Link>

                    <Link to="/cart">
                      <Button variant="ghost" size="icon" className="relative">
                        <Icon name="ShoppingBag" size={20} />
                        {cart.length > 0 && (
                          <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs">
                            {cart.reduce((sum, item) => sum + item.quantity, 0)}
                          </Badge>
                        )}
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </header>

            <main className="flex-1">
              <Routes>
                <Route 
                  path="/" 
                  element={
                    <Index 
                      onAddToCart={addToCart}
                      onToggleFavorite={toggleFavorite}
                      onToggleCompare={toggleCompare}
                      favorites={favorites}
                      compare={compare}
                    />
                  } 
                />
                <Route 
                  path="/catalog" 
                  element={
                    <Catalog 
                      onAddToCart={addToCart}
                      onToggleFavorite={toggleFavorite}
                      onToggleCompare={toggleCompare}
                      favorites={favorites}
                      compare={compare}
                    />
                  } 
                />
                <Route 
                  path="/product/:id" 
                  element={
                    <ProductPage 
                      onAddToCart={addToCart}
                      onToggleFavorite={toggleFavorite}
                      onToggleCompare={toggleCompare}
                      favorites={favorites}
                      compare={compare}
                    />
                  } 
                />
                <Route 
                  path="/cart" 
                  element={
                    <Cart 
                      cart={cart}
                      onUpdateQuantity={updateQuantity}
                      onRemove={removeFromCart}
                    />
                  } 
                />
                <Route 
                  path="/favorites" 
                  element={
                    <Favorites 
                      favorites={favorites}
                      onAddToCart={addToCart}
                      onToggleFavorite={toggleFavorite}
                    />
                  } 
                />
                <Route 
                  path="/compare" 
                  element={
                    <Compare 
                      compare={compare}
                      onRemove={(product) => toggleCompare(product)}
                      onAddToCart={addToCart}
                    />
                  } 
                />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>

            <footer className="bg-muted/30 border-t border-border mt-20">
              <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-2xl">✨</span>
                      <span className="text-xl font-bold">BeautyShop</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Премиальная косметика для вашей красоты
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3">Каталог</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li><Link to="/catalog?category=face" className="hover:text-primary transition-colors">Уход за лицом</Link></li>
                      <li><Link to="/catalog?category=body" className="hover:text-primary transition-colors">Уход за телом</Link></li>
                      <li><Link to="/catalog?category=makeup" className="hover:text-primary transition-colors">Макияж</Link></li>
                      <li><Link to="/catalog?category=hair" className="hover:text-primary transition-colors">Уход за волосами</Link></li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3">Информация</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li><a href="#" className="hover:text-primary transition-colors">О нас</a></li>
                      <li><a href="#" className="hover:text-primary transition-colors">Доставка</a></li>
                      <li><a href="#" className="hover:text-primary transition-colors">Оплата</a></li>
                      <li><a href="#" className="hover:text-primary transition-colors">Контакты</a></li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3">Контакты</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <Icon name="Phone" size={16} />
                        <span>+7 (495) 123-45-67</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Icon name="Mail" size={16} />
                        <span>info@beautyshop.ru</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
                  <p>&copy; 2024 BeautyShop. Все права защищены.</p>
                </div>
              </div>
            </footer>
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
