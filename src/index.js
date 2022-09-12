const express = require('express')
const typeorm = require('typeorm')

const app = express()
const port = 4000

const dataSource = new typeorm.DataSource({
    type: "sqlite",
    database: './wildersdb.sqlite',
    synchronize: true
})

app.get("/", (req, res) => {
    res.send('Hello world, from Express !')
})

const start = async () => {
    try {
        await dataSource.initialize()   
    } catch(error) {
        console.log(error)
    } finally {
        console.log('DB initialized')
    }

    app.listen(port, () => {
        console.log(`Server running on port ${port} ✅`)
    })
}

start()