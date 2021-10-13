import { Request, Response, Router } from "express";

import { createSpecificationController } from "../modules/cars/useCases/createSpecification";
import { listCategoriesController } from "../modules/cars/useCases/listSpecifications";

const specificationsRouter = Router();

specificationsRouter.post("/", (request: Request, response: Response) => {
  return createSpecificationController.handle(request, response);
});

specificationsRouter.get("/", (request: Request, response: Response) => {
  return listCategoriesController.handle(request, response);
});

export { specificationsRouter };