import {Router} from 'express'
import charityRoutes from './charityRoutes.js'
import donorRoutes from './donorRoutes.js'
import pledgesRoutes from './pledges.js'
import usersRoutes from './users.js'

const router = Router();

router.get("/", (req, res) => res.send("This is the charity api root!"));

router.use("/charity", charityRoutes);
router.use("/donor", donorRoutes)
router.use('/', pledgesRoutes)
router.use('/', usersRoutes)

export default router;
