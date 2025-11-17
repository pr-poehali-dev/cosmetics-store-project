import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface FavoritesProps {
  favorites: any[];
  onAddToCart: (product: any) => void;
  onToggleFavorite: (product: any) => void;
}

const Favorites = ({ favorites, onAddToCart, onToggleFavorite }: FavoritesProps) => {
  if (favorites.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16">
        <Card className="p-12 text-center">
          <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
            <Icon name="Heart" size={48} className="text-muted-foreground" />
          </div>
          <h2 className="text-2xl font-bold mb-3">Список избранного пуст</h2>
          <p className="text-muted-foreground mb-6">Добавьте товары, которые вам понравились</p>
          <Link to="/catalog">
            <Button size="lg">
              <Icon name="ArrowLeft" size={20} className="mr-2" />
              Перейти в каталог
            </Button>
          </Link>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-4xl font-bold">Избранное</h1>
          <p className="text-muted-foreground mt-2">{favorites.length} товаров</p>
        </div>
        <Button 
          variant="outline" 
          onClick={() => favorites.forEach(item => onToggleFavorite(item))}
        >
          <Icon name="Trash2" size={20} className="mr-2" />
          Очистить всё
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {favorites.map((product) => (
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
                <div className="absolute top-3 left-3 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                  {product.badge}
                </div>
              )}
              
              <Button
                size="icon"
                variant="secondary"
                className="absolute top-3 right-3 rounded-full text-red-500"
                onClick={() => onToggleFavorite(product)}
              >
                <Icon name="Heart" size={18} className="fill-current" />
              </Button>
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
        ))}
      </div>
    </div>
  );
};

export default Favorites;
