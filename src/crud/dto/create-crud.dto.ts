import { IsEmail, IsNotEmpty, IsNumber } from "class-validator";

export class CreateCrudDto {
  @IsNotEmpty()
  name: string;
  
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password:string;

  @IsNotEmpty()
  phonenumber: string;
}
