import { CreateUserUseCase } from '@app/application/contact-center/use-case/create-user';
import {
    Body,
    Controller,
    Get,
    Post,
    Res,
    HttpStatus,
    Req
} from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { GetUserUseCase } from '@app/application/contact-center/use-case/get-user';
import { ApiTags } from '@nestjs/swagger';
import { Response, Request } from 'express';
import { CreateCallDto } from '../dto/create-call.dto';


@Controller('/vonage')
@ApiTags('Vonage')
export class VonageController {
    constructor(
        private createUserUseCase: CreateUserUseCase,
        private getUserUseCase: GetUserUseCase
    ) { }

    @Get('/answer')
    getAnswerCall(@Req() req: Request, @Res() res: Response) {
        const nccoResponse = [
            {
              action: 'connect',
              from: 'Vonage',
              endpoint: [
                {
                  type: 'websocket',
                  uri: `wss://${req.hostname}/socket/clientLeg?conversationUUID=${req.query.conversation_uuid}`,
                  'content-type': 'audio/l16;rate=16000',
                },
              ],
            },
          ];
        return res.status(HttpStatus.OK).json(nccoResponse)
    }

    @Post('/events')
    finishCall(@Req() req: Request, @Res() res: Response) {
        if (req.body.status === 'completed' && req.body.direction === 'inbound') {
            // delete the websocket connection
          }
        return res.status(HttpStatus.OK);
    }

    @Post('/outbound-call')
    createOutboundCall(@Body() call: CreateCallDto, @Res() res: Response) {
        
        return res.status(HttpStatus.OK);
    }


}