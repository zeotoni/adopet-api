import { Controller, Get } from '@nestjs/common';
import { PetsService } from './pets.service';
import { Pet } from './schemas/pet.schema';

@Controller('pets')
export class PetsController {
  constructor(private petsService: PetsService) {}

  @Get()
  async getPets(): Promise<Pet[]> {
    return this.petsService.findAll();
  }
}
