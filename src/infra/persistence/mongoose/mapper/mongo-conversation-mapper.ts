import { Conversation } from '@app/domain/contact-center/conversation';
import {  ConversationDocument } from '../entities/conversation.entity';

export class MongooseConversationMapper {
  static toDomain(entity: ConversationDocument): Conversation {
    const model = new Conversation({
      id: entity._id.toString(),
      caller: entity.idCaller.toString(),
      agent: entity.idAgent.toString()

    });
    return model;
  }

  static toMongoose(conversation: Conversation) {
    return {
      agent: conversation.agent,
      caller: conversation.caller
    }
  }
}