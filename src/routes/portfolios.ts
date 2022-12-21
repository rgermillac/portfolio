import express from 'express'
import { portfoliosCtrl, projectsCtrl, projectsIdCtrl } from '../controllers/portfolios'
//router.use(express.json())

const router = express.Router()

router.get('/', portfoliosCtrl)

router.get('/projects',projectsCtrl)

router.get('/projects/:id', projectsIdCtrl)



export default router