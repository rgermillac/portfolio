import { Request, Response } from "express"
import { getEntries, getEntriesId } from "../services/portfolioServices"



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

