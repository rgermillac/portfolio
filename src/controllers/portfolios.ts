import { Request, Response } from "express"
import { getEntries, getEntriesId, saveProject } from "../services/portfolioServices"



export const portfoliosCtrl=(_req:Request, res:Response) => {
    let result = getEntries()
    res.json(result)
    //res.send('Fetching all entry portfolios')
}

export const projectsCtrl=(_req:Request, res:Response) => {
    let result = getEntries()
    res.json(result.projects)
}

export const projectsIdCtrl=(_req:Request, _res:Response) => {
    const result = getEntriesId(_req.params.id)

    _res.json(result)
}

export const saveProjectCtrl=(req:Request, res:Response) => {
    const project = req.body
    const result = saveProject(project)
    res.json(result);
}


//export const newProject=(_req: Request, _res:Response)=> {
    //const addProject = _req.body
//    console.log(_req.body)
//}