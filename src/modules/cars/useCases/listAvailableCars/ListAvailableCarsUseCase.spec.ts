import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";

import { ListAvailableCarsUseCase } from "./ListAvailableCarsUseCase";

let listAvailableCarsUse: ListAvailableCarsUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("List Cars", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    listAvailableCarsUse = new ListAvailableCarsUseCase(carsRepositoryInMemory);
  });

  it("should be able to list all available cars", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car 1",
      description: "Car Description",
      daily_rate: 110,
      license_plate: "AFD-1212",
      fine_amount: 50,
      brand: "Car Brand A1",
      category_id: "category_id",
    });

    const cars = await listAvailableCarsUse.execute({});

    expect(cars).toEqual([car]);
  });

  it("should be able to list all available cars by brand", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car 1",
      description: "Car Description",
      daily_rate: 110,
      license_plate: "AFD-1212",
      fine_amount: 50,
      brand: "Car Brand",
      category_id: "category_id",
    });

    const cars = await listAvailableCarsUse.execute({
      brand: "Car Brand",
    });

    expect(cars).toEqual([car]);
  });

  it("should be able to list all available cars by name", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car 3",
      description: "Car Description",
      daily_rate: 110,
      license_plate: "AFD-1214",
      fine_amount: 50,
      brand: "Car Brand",
      category_id: "category_id",
    });

    const cars = await listAvailableCarsUse.execute({
      name: "Car 3",
    });

    expect(cars).toEqual([car]);
  });

  it("should be able to list all available cars by category", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car 4",
      description: "Car Description",
      daily_rate: 110,
      license_plate: "AFD-1216",
      fine_amount: 50,
      brand: "Car Brand",
      category_id: "category_id_ref",
    });

    const cars = await listAvailableCarsUse.execute({
      name: "Car 3",
    });

    expect(cars).toEqual([car]);
  });
});
