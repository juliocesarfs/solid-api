import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const user = this.usersRepository.findById(user_id);

    if (!user) {
      throw new Error("not authenticated!");
    } else if (!user.admin) {
      throw new Error("action restrict, only for admins!");
    }

    return this.usersRepository.list();
  }
}

export { ListAllUsersUseCase };
