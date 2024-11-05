import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
// entidad del usuario a registrar
@Entity()
export class User {
  


  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ unique: true })
  usuario!: string;

  @Column()
  rol!: string;

  @Column()
  password!: string;
}
