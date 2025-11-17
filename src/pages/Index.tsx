import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useState } from 'react';

interface IndexProps {
  onAddToCart: (product: any) => void;
  onToggleFavorite: (product: any) => void;
  onToggleCompare: (product: any) => void;
  favorites: any[];
  compare: any[];
}

const Index = ({ onAddToCart, onToggleFavorite, onToggleCompare, favorites, compare }: IndexProps) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const promoSlides = [
    {
      id: 1,
      title: 'Новая коллекция',
      subtitle: 'Весна 2024',
      description: 'Откройте для себя нежные оттенки весны',
      image: 'https://cdn.poehali.dev/projects/9aeb5eba-f3d4-475b-a809-dc312a85f5c4/files/a6c96a6f-1d35-4276-a956-71ab65146cdc.jpg',
      cta: 'Смотреть коллекцию'
    },
    {
      id: 2,
      title: 'Скидки до 30%',
      subtitle: 'На уход за кожей',
      description: 'Премиальная косметика по специальным ценам',
      image: 'https://cdn.poehali.dev/projects/9aeb5eba-f3d4-475b-a809-dc312a85f5c4/files/79c2b9d3-c63a-420e-8c22-f2bcaea63842.jpg',
      cta: 'Выбрать товары'
    },
    {
      id: 3,
      title: 'Натуральная косметика',
      subtitle: 'Эко-линейка',
      description: 'Забота о красоте и природе',
      image: 'https://cdn.poehali.dev/projects/9aeb5eba-f3d4-475b-a809-dc312a85f5c4/files/2e31f7ed-238c-4b5d-a2e1-c3fd18d2a265.jpg',
      cta: 'Узнать больше'
    }
  ];

  const banners = [
    { id: 1, title: 'Уход за лицом', icon: 'Sparkles', color: 'bg-pink-100', link: '/catalog?category=face' },
    { id: 2, title: 'Уход за телом', icon: 'Heart', color: 'bg-purple-100', link: '/catalog?category=body' },
    { id: 3, title: 'Макияж', icon: 'Palette', color: 'bg-orange-100', link: '/catalog?category=makeup' },
    { id: 4, title: 'Уход за волосами', icon: 'Flower2', color: 'bg-blue-100', link: '/catalog?category=hair' }
  ];

  const benefits = [
    { icon: 'Truck', title: 'Бесплатная доставка', description: 'От 3000 ₽' },
    { icon: 'ShieldCheck', title: 'Гарантия качества', description: '100% оригинал' },
    { icon: 'Gift', title: 'Подарки', description: 'К каждому заказу' },
    { icon: 'CreditCard', title: 'Удобная оплата', description: 'Любым способом' }
  ];

  const categories = [
    { 
      id: 1, 
      name: 'Сыворотки', 
      count: 45,
      image: 'https://cdn.poehali.dev/projects/9aeb5eba-f3d4-475b-a809-dc312a85f5c4/files/a6c96a6f-1d35-4276-a956-71ab65146cdc.jpg',
      link: '/catalog?type=serum'
    },
    { 
      id: 2, 
      name: 'Кремы', 
      count: 67,
      image: 'https://cdn.poehali.dev/projects/9aeb5eba-f3d4-475b-a809-dc312a85f5c4/files/79c2b9d3-c63a-420e-8c22-f2bcaea63842.jpg',
      link: '/catalog?type=cream'
    },
    { 
      id: 3, 
      name: 'Маски', 
      count: 34,
      image: 'https://cdn.poehali.dev/projects/9aeb5eba-f3d4-475b-a809-dc312a85f5c4/files/2e31f7ed-238c-4b5d-a2e1-c3fd18d2a265.jpg',
      link: '/catalog?type=mask'
    },
    { 
      id: 4, 
      name: 'Тоники', 
      count: 28,
      image: 'https://cdn.poehali.dev/projects/9aeb5eba-f3d4-475b-a809-dc312a85f5c4/files/a6c96a6f-1d35-4276-a956-71ab65146cdc.jpg',
      link: '/catalog?type=toner'
    }
  ];

  const featuredProducts = [
    {
      id: 1,
      name: 'Увлажняющая сыворотка с гиалуроновой кислотой',
      brand: 'BeautyLab',
      price: 2890,
      oldPrice: 3490,
      rating: 4.8,
      reviews: 124,
      image: 'https://cdn.poehali.dev/projects/9aeb5eba-f3d4-475b-a809-dc312a85f5c4/files/a6c96a6f-1d35-4276-a956-71ab65146cdc.jpg',
      badge: 'Хит продаж'
    },
    {
      id: 2,
      name: 'Ночной крем с ретинолом',
      brand: 'SkinCare Pro',
      price: 3590,
      rating: 4.9,
      reviews: 89,
      image: 'https://cdn.poehali.dev/projects/9aeb5eba-f3d4-475b-a809-dc312a85f5c4/files/79c2b9d3-c63a-420e-8c22-f2bcaea63842.jpg',
      badge: 'Новинка'
    },
    {
      id: 3,
      name: 'Витаминная маска для лица',
      brand: 'Natural Beauty',
      price: 1990,
      oldPrice: 2490,
      rating: 4.7,
      reviews: 156,
      image: 'https://cdn.poehali.dev/projects/9aeb5eba-f3d4-475b-a809-dc312a85f5c4/files/2e31f7ed-238c-4b5d-a2e1-c3fd18d2a265.jpg',
      badge: 'Скидка'
    },
    {
      id: 4,
      name: 'Тонизирующий мист',
      brand: 'Fresh Glow',
      price: 1590,
      rating: 4.6,
      reviews: 67,
      image: 'https://cdn.poehali.dev/projects/9aeb5eba-f3d4-475b-a809-dc312a85f5c4/files/a6c96a6f-1d35-4276-a956-71ab65146cdc.jpg',
    }
  ];

  return (
    <div className="animate-fade-in">
      <section className="relative h-[600px] mb-12 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://cdn.poehali.dev/projects/9aeb5eba-f3d4-475b-a809-dc312a85f5c4/files/b1156480-2857-457a-b2d0-89d617e41d09.jpg)',
            transform: `translateY(${scrollY * 0.5}px)`,
            willChange: 'transform'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-background" />
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center space-y-6 animate-fade-in px-4">
            <h1 className="text-6xl md:text-8xl font-bold text-white drop-shadow-2xl">
              BeautyShop
            </h1>
            <p className="text-2xl md:text-3xl text-white/90 drop-shadow-lg">
              Красота в каждой детали
            </p>
            <Link to="/catalog">
              <Button size="lg" className="mt-8 text-lg px-8 py-6">
                Открыть каталог
                <Icon name="Sparkles" size={24} className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <Carousel className="w-full" opts={{ loop: true }}>
          <CarouselContent>
            {promoSlides.map((slide) => (
              <CarouselItem key={slide.id}>
                <div className="relative h-[500px] rounded-3xl overflow-hidden mx-4">
                  <img 
                    src={slide.image} 
                    alt={slide.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center">
                    <div className="container mx-auto px-4">
                      <div className="max-w-xl text-white space-y-4 animate-slide-in">
                        <Badge className="bg-white/20 backdrop-blur-sm text-white border-0">
                          {slide.subtitle}
                        </Badge>
                        <h1 className="text-5xl font-bold">{slide.title}</h1>
                        <p className="text-xl text-white/90">{slide.description}</p>
                        <Link to="/catalog">
                          <Button size="lg" className="mt-4">
                            {slide.cta}
                            <Icon name="ArrowRight" size={20} className="ml-2" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-8" />
          <CarouselNext className="right-8" />
        </Carousel>
      </section>

      <section className="container mx-auto px-4 mb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {banners.map((banner) => (
            <Link key={banner.id} to={banner.link}>
              <Card className="p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
                <div className={`w-16 h-16 ${banner.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon name={banner.icon as any} size={28} className="text-primary" />
                </div>
                <h3 className="font-semibold text-lg">{banner.title}</h3>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-secondary/20 py-8 mb-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name={benefit.icon as any} size={24} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm">{benefit.title}</h4>
                  <p className="text-xs text-muted-foreground">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 mb-16">
        <h2 className="text-3xl font-bold mb-8">Популярные категории</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link key={category.id} to={category.link}>
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group cursor-pointer">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 bg-white">
                  <h3 className="font-semibold text-lg mb-1">{category.name}</h3>
                  <p className="text-sm text-muted-foreground">{category.count} товаров</p>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 mb-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">Популярные товары</h2>
          <Link to="/catalog">
            <Button variant="outline">
              Смотреть всё
              <Icon name="ArrowRight" size={18} className="ml-2" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => {
            const isFavorite = favorites.some(f => f.id === product.id);
            const inCompare = compare.some(c => c.id === product.id);

            return (
              <Card key={product.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative aspect-square overflow-hidden bg-muted/30">
                  <Link to={`/product/${product.id}`}>
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </Link>
                  
                  {product.badge && (
                    <Badge className="absolute top-3 left-3">
                      {product.badge}
                    </Badge>
                  )}
                  
                  <div className="absolute top-3 right-3 flex flex-col gap-2">
                    <Button
                      size="icon"
                      variant="secondary"
                      className={`rounded-full ${isFavorite ? 'text-red-500' : ''}`}
                      onClick={() => onToggleFavorite(product)}
                    >
                      <Icon name="Heart" size={18} className={isFavorite ? 'fill-current' : ''} />
                    </Button>
                    <Button
                      size="icon"
                      variant="secondary"
                      className={`rounded-full ${inCompare ? 'text-primary' : ''}`}
                      onClick={() => onToggleCompare(product)}
                    >
                      <Icon name="GitCompare" size={18} />
                    </Button>
                  </div>
                </div>

                <div className="p-4 space-y-3">
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">{product.brand}</p>
                    <Link to={`/product/${product.id}`}>
                      <h3 className="font-semibold line-clamp-2 hover:text-primary transition-colors">
                        {product.name}
                      </h3>
                    </Link>
                  </div>

                  <div className="flex items-center gap-2 text-sm">
                    <div className="flex items-center gap-1">
                      <Icon name="Star" size={14} className="fill-yellow-400 text-yellow-400" />
                      <span className="font-medium">{product.rating}</span>
                    </div>
                    <span className="text-muted-foreground">({product.reviews})</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xl font-bold">{product.price} ₽</div>
                      {product.oldPrice && (
                        <div className="text-sm text-muted-foreground line-through">
                          {product.oldPrice} ₽
                        </div>
                      )}
                    </div>
                    <Button onClick={() => onAddToCart(product)}>
                      <Icon name="ShoppingBag" size={18} />
                    </Button>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Index;