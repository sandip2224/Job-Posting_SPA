const express = require('express')
const path = require('path')
const fs = require('fs')

const app = express()

app.get('/', (req, res) => {
    const filePath = path.resolve(__dirname, './build', 'index.html')
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            return console.log(err)
        }
        data = data.replace(/\$OG_TITLE/g, 'Home Page | Reczee')
        data = data.replace(/\$OG_DESCRIPTION/g, 'This is the home page for Reczee job posting website!')
        result = data.replace(/\$OG_IMAGE/g, 'https://i.imgur.com/V7irMl8.png')
        res.send(result)
    })
})

app.get('/robinhood-apply', function (req, res) {
    console.log("Robin")
    const filePath = path.resolve(__dirname, './build', 'index.html')

    fs.readFile(filePath, 'utf8', function (err, data) {
        if (err) {
            return console.log(err)
        }

        data = data.replace(/\$OG_TITLE/g, 'Full Stack Developer Intern | RobinHood')
        data = data.replace(/\$OG_DESCRIPTION/g, 'RobinHood is actively hiring for full stack developer interns')
        result = data.replace(/\$OG_IMAGE/g, 'https://i.imgur.com/V7irMl8.png')
        res.send(result)
    })
})

app.use(express.static(path.resolve(__dirname, './build')))

app.get('*', (req, res) => {
    const filePath = path.resolve(__dirname, './build', 'index.html')
    res.sendFile(filePath)
})

app.listen(process.env.PORT || 5000, console.log(`Listening on port ${process.env.PORT || 5000}`))