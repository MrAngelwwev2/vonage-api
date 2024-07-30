import { CreateUserUseCase } from '@app/application/contact-center/use-case/create-user';
import {
    Body,
    Controller,
    Get,
    Post,
} from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { GetUserUseCase } from '@app/application/contact-center/use-case/get-user';
import { ApiTags } from '@nestjs/swagger';

@Controller('/twilio')
@ApiTags('Twilio')
export class TwilioController {
    constructor(
        private createUserUseCase: CreateUserUseCase,
        private getUserUseCase: GetUserUseCase
    ) { }

    @Get('')
    getAll() {
        const response = this.getUserUseCase.execute({});
        return response;
    }

    @Post('')
    create(@Body() createUserDto: CreateUserDto) {
        const response = this.createUserUseCase.execute(createUserDto);
        return response;
    }
}