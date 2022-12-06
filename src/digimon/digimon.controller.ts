import { Controller, Get } from '@nestjs/common';
import { DigimonService } from './digimon.service';
import { DigimonModel } from './digimon.interface';

@Controller()
export class DigimonController {
  constructor(private readonly digimonsService: DigimonService) {}

  @Get(['', '/digimon'])
  findAll(): Promise<DigimonModel[]> {
    return this.digimonsService.findAll();
  }
}
