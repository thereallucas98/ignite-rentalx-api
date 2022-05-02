import { getRepository, Repository } from "typeorm";

import { ICreateCarDTO } from "@modules/cars/dtos/ICreateCarDTO";
import { ICarsRepository } from "@modules/cars/repositories/ICarsRepository";

import { Car } from "../entities/Car";

class CarsRepository implements ICarsRepository {
  private repository: Repository<Car>;

  constructor() {
    this.repository = getRepository(Car);
  }

  async create({
    name,
    description,
    daily_rate,
    fine_amount,
    license_plate,
    category_id,
    brand,
  }: ICreateCarDTO): Promise<Car> {
    const car = this.repository.create({
      name,
      description,
      daily_rate,
      fine_amount,
      license_plate,
      category_id,
      brand,
    });

    await this.repository.save(car);

    return car;
  }

  async findByLicensePlante(license_plate: string): Promise<Car> {
    const car = await this.repository.findOne({ license_plate });

    return car;
  }
}

export { CarsRepository };
