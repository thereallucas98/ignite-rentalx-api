import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";
import { UsersRepository } from "../../repositories/implementations/UsersRepository";

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: {
    name: string;
    email: string;
  },
  token: string;
}

@injectable()
class AuthenticateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: UsersRepository
  ) {}

  async execute({ email, password }: IRequest): Promise<IResponse> {
    const user = await this.usersRepository.findByEmail(email);
    //
    if (!user) {
      throw new Error("Email or password incorrect.");
    }

    //
    const passwordMatch = await compare(password, user.password);

    if(!passwordMatch) {
      throw new Error("Email or password incorrect.");
    }

    const token = sign({}, "5ebe2294ecd0e0f08eab7690d2a6ee69", {
      subject: user.id,
      expiresIn: "1d",
    });

    const tokenResponse: IResponse = {
      token,
      user: {
        name: user.name,
        email: user.email,
      }
    }

    return tokenResponse;
  }
}

export { AuthenticateUserUseCase };