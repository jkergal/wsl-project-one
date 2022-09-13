const express = require('express')
const typeorm = require('typeorm')
const Wilder = require('./models/Wilder')

const app = express()
const PORT = 4000

const dataSource = new typeorm.DataSource({
    type: "sqlite",
    database: './wildersdb.sqlite',
    synchronize: true,
    entities: [Wilder],
    logging: ["query", "error"],
});

app.get("/", (req, res) => {
    res.send('Hello world, from Express !')
});

const start = async () => {
    await dataSource.initialize();
    await dataSource.getRepository(Wilder).clear();
    await dataSource.getRepository(Wilder).save({ name: 'Jean Wilder' })

    app.listen(PORT, () => {
        console.log(`Server running on PORT ${PORT} ✅`)
    })
}

start()