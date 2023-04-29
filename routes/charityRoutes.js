import { Router } from "express";
import * as controllers from "../controllers/charitycontroller.js"

const router = Router();

router.get("/", controllers.getCharities);
router.get("/:id", controllers.getCharity);
router.post("/", controllers.createCharity);
router.put("/:id", controllers.updateCharity);
router.delete("/:id", controllers.deleteCharity);

export default router;