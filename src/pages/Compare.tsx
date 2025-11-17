import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface CompareProps {
  compare: any[];
  onRemove: (product: any) => void;
  onAddToCart: (product: any) => void;
}

const Compare = ({ compare, onRemove, onAddToCart }: CompareProps) => {
  if (compare.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16">
        <Card className="p-12 text-center">
          <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
            <Icon name="GitCompare" size={48} className="text-muted-foreground" />
          </div>
          <h2 className="text-2xl font-bold mb-3">Нет товаров для сравнения</h2>
          <p className="text-muted-foreground mb-6">Добавьте товары, чтобы сравнить их характеристики</p>
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

  const characteristics = [
    { key: 'brand', label: 'Бренд' },
    { key: 'price', label: 'Цена' },
    { key: 'rating', label: 'Рейтинг' },
    { key: 'reviews', label: 'Отзывов' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-4xl font-bold">Сравнение товаров</h1>
          <p className="text-muted-foreground mt-2">{compare.length} товаров</p>
        </div>
        <Button 
          variant="outline" 
          onClick={() => compare.forEach(item => onRemove(item))}
        >
          <Icon name="Trash2" size={20} className="mr-2" />
          Очистить всё
        </Button>
      </div>

      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[200px] sticky left-0 bg-background z-10">Характеристика</TableHead>
              {compare.map((product) => (
                <TableHead key={product.id} className="min-w-[250px]">
                  <div className="space-y-4">
                    <div className="aspect-square rounded-lg overflow-hidden bg-muted/30">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <Link to={`/product/${product.id}`}>
                      <h3 className="font-semibold hover:text-primary transition-colors line-clamp-2">
                        {product.name}
                      </h3>
                    </Link>
                    <div className="flex flex-col gap-2">
                      <Button 
                        size="sm" 
                        className="w-full"
                        onClick={() => onAddToCart(product)}
                      >
                        <Icon name="ShoppingBag" size={16} className="mr-2" />
                        В корзину
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => onRemove(product)}
                      >
                        <Icon name="X" size={16} className="mr-2" />
                        Убрать
                      </Button>
                    </div>
                  </div>
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {characteristics.map((char) => (
              <TableRow key={char.key}>
                <TableCell className="font-semibold sticky left-0 bg-background">
                  {char.label}
                </TableCell>
                {compare.map((product) => (
                  <TableCell key={product.id}>
                    {char.key === 'price' && (
                      <div>
                        <div className="text-xl font-bold">{product.price} ₽</div>
                        {product.oldPrice && (
                          <div className="text-sm text-muted-foreground line-through">
                            {product.oldPrice} ₽
                          </div>
                        )}
                      </div>
                    )}
                    {char.key === 'rating' && (
                      <div className="flex items-center gap-2">
                        <Icon name="Star" size={16} className="fill-yellow-400 text-yellow-400" />
                        <span className="font-semibold">{product.rating}</span>
                      </div>
                    )}
                    {char.key === 'brand' && <span>{product.brand}</span>}
                    {char.key === 'reviews' && <span>{product.reviews}</span>}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <Card className="mt-8 p-6">
        <h3 className="font-semibold text-lg mb-4">Дополнительные характеристики</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold mb-3">Для кого</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Icon name="Check" size={16} className="text-green-500" />
                <span>Для всех типов кожи</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Check" size={16} className="text-green-500" />
                <span>Гипоаллергенно</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Check" size={16} className="text-green-500" />
                <span>Дерматологически протестировано</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Эффект</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Icon name="Sparkles" size={16} className="text-primary" />
                <span>Увлажнение</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Sparkles" size={16} className="text-primary" />
                <span>Антивозрастной эффект</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Sparkles" size={16} className="text-primary" />
                <span>Сияние кожи</span>
              </li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Compare;
