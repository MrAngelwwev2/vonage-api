import { Module } from '@nestjs/common';

import { CreateUserUseCase } from '@app/application/contact-center/use-case/create-user';
import { GetUserUseCase } from '@app/application/contact-center/use-case/get-user';
import { VoiceProviderModule } from '../voice-provider/voice-provider.module';
import { TwilioWebSocketGateway } from './gateways/twilio.gateway';
import { VonageWebSocketGateway } from './gateways/vonage.gateway';
import { UserController } from './controllers/user.controller';
import { VonageController } from './controllers/vonage.controller';
import { TwilioController } from './controllers/twilio.controller';

@Module({
  imports: [VoiceProviderModule],
  controllers: [UserController, VonageController, TwilioController],
  providers: [TwilioWebSocketGateway,VonageWebSocketGateway, CreateUserUseCase, GetUserUseCase],
  exports: [],
})
export class HttpModule { }
// In this case we will have two websockets paths in the same port but we can have only one using this code
//https://stackoverflow.com/questions/74879717/conditionally-instantiate-service-class-as-a-provider-in-nestjs
/*
providers: [
    {
      provide: "UserService",
      inject: [REQUEST, UserSuperAdminService, UserAdminService],
      useFactory: (request: Request, superAdminService: UserSuperAdminService, adminService: UserAdminService) => UserServiceFactory(request, superAdminService, adminService)
    }
...
]
*/ 