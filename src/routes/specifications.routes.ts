import { Request, Response, Router } from "express";
import { CreateSpecificationController } from "../modules/cars/useCases/createSpecification/CreateSpecificationController";
import { ListSpecificationsController } from "../modules/cars/useCases/listSpecifications/ListSpecificationsController";


const specificationsRouter = Router();

const createSpecificationController = new CreateSpecificationController();
const listSpecificationController = new ListSpecificationsController();

specificationsRouter.post("/", createSpecificationController.handle);

specificationsRouter.get("/", listSpecificationController.handle);

export { specificationsRouter };