import express from 'express'
import cors from 'cors'


import portfolioRouter from './routes/portfolios'

const app = express()
app.use(cors())
app.use(express.json())

const PORT = 3000


app.use('/api/portfolios', portfolioRouter)

/*app.post("/",(_req,_res)=>{
    fields = _req.body
    console.log(fields)
    fields.push
})*/

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
    
})