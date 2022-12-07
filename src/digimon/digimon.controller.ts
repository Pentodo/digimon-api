import { Controller, Get } from '@nestjs/common';
import { DigimonService } from './digimon.service';
import { Digimon } from './digimon.interface';

@Controller()
export class DigimonController {
  constructor(private readonly digimonsService: DigimonService) {}

  @Get(['', '/digimons'])
  findAll(): Promise<Digimon[]> {
    return this.digimonsService.findAll();
  }
}
