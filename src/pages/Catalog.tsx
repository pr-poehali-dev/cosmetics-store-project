import { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

interface CatalogProps {
  onAddToCart: (product: any) => void;
  onToggleFavorite: (product: any) => void;
  onToggleCompare: (product: any) => void;
  favorites: any[];
  compare: any[];
}

const Catalog = ({ onAddToCart, onToggleFavorite, onToggleCompare, favorites, compare }: CatalogProps) => {
  const [searchParams] = useSearchParams();
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [sortBy, setSortBy] = useState('popular');

  const allProducts = [
    {
      id: 1,
      name: 'Увлажняющая сыворотка с гиалуроновой кислотой',
      brand: 'BeautyLab',
      price: 2890,
      oldPrice: 3490,
      rating: 4.8,
      reviews: 124,
      image: 'https://cdn.poehali.dev/projects/9aeb5eba-f3d4-475b-a809-dc312a85f5c4/files/a6c96a6f-1d35-4276-a956-71ab65146cdc.jpg',
      badge: 'Хит продаж',
      category: 'face',
      type: 'serum'
    },
    {
      id: 2,
      name: 'Ночной крем с ретинолом',
      brand: 'SkinCare Pro',
      price: 3590,
      rating: 4.9,
      reviews: 89,
      image: 'https://cdn.poehali.dev/projects/9aeb5eba-f3d4-475b-a809-dc312a85f5c4/files/79c2b9d3-c63a-420e-8c22-f2bcaea63842.jpg',
      badge: 'Новинка',
      category: 'face',
      type: 'cream'
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
      badge: 'Скидка',
      category: 'face',
      type: 'mask'
    },
    {
      id: 4,
      name: 'Тонизирующий мист',
      brand: 'Fresh Glow',
      price: 1590,
      rating: 4.6,
      reviews: 67,
      image: 'https://cdn.poehali.dev/projects/9aeb5eba-f3d4-475b-a809-dc312a85f5c4/files/a6c96a6f-1d35-4276-a956-71ab65146cdc.jpg',
      category: 'face',
      type: 'toner'
    },
    {
      id: 5,
      name: 'Питательный крем для тела',
      brand: 'Body Care',
      price: 2190,
      rating: 4.5,
      reviews: 92,
      image: 'https://cdn.poehali.dev/projects/9aeb5eba-f3d4-475b-a809-dc312a85f5c4/files/79c2b9d3-c63a-420e-8c22-f2bcaea63842.jpg',
      category: 'body',
      type: 'cream'
    },
    {
      id: 6,
      name: 'Скраб для тела с морской солью',
      brand: 'Ocean Beauty',
      price: 1490,
      rating: 4.8,
      reviews: 145,
      image: 'https://cdn.poehali.dev/projects/9aeb5eba-f3d4-475b-a809-dc312a85f5c4/files/2e31f7ed-238c-4b5d-a2e1-c3fd18d2a265.jpg',
      category: 'body',
      type: 'scrub'
    },
    {
      id: 7,
      name: 'Увлажняющая тональная основа',
      brand: 'Makeup Pro',
      price: 2790,
      rating: 4.7,
      reviews: 203,
      image: 'https://cdn.poehali.dev/projects/9aeb5eba-f3d4-475b-a809-dc312a85f5c4/files/a6c96a6f-1d35-4276-a956-71ab65146cdc.jpg',
      badge: 'Хит продаж',
      category: 'makeup',
      type: 'foundation'
    },
    {
      id: 8,
      name: 'Палетка теней нюд',
      brand: 'Glamour',
      price: 3290,
      rating: 4.9,
      reviews: 167,
      image: 'https://cdn.poehali.dev/projects/9aeb5eba-f3d4-475b-a809-dc312a85f5c4/files/79c2b9d3-c63a-420e-8c22-f2bcaea63842.jpg',
      category: 'makeup',
      type: 'eyeshadow'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Каталог товаров</h1>
        <p className="text-muted-foreground">Найдено {allProducts.length} товаров</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <aside className="space-y-6">
          <Card className="p-6">
            <h3 className="font-semibold mb-4">Категории</h3>
            <div className="space-y-3">
              {['face', 'body', 'makeup', 'hair'].map((cat) => (
                <div key={cat} className="flex items-center space-x-2">
                  <Checkbox id={cat} />
                  <Label htmlFor={cat} className="cursor-pointer capitalize">
                    {cat === 'face' && 'Уход за лицом'}
                    {cat === 'body' && 'Уход за телом'}
                    {cat === 'makeup' && 'Макияж'}
                    {cat === 'hair' && 'Уход за волосами'}
                  </Label>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="font-semibold mb-4">Цена</h3>
            <div className="space-y-4">
              <Slider
                value={priceRange}
                onValueChange={setPriceRange}
                max={10000}
                step={100}
                className="mb-4"
              />
              <div className="flex items-center justify-between text-sm">
                <span>{priceRange[0]} ₽</span>
                <span>{priceRange[1]} ₽</span>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="font-semibold mb-4">Бренды</h3>
            <div className="space-y-3">
              {['BeautyLab', 'SkinCare Pro', 'Natural Beauty', 'Fresh Glow'].map((brand) => (
                <div key={brand} className="flex items-center space-x-2">
                  <Checkbox id={brand} />
                  <Label htmlFor={brand} className="cursor-pointer">{brand}</Label>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="font-semibold mb-4">Тип кожи</h3>
            <div className="space-y-3">
              {['Сухая', 'Жирная', 'Комбинированная', 'Чувствительная'].map((skin) => (
                <div key={skin} className="flex items-center space-x-2">
                  <Checkbox id={skin} />
                  <Label htmlFor={skin} className="cursor-pointer">{skin}</Label>
                </div>
              ))}
            </div>
          </Card>
        </aside>

        <div className="lg:col-span-3">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[200px]">
                  <SelectValue placeholder="Сортировка" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popular">Популярные</SelectItem>
                  <SelectItem value="price-asc">Цена: по возрастанию</SelectItem>
                  <SelectItem value="price-desc">Цена: по убыванию</SelectItem>
                  <SelectItem value="rating">Рейтинг</SelectItem>
                  <SelectItem value="new">Новинки</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon">
                <Icon name="Grid3x3" size={18} />
              </Button>
              <Button variant="outline" size="icon">
                <Icon name="List" size={18} />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {allProducts.map((product) => {
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
        </div>
      </div>
    </div>
  );
};

export default Catalog;
