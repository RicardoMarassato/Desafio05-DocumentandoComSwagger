import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) { }

  execute({ user_id }: IRequest): User[] {
    // Complete aqui
    const userID = this.usersRepository.findById(user_id);

    if (!userID) {
      throw new Error("User doesn't exists!");
    }

    if(userID.admin != true){
      throw new Error("User is not admin!");
    }

    const showAll = this.usersRepository.list();

    return showAll;
  }
}

export { ListAllUsersUseCase };
