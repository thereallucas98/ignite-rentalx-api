import { getRepository, Repository } from 'typeorm';
import { Specification } from '../../entities/Specification';
import {
  ICreateSpecificationDTO,
  ISpecificationsRepository,
} from '../ISpecificationsRepository';

class SpecificationsRepository implements ISpecificationsRepository {
  // private specifications: Specification[];

  // private static INSTANCE: SpecificationsRepository;
  private repository: Repository<Specification>


  constructor() {
    this.repository = getRepository(Specification);
  }

  // public static getInstance(): SpecificationsRepository {
  //   if (!SpecificationsRepository.INSTANCE) {
  //     SpecificationsRepository.INSTANCE = new SpecificationsRepository();
  //   }

  //   return SpecificationsRepository.INSTANCE;
  // }

  async create({ name, description }: ICreateSpecificationDTO): Promise<void> {
    const specification = this.repository.create({ name, description });

    await this.repository.save(specification);
  }

  async findByName(name: string): Promise<Specification> {
    const specification = this.repository.findOne({
      name,
    });

    return specification;
  }

  async list(): Promise<Specification[]> {
    return await this.repository.find();
  }
}

export { SpecificationsRepository };
