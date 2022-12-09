import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';

import { DigimonController } from './digimon.controller';
import { DigimonService } from './digimon.service';

@Module({
  imports: [HttpModule],
  controllers: [DigimonController],
  providers: [DigimonService],
})
export class DigimonModule {}
