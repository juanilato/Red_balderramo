import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
// entidad del usuario a registrar
@Entity()
export class User {
  


  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ unique: true })
  email!: string;

  @Column()
  password!: string;
}
