import {Router} from 'express'
import * as controllers from '../controllers/pledges.js'

const router = Router()

router.get('/pledges', controllers.getPledges)
router.get('/pledges/:id', controllers.getPledge)
router.post('/pledges', controllers.createPledge)
router.put('/pledges/:id', controllers.updatePledge)
router.delete('/pledges/:id', controllers.deletePledge)

export default router


