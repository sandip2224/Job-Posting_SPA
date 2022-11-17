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
    const filePath = path.resolve(__dirname, './build', 'index.html')

    fs.readFile(filePath, 'utf8', function (err, data) {
        if (err) {
            return console.log(err)
        }

        data = data.replace(/\$OG_TITLE/g, 'Full Stack Developer Intern | RobinHood')
        data = data.replace(/\$OG_DESCRIPTION/g, 'RobinHood is actively hiring for full stack developer interns')
        data = data.replace(/\$OG_ORG/g, 'RobinHood')
        data = data.replace(/\$OG_URL/g, 'https://robinhood.com')
        data = data.replace(/\$OG_EMPLOYMENT/g, 'INTERNSHIP')
        data = data.replace(/\$OG_ABOUTCOMPANY/g, `<p>The reliability of our platform takes precedence over all else, so that we can be there for our customers when they need us the most. We relentlessly protect our customers’ security and privacy, and we only share with our counterparties what they need to fulfill our customers’ financial needs, nothing more. We build safeguards and provide education so that our customers are in the best position to succeed. We have high quality timely customer support, and when things aren’t right, we fix them. We work closely with regulators and lawmakers to protect our customers and the broader financial system.</p><p>We never stop asking how we can make our product better, and we never settle for ‘good enough’. We listen to our colleagues, and we start from a place of believing they are capable and well-intentioned. We delight our customers and take pride in our work. Otherwise, why even be here?</p>`)
        data = data.replace(/\$OG_DATE/g, new Date().toISOString())
        data = data.replace(/\$OG_TYPE/g, 'JobPosting')
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