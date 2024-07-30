import { User } from '@app/domain/contact-center/user';
import { User as UserDocument } from '../entities/user.entity';

export class MongooseUserMapper {
  static toDomain(entity: UserDocument): User {
    const model = new User({
      id: entity._id.toString(),
      name: entity.name,
      type: entity.type,
      phoneNumber: entity.phoneNumber
    });
    return model;
  }

  static toMongoose(user: User) {
    return {
      name: user.name,
    }
  }
}