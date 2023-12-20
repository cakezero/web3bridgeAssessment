const express = require('express')

const app = express()
app.use(express.json())
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('./views/index.ejs');
})

app.post('/question', (req, res) => {
    let correct = 0
    let failed = 0
    const data = req.body
    if (data.q1 == 4) {
        correct += 1
    } else {
        failed += 1
    }
    if (data.q2 == 4) {
        correct += 1
    } else {
        failed += 1
    }
    if (data.q3 == 2) {
        correct += 1
    } else {
        failed += 1
    }
    if (data.q4 == 7) {
        correct += 1
    } else {
        failed += 1
    }
    res.status(200).json({ correct, failed })
})

app.listen(3000, console.log('connected to port 3000'))
