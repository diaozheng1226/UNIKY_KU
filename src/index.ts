import express, { response } from 'express'

const app = express()

const port = process.env.PORT || 8989

app.get('/', (request, response) => {
    response.send('<h1>Hello World!</h1>')
})

app.get('/login', (request, response) => {
    response.send('<h1>Hello login!</h1>')
})

app.listen(port, () => {
    console.log(`This server is running on port http://localhost:${port}`)
})