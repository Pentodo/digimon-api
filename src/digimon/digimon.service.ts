import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Digimon } from './digimon.interface';
import { DigimonModel } from './digimon.interface';

@Injectable()
export class DigimonService {
  constructor(private readonly http: HttpService) {}

  findAll(): Promise<Digimon[]> {
    return firstValueFrom(
      this.http
        .get<Digimon[]>('https://digimon-api.vercel.app/api/digimon')
    );
  }
}
