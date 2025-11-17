import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Separator } from '@/components/ui/separator';

interface CartProps {
  cart: any[];
  onUpdateQuantity: (productId: number, quantity: number) => void;
  onRemove: (productId: number) => void;
}

const Cart = ({ cart, onUpdateQuantity, onRemove }: CartProps) => {
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discount = subtotal > 5000 ? subtotal * 0.1 : 0;
  const shipping = subtotal > 3000 ? 0 : 350;
  const total = subtotal - discount + shipping;

  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16">
        <Card className="p-12 text-center">
          <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
            <Icon name="ShoppingBag" size={48} className="text-muted-foreground" />
          </div>
          <h2 className="text-2xl font-bold mb-3">Корзина пуста</h2>
          <p className="text-muted-foreground mb-6">Добавьте товары, чтобы сделать заказ</p>
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
      <h1 className="text-4xl font-bold mb-8">Корзина</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          {cart.map((item) => (
            <Card key={item.id} className="p-6">
              <div className="flex gap-6">
                <div className="w-32 h-32 rounded-lg overflow-hidden bg-muted/30 flex-shrink-0">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex-1 space-y-3">
                  <div>
                    <p className="text-sm text-muted-foreground">{item.brand}</p>
                    <Link to={`/product/${item.id}`}>
                      <h3 className="font-semibold text-lg hover:text-primary transition-colors">
                        {item.name}
                      </h3>
                    </Link>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center border rounded-lg">
                      <Button 
                        variant="ghost" 
                        size="icon"
                        onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                      >
                        <Icon name="Minus" size={18} />
                      </Button>
                      <span className="px-6 font-semibold">{item.quantity}</span>
                      <Button 
                        variant="ghost" 
                        size="icon"
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                      >
                        <Icon name="Plus" size={18} />
                      </Button>
                    </div>

                    <div className="text-right">
                      <div className="text-2xl font-bold">{item.price * item.quantity} ₽</div>
                      <div className="text-sm text-muted-foreground">{item.price} ₽ за шт.</div>
                    </div>
                  </div>
                </div>

                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => onRemove(item.id)}
                  className="flex-shrink-0"
                >
                  <Icon name="Trash2" size={20} className="text-destructive" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="lg:col-span-1">
          <Card className="p-6 sticky top-24 space-y-6">
            <h2 className="text-xl font-bold">Итого</h2>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Товары ({cart.length})</span>
                <span className="font-semibold">{subtotal} ₽</span>
              </div>

              {discount > 0 && (
                <div className="flex items-center justify-between text-green-600">
                  <span>Скидка</span>
                  <span className="font-semibold">-{discount} ₽</span>
                </div>
              )}

              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Доставка</span>
                <span className="font-semibold">
                  {shipping === 0 ? 'Бесплатно' : `${shipping} ₽`}
                </span>
              </div>

              {subtotal < 3000 && (
                <div className="text-sm text-muted-foreground">
                  До бесплатной доставки: {3000 - subtotal} ₽
                </div>
              )}
            </div>

            <Separator />

            <div className="flex items-center justify-between text-xl font-bold">
              <span>К оплате</span>
              <span>{total} ₽</span>
            </div>

            <Button size="lg" className="w-full">
              Оформить заказ
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </Button>

            <div className="space-y-3 pt-4 border-t">
              <div className="flex items-center gap-2 text-sm">
                <Icon name="ShieldCheck" size={18} className="text-primary" />
                <span>Безопасная оплата</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Icon name="Truck" size={18} className="text-primary" />
                <span>Доставка 1-3 дня</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Icon name="RotateCcw" size={18} className="text-primary" />
                <span>Возврат в течение 14 дней</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Cart;
