import { User } from '@app/domain/contact-center/user';
import { Injectable } from '@nestjs/common';
import { UserRepository } from '../ports/user.repository';

interface CreateUserUseCaseCommand {
  name: string,
  type: string,
  phoneNumber: string
}

@Injectable()
export class CreateUserUseCase {
  constructor(private userRepository: UserRepository) { }

  async execute({
    name,
    type,
    phoneNumber
  }: CreateUserUseCaseCommand): Promise<any> {

    const user = new User({
      name,
      type,
      phoneNumber,
    })

    const response = await this.userRepository.create(user)

    return response;
  }
}