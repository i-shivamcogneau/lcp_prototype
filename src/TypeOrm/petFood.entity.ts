import { Entity, ObjectID, ObjectIdColumn, Column } from 'typeorm';

@Entity('PetFood')
export class PetFood {
  @ObjectIdColumn() id: ObjectID;
  @Column() Foodname: string;

  constructor(PetFood?: Partial<PetFood>) {
    Object.assign(this, PetFood);
  }
}