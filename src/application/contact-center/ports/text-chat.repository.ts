export abstract class TextChatRepository {
    abstract find(): Promise<void>;
    abstract save(): Promise<string>;
}