import { User } from "@app/domain/contact-center/user";

export abstract class UserRepository {
    abstract findCaller(): Promise<User[]>;
    abstract findAgents(): Promise<User[]>;
    abstract create(data: User): Promise<User>;
}