import { Conversation } from "@app/domain/contact-center/conversation";

export abstract class VoiceChatRepository {
    abstract find(): Promise<Conversation[]>;
    abstract save(): Promise<string>;
}