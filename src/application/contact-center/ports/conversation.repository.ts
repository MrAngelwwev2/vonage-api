import { Conversation } from "@app/domain/contact-center/conversation";

export abstract class ConversationRepository {
    abstract makeCall (agentPhoneNumber : string, callerPhoneNumber: string) :Promise<string>;
    abstract find(): Promise<Conversation[]>;
    abstract save(): Promise<string>;
}