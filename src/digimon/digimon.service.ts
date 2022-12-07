import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Digimon } from './digimon.interface';
import { firstValueFrom, map, catchError, of } from 'rxjs';

@Injectable()
export class DigimonService {
  constructor(private readonly http: HttpService) {}

  findAll(): Promise<Digimon[]> {
    return firstValueFrom(
      this.http
        .get<Digimon[]>('https://digimon-api.vercel.app/api/digimon')
        .pipe(
          map((response) => response?.data),
          catchError((error: any) => {
            console.error(error.message);
            return of([] as Digimon[]);
          }),
        ),
    );
  }
}
