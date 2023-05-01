import {Router} from 'express'
import charityRoutes from './charityRoutes.js'
import donorRoutes from './donorRoutes.js'

const router = Router();

router.get("/", (req, res) => res.send("This is the charity api root!"));

router.use("/charity", charityRoutes);
router.use("/donor", donorRoutes)

export default router;
