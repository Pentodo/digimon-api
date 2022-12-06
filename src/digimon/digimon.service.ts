import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom, map } from 'rxjs';
import { DigimonModel } from './digimon.interface';

@Injectable()
export class DigimonService {
  constructor(private readonly httpService: HttpService) {}

  findAll(): Promise<DigimonModel[]> {
    return firstValueFrom(
      this.httpService
        .get<DigimonModel[]>('https://digimon-api.vercel.app/api/digimon')
        .pipe(map((response) => response?.data)),
    );
  }
}
