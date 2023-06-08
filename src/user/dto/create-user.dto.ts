import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsString({ message: 'O nome deve estar em um formato válido!' })
  @MinLength(10, { message: 'O nome precisa ter no mínimo 10 caracteres!' })
  @IsNotEmpty({ message: 'O campo nome não pode estar vazio!' })
  readonly name: string;

  @IsEmail(undefined, {
    message: 'O campo email precisa estar em um formato válido!',
  })
  @IsNotEmpty({ message: 'O campo email não pode estar vazio!' })
  readonly email: string;

  @MinLength(8, { message: 'A senha deve ter no mínimo 8 caracteres!' })
  @MaxLength(16, { message: 'A senha deve ter no mínimo 16 caracteres!' })
  @IsNotEmpty({ message: 'O campo senha não pode estar vazio!' })
  readonly password: string;

  readonly phone: string;
  readonly about: string;
  readonly city: string;
  readonly image: string;
}
