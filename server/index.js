const express = require('express');

const app = express();
const port = process.env.PORT || 5000;


const landscape = require('./landscape.json');
const illustration = require('./illustration.json');
const portrait = require('./portrait.json');
const figure = require('./figure.json');


const categories = {
    landscape,
    illustration,
    portrait,
    figure
};

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/api/topic/:topic', (req, res) => {
    const topic = req.param('topic');

    console.log("topic; ", topic)
    if (topic === "illustration")
        return res.json(illustration);
    else if (topic === "figure")
        return res.json(figure);
    else if (topic === "portrait")
        return res.json(portrait);
    else if (topic === "landscape")
        return res.json(landscape);
    else
        return res.status(500).send('It is a wrong Path!!!');
});

app.get('/api/detail/:topic/:title', (req, res) => {
       const topic = req.params.topic;
       const title = req.params.title;
console.log("fetching ....")
       const category = categories[topic];

        const found = category.find(function(painting) {

        return painting.title === title ;
    });

        if(!found) {
            return res.status(500).send(`wrong topic: ${Object.keys(categories)}` );
        }

    res.json(found);
});


app.listen(port, () => console.log(`Listening on port ${port}`));


// res.send(req.param('topic'));

// app.get('/api/topic/:topic', (req, res) => {
//     res.send({ express: req.param("topic") });
// });
