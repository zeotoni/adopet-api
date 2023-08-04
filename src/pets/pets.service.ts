import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { Pet } from './schemas/pet.schema';
import * as mongoose from 'mongoose';

@Injectable()
export class PetsService {
  constructor(
    @InjectModel(Pet.name)
    private petModel: mongoose.Model<Pet>,
  ) {}

  async findAll(): Promise<Pet[]> {
    const pets = this.petModel.find();
    return pets;
  }
}
