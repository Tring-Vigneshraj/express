import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    CreateDateColumn,
    OneToMany,
  } from "typeorm";
  import { Users } from "src/modules/users/user.entity";
  import { OrderItem } from "src/modules/orderItem/orderItem.entity";
  
  @Entity()
  export class Order {
    @PrimaryGeneratedColumn()
    id!: number;
  
    @ManyToOne(() => Users, (user) => user.orders)
    user!: Users;
  
    @CreateDateColumn()
    createdAt!: Date;
  
    @Column({ default: "pending" })
    status!: "pending" | "shipped" | "delivered" | "cancelled";
  
    @OneToMany(() => OrderItem, (item) => item.order, { cascade: true })
    items!: OrderItem[];
  
    @Column("decimal", { precision: 10, scale: 2 })
    totalAmount!: number;
  }