import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm";
import { Order } from "src/modules/orders/order.entity";

@Entity('users')
export class Users {
  @PrimaryGeneratedColumn("uuid")
  id!: string

  @Column()
  firstName!: string;

  @Column()
  lastName!: string;

  @Column({ unique: true })
  email!: string;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;

  @OneToMany(() => Order, (order) => order.user)
  orders!: Order[];
}