const express       = require('express');
const cors          = require('cors');

const app           = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


let score = { paris: 0, marseille: 0 };

setInterval(() => {
    if (Math.random() > 0.5) score.paris++;
    else score.marseille++;
}, 10000);

app.get('/score', (req, res) => {
    res.json(score);
});

app.listen(3000);