import { SpecificationsRepository } from "../../repositories/implementations/SpecificationsRepository";
import { ListCategoriesController } from "./ListSpecificationsController";
import { ListSpecificationsUseCase } from "./ListSpecificationsUseCase";

const specificationsRepository = SpecificationsRepository.getInstance();
const listSpecificationsUseCase = new ListSpecificationsUseCase(specificationsRepository);

const listCategoriesController = new ListCategoriesController(listSpecificationsUseCase);

export { listCategoriesController };