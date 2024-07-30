import { Injectable } from '@nestjs/common';
import { UserRepository } from '../ports/user.repository';

interface GetAgentsUseCaseCommand { }

@Injectable()
export class GetUserUseCase {
  constructor(private userRepository: UserRepository) { }

  async execute({ }: GetAgentsUseCaseCommand): Promise<any> {
    const response = await this.userRepository.findAgents()

    return response;
  }
}