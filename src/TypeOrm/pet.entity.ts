import { Entity, ObjectID, ObjectIdColumn, Column } from 'typeorm';
import { PetFood } from './petFood.entity';

@Entity('pets')
export class Pet {
  @ObjectIdColumn() id: ObjectID;
  @Column() name: string;
  @Column() animalType: string;
  @Column() pictureUrl?: string;
  @Column() birthDate?: Date;
  @Column() preferedFood?: PetFood[];
  constructor(pet?: Partial<Pet>) {
    Object.assign(this, pet);
  }
}