// eslint-disable-next-line import/no-unresolved
import { serveFiles } from "swagger-ui-express";

import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const user = this.usersRepository.findById(user_id);

    if (!user) {
      throw new Error("user doesnot exists!");
    }

    return this.usersRepository.turnAdmin(user);
  }
}

export { TurnUserAdminUseCase };
