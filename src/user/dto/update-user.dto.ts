import {
  IsString,
  IsNotEmpty,
  MaxLength,
  MinLength,
  IsOptional,
} from 'class-validator';

export class UpdateUserDto {
  @IsString({ message: 'O nome deve estar em um formato válido!' })
  @IsOptional()
  readonly name: string;

  @IsOptional()
  readonly email: string;

  @IsOptional()
  readonly password: string;

  @IsString({ message: 'O telefone deve estar em um formato válido!' })
  @IsOptional()
  readonly phone: string;

  @IsString({ message: 'O campo sobre deve estar em um formato válido!' })
  @IsOptional()
  readonly about: string;

  @IsString({ message: 'A cidade deve estar em um formato válido!' })
  @IsOptional()
  readonly city: string;

  @IsOptional()
  readonly image: string;
}
