
import { ConversationRepository } from "@app/application/contact-center/ports/conversation.repository";
import { Conversation } from "@app/domain/contact-center/conversation";
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import mongoose, { Model } from "mongoose";
import { Conversation as ConversationMongoose } from "../entities/conversation.entity";

@Injectable()
export class MongooseConversationRepository implements ConversationRepository {
    constructor(
        @InjectModel(ConversationMongoose.name) private readonly userModel: Model<ConversationMongoose>,
    ) { }
    find(): Promise<Conversation[]> {
        throw new Error("Method not implemented.");
    }
    save(): Promise<string> {
        throw new Error("Method not implemented.");
    }

    
}
