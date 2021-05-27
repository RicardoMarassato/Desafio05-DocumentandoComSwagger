import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ShowUserProfileUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    // Complete aqui
    const userID = this.usersRepository.findById(user_id);

    if(!userID){
      throw new Error ("User doesn't exists!");
    }

    return userID;
    
  }
}

export { ShowUserProfileUseCase };
