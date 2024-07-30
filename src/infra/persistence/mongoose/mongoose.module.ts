import { ConversationRepository } from '@app/application/contact-center/ports/conversation.repository';
import { UserRepository } from '@app/application/contact-center/ports/user.repository';
import { EnvModule, EnvService } from '@app/infra/env';
import { Module } from '@nestjs/common';
import { MongooseModule as MongooseModuleLib } from '@nestjs/mongoose';
import { Conversation, ConversationSchema } from './entities/conversation.entity';
import { User, UserSchema } from './entities/user.entity';

// Non exported
import { MongooseConversationRepository } from './repositories/mongo-conversation.repository';
import { MongooseUserRepository } from './repositories/mongo-user.repository';

@Module({
    imports: [
        MongooseModuleLib.forRootAsync({
            imports: [EnvModule],
            useFactory: (envService: EnvService) => ({
                uri: envService.get('MONGODB_URL'),
            }),
            inject: [EnvService],
        }),
        MongooseModuleLib.forFeature([
            { name: User.name, schema: UserSchema },
            { name: Conversation.name, schema: ConversationSchema }
        ]),
    ],
    providers: [
        {
            provide: ConversationRepository,
            useClass: MongooseConversationRepository
        },
        {
            provide: UserRepository,
            useClass: MongooseUserRepository
        },
    ],
    exports: [ConversationRepository, UserRepository],
})
export class MongooseModule { }