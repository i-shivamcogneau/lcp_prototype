import {
    IsNotEmpty,
    IsString
  } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class UserDTO {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({example: "werty"})
  username: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({example: "sdfg"})
  password: string;
}