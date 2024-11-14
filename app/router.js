import { Router } from "express";
import * as mainController from "./controllers/mainController.js";
import * as catalogueController from "./controllers/catalogueController.js";
import * as aproposController from "./controllers/aproposController.js";
import * as detailController from "./controllers/detailController.js";
import * as adminController from "./controllers/adminController.js";

export const router = Router();

router.get("/", mainController.renderHomePage);

router.get("/catalogue", catalogueController.renderCataloguePage);
router.get("/catalogue/coffees", catalogueController.renderAllCoffees);
router.get("/catalogue/category", catalogueController.searchByCategory);

router.get("/detail/:id", detailController.renderDetailPage);

router.get("/apropos", aproposController.renderAproposPage);

router.get("/admin/coffee/add", adminController.renderAddCoffeePage);
router.post("/admin/coffee/add", adminController.createNewCoffee);






