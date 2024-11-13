import { Router } from "express";
import * as mainController from "./controllers/mainController.js";
import * as catalogueController from "./controllers/catalogueController.js";
import * as aproposController from "./controllers/aproposController.js";
import * as detailController from "./controllers/detailController.js";

export const router = Router();

router.get("/", mainController.renderHomePage);
router.get("/catalogue", catalogueController.renderCataloguePage);
router.get("/catalogue/coffees", catalogueController.renderAllCoffees);
router.get("/detail/:id", detailController.renderDetailPage);
router.get("/apropos", aproposController.renderAproposPage);






