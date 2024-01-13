import { Column, Entity, DeleteDateColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable: false})
  username: string;

  @Column({ unique: true, nullable: false})
  email: string;

  @Column({nullable: false})
  password: string;

  @Column({default: 'usuario'})
  role: string;

  @DeleteDateColumn()
  deleteAt: Date;
}
