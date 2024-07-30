
import { UserRepository } from "@app/application/contact-center/ports/user.repository";
import { User } from "@app/domain/contact-center/user";
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import  { Model } from "mongoose";
import { User as UserMongoose } from "../entities/user.entity";
import { MongooseUserMapper } from "../mapper/mongo-user-mapper";

@Injectable()
export class MongooseUserRepository implements UserRepository {
    constructor(
        @InjectModel(UserMongoose.name) private readonly userModel: Model<UserMongoose>,
    ) { }
    async findCaller(): Promise<User[]> {
        const findQuery = await this.userModel
        .find({ type: 'caller'});

        return findQuery.map((item) => MongooseUserMapper.toDomain(item));   
    }
    async findAgents(): Promise<User[]> {
        const findQuery = await this.userModel
        .find({ type: 'agent'});

        return findQuery.map((item) => MongooseUserMapper.toDomain(item));   
    }

    async create(user: User): Promise<User> {
        const data = MongooseUserMapper.toMongoose(user);
        const entity = new this.userModel({ ...data })
        await entity.save();

        return MongooseUserMapper.toDomain(entity);
    }

}
