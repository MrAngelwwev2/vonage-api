import { ApiProperty } from '@nestjs/swagger';
import {
    IsNotEmpty,
    IsString,
    IsMobilePhone
} from 'class-validator';

export class CreateCallDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @IsMobilePhone()
    phoneNumber: string;
}