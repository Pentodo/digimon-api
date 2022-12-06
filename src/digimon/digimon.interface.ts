import { ApiProperty } from '@nestjs/swagger';

export class DigimonModel {
  @ApiProperty({ type: String })
  name: string;
  @ApiProperty({ type: String })
  img: string;
  @ApiProperty({ type: String })
  level: string;
}
