import { Request, Response, Router } from "express";
import { CreateSpecificationController } from "../modules/cars/useCases/createSpecification/CreateSpecificationController";

import { listCategoriesController } from "../modules/cars/useCases/listSpecifications";

const specificationsRouter = Router();

const createSpecificationController = new CreateSpecificationController();

specificationsRouter.post("/", createSpecificationController.handle);

specificationsRouter.get("/", (request: Request, response: Response) => {
  return listCategoriesController.handle(request, response);
});

export { specificationsRouter };