import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from '@/components/ui/icon';
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";

interface ProductPageProps {
  onAddToCart: (product: any) => void;
  onToggleFavorite: (product: any) => void;
  onToggleCompare: (product: any) => void;
  favorites: any[];
  compare: any[];
}

const ProductPage = ({ onAddToCart, onToggleFavorite, onToggleCompare, favorites, compare }: ProductPageProps) => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  const product = {
    id: 1,
    name: 'Увлажняющая сыворотка с гиалуроновой кислотой',
    brand: 'BeautyLab',
    price: 2890,
    oldPrice: 3490,
    rating: 4.8,
    reviews: 124,
    images: [
      'https://cdn.poehali.dev/projects/9aeb5eba-f3d4-475b-a809-dc312a85f5c4/files/a6c96a6f-1d35-4276-a956-71ab65146cdc.jpg',
      'https://cdn.poehali.dev/projects/9aeb5eba-f3d4-475b-a809-dc312a85f5c4/files/79c2b9d3-c63a-420e-8c22-f2bcaea63842.jpg',
      'https://cdn.poehali.dev/projects/9aeb5eba-f3d4-475b-a809-dc312a85f5c4/files/2e31f7ed-238c-4b5d-a2e1-c3fd18d2a265.jpg'
    ],
    badge: 'Хит продаж',
    description: 'Интенсивно увлажняющая сыворотка с тремя видами гиалуроновой кислоты разного молекулярного веса обеспечивает глубокое увлажнение всех слоев кожи. Легкая текстура мгновенно впитывается, не оставляя липкости.',
    ingredients: ['Гиалуроновая кислота 3%', 'Ниацинамид 2%', 'Пантенол', 'Аллантоин', 'Витамин Е'],
    benefits: ['Глубокое увлажнение', 'Разглаживание морщин', 'Повышение упругости', 'Сияние кожи'],
    howToUse: 'Нанесите 2-3 капли на очищенную кожу лица утром и вечером, распределите легкими похлопывающими движениями до полного впитывания.',
    volume: '30 мл',
    inStock: true
  };

  const reviews = [
    {
      id: 1,
      author: 'Анна К.',
      rating: 5,
      date: '15 марта 2024',
      text: 'Потрясающая сыворотка! Кожа стала более увлажненной и сияющей. Использую уже месяц, результат превзошел ожидания.',
      helpful: 42
    },
    {
      id: 2,
      author: 'Мария С.',
      rating: 4,
      date: '10 марта 2024',
      text: 'Хорошая сыворотка, быстро впитывается. Единственный минус - небольшой объем.',
      helpful: 18
    },
    {
      id: 3,
      author: 'Елена В.',
      rating: 5,
      date: '5 марта 2024',
      text: 'Лучшая сыворотка, которую я пробовала! Кожа стала как у младенца - мягкая и увлажненная.',
      helpful: 31
    }
  ];

  const relatedProducts = [
    {
      id: 2,
      name: 'Ночной крем с ретинолом',
      brand: 'SkinCare Pro',
      price: 3590,
      rating: 4.9,
      image: 'https://cdn.poehali.dev/projects/9aeb5eba-f3d4-475b-a809-dc312a85f5c4/files/79c2b9d3-c63a-420e-8c22-f2bcaea63842.jpg'
    },
    {
      id: 3,
      name: 'Витаминная маска для лица',
      brand: 'Natural Beauty',
      price: 1990,
      rating: 4.7,
      image: 'https://cdn.poehali.dev/projects/9aeb5eba-f3d4-475b-a809-dc312a85f5c4/files/2e31f7ed-238c-4b5d-a2e1-c3fd18d2a265.jpg'
    },
    {
      id: 4,
      name: 'Тонизирующий мист',
      brand: 'Fresh Glow',
      price: 1590,
      rating: 4.6,
      image: 'https://cdn.poehali.dev/projects/9aeb5eba-f3d4-475b-a809-dc312a85f5c4/files/a6c96a6f-1d35-4276-a956-71ab65146cdc.jpg'
    }
  ];

  const isFavorite = favorites.some(f => f.id === product.id);
  const inCompare = compare.some(c => c.id === product.id);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-primary">Главная</Link>
          <Icon name="ChevronRight" size={16} />
          <Link to="/catalog" className="hover:text-primary">Каталог</Link>
          <Icon name="ChevronRight" size={16} />
          <span>{product.name}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <div className="space-y-4">
          <div className="aspect-square rounded-2xl overflow-hidden bg-muted/30">
            <img 
              src={product.images[selectedImage]} 
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid grid-cols-3 gap-4">
            {product.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedImage(idx)}
                className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                  selectedImage === idx ? 'border-primary' : 'border-transparent'
                }`}
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          {product.badge && <Badge>{product.badge}</Badge>}
          
          <div>
            <p className="text-muted-foreground mb-2">{product.brand}</p>
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center gap-2">
                {[...Array(5)].map((_, i) => (
                  <Icon 
                    key={i} 
                    name="Star" 
                    size={20} 
                    className={i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
                  />
                ))}
                <span className="font-semibold">{product.rating}</span>
              </div>
              <span className="text-muted-foreground">({product.reviews} отзывов)</span>
            </div>
          </div>

          <div className="flex items-baseline gap-4">
            <div className="text-4xl font-bold">{product.price} ₽</div>
            {product.oldPrice && (
              <div className="text-2xl text-muted-foreground line-through">{product.oldPrice} ₽</div>
            )}
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Icon name="Package" size={20} className="text-muted-foreground" />
              <span>Объем: {product.volume}</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name={product.inStock ? 'Check' : 'X'} size={20} className={product.inStock ? 'text-green-500' : 'text-red-500'} />
              <span>{product.inStock ? 'В наличии' : 'Нет в наличии'}</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center border rounded-lg">
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                <Icon name="Minus" size={18} />
              </Button>
              <span className="px-6 font-semibold">{quantity}</span>
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => setQuantity(quantity + 1)}
              >
                <Icon name="Plus" size={18} />
              </Button>
            </div>

            <Button 
              size="lg" 
              className="flex-1"
              onClick={() => onAddToCart({ ...product, quantity })}
            >
              <Icon name="ShoppingBag" size={20} className="mr-2" />
              Добавить в корзину
            </Button>
          </div>

          <div className="flex gap-2">
            <Button
              variant="outline"
              className="flex-1"
              onClick={() => onToggleFavorite(product)}
            >
              <Icon name="Heart" size={20} className={`mr-2 ${isFavorite ? 'fill-current text-red-500' : ''}`} />
              {isFavorite ? 'В избранном' : 'В избранное'}
            </Button>
            <Button
              variant="outline"
              className="flex-1"
              onClick={() => onToggleCompare(product)}
            >
              <Icon name="GitCompare" size={20} className={`mr-2 ${inCompare ? 'text-primary' : ''}`} />
              {inCompare ? 'В сравнении' : 'Сравнить'}
            </Button>
          </div>
        </div>
      </div>

      <Tabs defaultValue="description" className="mb-12">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="description">Описание</TabsTrigger>
          <TabsTrigger value="ingredients">Состав</TabsTrigger>
          <TabsTrigger value="howto">Применение</TabsTrigger>
          <TabsTrigger value="reviews">Отзывы ({reviews.length})</TabsTrigger>
        </TabsList>
        
        <TabsContent value="description" className="mt-6">
          <Card className="p-6">
            <p className="text-lg leading-relaxed">{product.description}</p>
            <div className="mt-6">
              <h3 className="font-semibold text-lg mb-3">Преимущества:</h3>
              <ul className="space-y-2">
                {product.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <Icon name="Check" size={20} className="text-green-500" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="ingredients" className="mt-6">
          <Card className="p-6">
            <h3 className="font-semibold text-lg mb-4">Активные ингредиенты:</h3>
            <div className="space-y-3">
              {product.ingredients.map((ingredient, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                  <Icon name="Leaf" size={20} className="text-primary" />
                  <span>{ingredient}</span>
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="howto" className="mt-6">
          <Card className="p-6">
            <h3 className="font-semibold text-lg mb-4">Способ применения:</h3>
            <p className="text-lg leading-relaxed">{product.howToUse}</p>
          </Card>
        </TabsContent>

        <TabsContent value="reviews" className="mt-6">
          <Card className="p-6">
            <div className="mb-6">
              <div className="flex items-center gap-8 mb-6">
                <div className="text-center">
                  <div className="text-5xl font-bold mb-2">{product.rating}</div>
                  <div className="flex items-center justify-center mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Icon 
                        key={i} 
                        name="Star" 
                        size={20} 
                        className={i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
                      />
                    ))}
                  </div>
                  <div className="text-sm text-muted-foreground">{product.reviews} отзывов</div>
                </div>

                <div className="flex-1 space-y-2">
                  {[5, 4, 3, 2, 1].map((star) => (
                    <div key={star} className="flex items-center gap-2">
                      <span className="text-sm w-8">{star}</span>
                      <Icon name="Star" size={14} className="fill-yellow-400 text-yellow-400" />
                      <Progress value={star === 5 ? 75 : star === 4 ? 20 : 5} className="flex-1" />
                      <span className="text-sm text-muted-foreground w-12 text-right">
                        {star === 5 ? '75%' : star === 4 ? '20%' : '5%'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {reviews.map((review) => (
                <div key={review.id} className="border-t pt-6">
                  <div className="flex items-start gap-4">
                    <Avatar>
                      <AvatarFallback>{review.author[0]}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <div className="font-semibold">{review.author}</div>
                          <div className="text-sm text-muted-foreground">{review.date}</div>
                        </div>
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Icon 
                              key={i} 
                              name="Star" 
                              size={16} 
                              className={i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="mb-3">{review.text}</p>
                      <Button variant="ghost" size="sm">
                        <Icon name="ThumbsUp" size={16} className="mr-2" />
                        Полезно ({review.helpful})
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>
      </Tabs>

      <section>
        <h2 className="text-3xl font-bold mb-6">С этим товаром покупают</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedProducts.map((relProduct) => (
            <Card key={relProduct.id} className="overflow-hidden hover:shadow-lg transition-all">
              <Link to={`/product/${relProduct.id}`}>
                <div className="aspect-square overflow-hidden bg-muted/30">
                  <img 
                    src={relProduct.image} 
                    alt={relProduct.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 space-y-2">
                  <p className="text-xs text-muted-foreground">{relProduct.brand}</p>
                  <h3 className="font-semibold line-clamp-2">{relProduct.name}</h3>
                  <div className="flex items-center gap-2">
                    <Icon name="Star" size={14} className="fill-yellow-400 text-yellow-400" />
                    <span className="text-sm">{relProduct.rating}</span>
                  </div>
                  <div className="text-xl font-bold">{relProduct.price} ₽</div>
                </div>
              </Link>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductPage;
