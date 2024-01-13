import { Transform } from "class-transformer";
import { IsEmail, IsNotEmpty, IsString, MaxLength, Length } from "class-validator";
export class RegisterDto {
    @Transform(({ value }) => value.trim())
    @IsNotEmpty()
    @IsString()
    @Length(4)
    @MaxLength(20)
    username: string;

    @IsEmail()
    email: string;

    @Transform(({ value }) => value.trim())
    @IsNotEmpty()
    @IsString()
    @Length(4)
    @MaxLength(20)
    password: string;

    role: string;
}