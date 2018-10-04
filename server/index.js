const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;

// work with the file system on your computer.
const fs = require('fs');
//

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

app.use(bodyParser.json());
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



app.post('/api/detail/:topic/:title', (req, res) => {

   // fs.writeFileSync('./server/review.json', JSON.stringify(req.body, null, 4));
    // (writeFileSync) -> function writes data to a file in a synchronous manner.

    const recievedCategory = req.body.category.toLowerCase();
    const recievedTitle = req.body.title.toLowerCase();
    const recievedText = req.body.text.toLowerCase();
    const recievedUsername = req.body.username.toLowerCase();
    const rawFileData = fs.readFileSync("./server/review.json","utf8");
    // const fileData = JSON.parse();
    let fileData = null;
    if (rawFileData.length > 0 ) {
        fileData = JSON.parse(rawFileData);
    }
    console.log('file!! ', typeof rawFileData, rawFileData.length)

    if (fileData != null) {
    console.log("cat and title",recievedCategory,recievedTitle);
    // if both category and title exist
    if (( fileData.hasOwnProperty(recievedCategory) ) && ( fileData[recievedCategory].hasOwnProperty(recievedTitle) )) {
        fileData[recievedCategory][recievedTitle].push({ "name": recievedUsername, "review": recievedText });
        fs.writeFileSync('./server/review.json', JSON.stringify(fileData, null, 4));
    }
    // only if category exist
    else if (fileData.hasOwnProperty(recievedCategory)) {
         fileData[recievedCategory] = Object.assign(fileData[recievedCategory], {
                [recievedTitle]: [{
                    name: recievedUsername,
                    review: recievedText
                }]
        })


        fs.writeFileSync('./server/review.json', JSON.stringify(fileData, null, 4));
    }
    // if category and tile does not exist
    else
    {
        //"object.assign" uses for adding to one object another object,It will return the target object.
        const newFileContent = Object.assign(fileData, {
            [recievedCategory]: {
                [recievedTitle]: [{
                    name: recievedUsername,
                    review: recievedText
                }]
            }
        })
        fs.writeFileSync('./server/review.json', JSON.stringify(newFileContent, null, 4));
    }
    // when the file is empty(only first time)
    }else{
        const newFileContent = {
            [recievedCategory]: {
                [recievedTitle]: [{
                    name: recievedUsername,
                    review: recievedText
                }]
            }
        }
        fs.writeFileSync('./server/review.json', JSON.stringify(newFileContent, null, 4));
    }
    res.json('Review was saved');
})



app.listen(port, () => console.log(`Listening on port ${port}`));


// res.send(req.param('topic'));

// app.get('/api/topic/:topic', (req, res) => {
//     res.send({ express: req.param("topic") });
// });
