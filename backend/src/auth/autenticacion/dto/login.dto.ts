import { Transform } from "class-transformer";
import { IsEmail, IsString, Length, MaxLength } from "class-validator";

export class LoginDto {

    @IsEmail()
    email: string;

    @Transform(({ value }) => value.trim())
    @IsString()
    @Length(4)
    @MaxLength(20)
    password: string;
}   