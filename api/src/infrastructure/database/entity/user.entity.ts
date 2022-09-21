import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class User {
  @PrimaryGeneratedColumn('uuid')
  public id!: string;

  @Column({ type: 'varchar', length: 100, unique: true })
  public name!: string;

  @Column({ type: 'varchar', length: 100, unique: true })
  public email!: string;
}
