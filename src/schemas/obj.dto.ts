import {
  IsObject,
  IsOptional,
  IsNotEmpty,
  IsString,
  IsArray
} from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class ObjDTO {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  ID: string;

  @IsArray()
  @ApiProperty({example: ["Add 1", "Add 2", "Update 3"]})
  APIS: [string];

  @IsArray()
  @ApiProperty({example: [{_id: 1, object:{a: 5, b: 10}}, {_id: 2, object:{a: 12, b: 18}}, {_id: 3, object:{a: 7, b: 14}}]})
  OBJECTS: [object];

  @IsArray()
  @ApiProperty({example: ["ADDITION 1 2","MULTIPLICATION 1 12"]})
  PROCESSES: [string];

  // @IsOptional()
  // @ApiProperty()
  // metadata?: Record<string, any>;
}