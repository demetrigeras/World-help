import { Router } from "express";
import * as controllers from "../controllers/donorcontroller.js"

const router = Router();

router.get("/", controllers.getDonors);
router.get("/:id", controllers.getDonor);
router.post("/", controllers.createDonor);
router.put("/:id", controllers.updateDonor);
router.delete("/:id", controllers.deleteDonor);

export default router;