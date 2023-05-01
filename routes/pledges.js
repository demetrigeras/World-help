import {Router} from 'express'
import * as controllers from '../controllers/pledges.js'

const router = Router()

router.get('/pledges', controllers.getPledge)
router.get('/pledges/:id', controllers.getPledges)
router.post('/pledges', controllers.createPledge)
router.put('/pledges', controllers.updatePledge)
router.delete('/pledges', controllers.deletePledge)

export default router


