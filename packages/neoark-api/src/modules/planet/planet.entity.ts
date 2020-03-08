import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { IsDefined, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Planet {
  @ApiProperty()
  @IsOptional({ always: true })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar', { unique: true })
  name: string;

  @CreateDateColumn()
  createdAt?: Date;

  @UpdateDateColumn()
  updatedAt?: Date;
}
