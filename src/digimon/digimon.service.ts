import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom, map, catchError, of } from 'rxjs';

import { Digimon } from './digimon.interface';

@Injectable()
export class DigimonService {
  constructor(private readonly http: HttpService) {}

  findAll(): Promise<Digimon[]> {
    return firstValueFrom(
      this.http
        .get<Digimon[]>('https://digimon-api.vercel.app/api/digimon')
        .pipe(
          map((response) => response?.data),
          map((digimons) => {
            digimons.forEach((digimon) => {
              if (digimon.level === 'Training') {
                digimon.level = 'In Training';
              }
            });

            return digimons;
          }),
          catchError((error: any) => {
            console.error(error.message);
            return of([] as Digimon[]);
          }),
        ),
    );
  }
}
