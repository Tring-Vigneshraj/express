import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
  } from "typeorm";
  import { Order } from "src/modules/orders/order.entity";
  import { Product } from "src/modules/products/product.entity";
  
  @Entity()
  export class OrderItem {
    @PrimaryGeneratedColumn()
    id!: number;
  
    @ManyToOne(() => Order, (order) => order.items)
    order!: Order;
  
    @ManyToOne(() => Product)
    product!: Product;
  
    @Column()
    quantity!: number;
  
    @Column("decimal", { precision: 10, scale: 2 })
    unitPrice!: number;
  }