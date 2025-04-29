import { Router } from 'express';
import genericRouter from 'src/routes/genericRouter';
import { Users } from 'src/modules/users/user.entity';
import { Product } from 'src/modules/products/product.entity';
import { Order } from 'src/modules/orders/order.entity';

const routeRegistrar = (app: Router) => {
  app.use('/api/users', genericRouter(Users));
  app.use('/api/products', genericRouter(Product));
  app.use('/api/orders', genericRouter(Order));
};

export default routeRegistrar;
