import express from 'express'
import { saveProjectCtrl, portfoliosCtrl, projectsCtrl, projectsIdCtrl } from '../controllers/portfolios'
//import { newProject } from '../services/portfolioServices'
//router.use(express.json())

const router = express.Router()

router.get('/', portfoliosCtrl)

router.get('/projects',projectsCtrl)

router.get('/projects/:id', projectsIdCtrl)

router.post('/projects', saveProjectCtrl)

export default router