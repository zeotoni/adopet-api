import { IsEmail, IsNotEmpty, MaxLength, MinLength } from 'class-validator';

export class LoginDto {
  @IsEmail(undefined, {
    message: 'O campo email precisa estar em um formato válido!',
  })
  @IsNotEmpty({ message: 'O campo email não pode estar vazio!' })
  readonly email: string;

  @MinLength(8, { message: 'A senha deve ter no mínimo 8 caracteres!' })
  @MaxLength(16, { message: 'A senha deve ter no mínimo 16 caracteres!' })
  @IsNotEmpty({ message: 'O campo senha não pode estar vazio!' })
  readonly password: string;
}
