const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;

// work with the file system on your computer.
const fs = require('fs');
const mongoose = require('mongoose');
const connection = mongoose.connect('mongodb://localhost/art');


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
app.use(function (req, res, next) {
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
    const category = categories[ topic ];

    const found = category.find(function (painting) {

        return painting.title === title;
    });

    if (!found) {
        return res.status(500).send(`wrong topic: ${Object.keys(categories)}`);
    }

    res.json(found);
});


//for fetching the gallery shows

app.get('/api/galleries', (req, res) => {
    if (fs.existsSync('./server/gallery.json')) {
        return res.json(require('./gallery'));
    }
    else {
        return res.status(500).send('No Gallery at the moment exists');
    }
});


app.get('/api/galleries/:title', (req, res) => {

    console.log("fetching the gallery details for one photo", req.params.title);
    const title = req.params.title;

    const galleriesList = require('./gallery');

    const found = galleriesList.find(function (element) {

        return element.title === title;
    });

    if (!found) {
        console.log("there is no found");
        return res.status(500).send(`wrong topic: ${Object.keys(categories)}`);
    }

    res.json(found);

});

////for fetching the artist details

app.get('/api/artists/:name', (req, res) => {

    console.log("inside artist fetching", req.params.name);
    const name = req.params.name;
    console.log("artist name from request", name);
    const fullnameArray = name.split(' ');

    if (fullnameArray.includes("fiorda")) {

        console.log("artist is fiorda");
        return res.json(require('./artists/fiorda'));

    } else if (fullnameArray.includes("london")) {

        console.log("artist is london");
        return res.json(require('./artists/london'));

    } else if (fullnameArray.includes("robert")) {

        console.log("artist is robert");

        return res.json(require('./artists/robert'));

    } else if (fullnameArray.includes("slonem")) {

        console.log("artist is slonem");
        return res.json(require('./artists/slonem'));

    }
    console.log(fullnameArray);
    return {};

});


// for showing reviews

app.get('/api/reviews/:topic/:title', (req, res) => {
    const topic = req.params.topic;
    const title = req.params.title;
    console.log("fetching reviews ....")

    function getReviews(topic, title) {

        if (fs.existsSync(`./server/reviews/${topic}/${title}.json`)) {
            return require(`./reviews/${topic}/${title}.json`);
        }
        else {
            return [];
        }
    }

    const reviews = getReviews(topic, title);
    console.log("hier///", reviews)
    res.json(reviews);
});


app.post('/api/savereview', (req, res) => {

    const recievedCategory = req.body.category.toLowerCase();
    const recievedTitle = req.body.title.toLowerCase();
    const recievedText = req.body.text.toLowerCase();
    const recievedUsername = req.body.username.toLowerCase();
    const fileData = makeNewDirectory(recievedCategory, recievedTitle);

    if (fileData != null) {
        saveReview(recievedCategory, recievedTitle, recievedUsername, recievedText, fileData);
    } else {   // when the file is empty(only first time)
        saveFirstReview(recievedCategory, recievedTitle, recievedUsername, recievedText);
    }
    res.json('Review was saved');
})
//inserting for MongoDB
app.get("/testDB", (req, res) => {
    const Schema = mongoose.Schema;
    const ObjectId = Schema.ObjectId;
    const painters = new Schema({
        name: String
    });

    //const painter = mongoose.model('painters', painters).find({ name: "David" });
    console.log(mongoose.model('painters', painters).find({ },  function (err, docs) {
         docs.forEach((doc) => console.log(doc))
    }));


//console.log(painter)

    res.json({ a: "b" })
})

function saveFirstReview(recievedCategory, recievedTitle, recievedUsername, recievedText) {
    const newFileContent = [ {
        name: recievedUsername,
        review: recievedText
    } ]
    fs.writeFileSync(`./server/reviews/${recievedCategory}/${recievedTitle}.json`, JSON.stringify(newFileContent, null, 4));
}

function saveReview(recievedCategory, recievedTitle, recievedUsername, recievedText, fileData) {

    fileData.push({ "name": recievedUsername, "review": recievedText });
    fs.writeFileSync(`./server/reviews/${recievedCategory}/${recievedTitle}.json`, JSON.stringify(fileData, null, 4));
}


function makeNewDirectory(recievedCategory, recievedTitle) {

    if (( !fs.existsSync(`./server/reviews/${recievedCategory}`) ) && ( !fs.existsSync(`./server/reviews/${recievedCategory}/${recievedTitle}.json`) )) {
        fs.mkdirSync(`./server/reviews/${recievedCategory}`);
        return null
    }
    else if (fs.existsSync(`./server/reviews/${recievedCategory}/${recievedTitle}.json`)) {
        return require(`./reviews/${recievedCategory}/${recievedTitle}.json`)
    }
    else if (( fs.existsSync(`./server/reviews/${recievedCategory}`) ) && ( !fs.existsSync(`./server/reviews/${recievedCategory}/${recievedTitle}.json`) )) {
        return null
    }
}


app.listen(port, () => console.log(`Listening on port ${port}`));


//start totaly fine post data
//
// app.post('/api/detail/:topic/:title', (req, res) => {
//
//    // fs.writeFileSync('./server/review.json', JSON.stringify(req.body, null, 4));
//     // (writeFileSync) -> function writes data to a file in a synchronous manner.
//
//     const recievedCategory = req.body.category.toLowerCase();
//     const recievedTitle = req.body.title.toLowerCase();
//     const recievedText = req.body.text.toLowerCase();
//     const recievedUsername = req.body.username.toLowerCase();
//     const rawFileData = fs.readFileSync("./server/review.json","utf8");
//     // const fileData = JSON.parse();
//     let fileData = null;
//     if (rawFileData.length > 0 ) {
//         fileData = JSON.parse(rawFileData);
//     }
//     console.log('file!! ', typeof rawFileData, rawFileData.length)
//
//     if (fileData != null) {
//     console.log("cat and title",recievedCategory,recievedTitle);
//     // if both category and title exist
//     if (( fileData.hasOwnProperty(recievedCategory) ) && ( fileData[recievedCategory].hasOwnProperty(recievedTitle) )) {
//         fileData[recievedCategory][recievedTitle].push({ "name": recievedUsername, "review": recievedText });
//         fs.writeFileSync('./server/review.json', JSON.stringify(fileData, null, 4));
//     }
//     // only if category exist
//     else if (fileData.hasOwnProperty(recievedCategory)) {
//          fileData[recievedCategory] = Object.assign(fileData[recievedCategory], {
//                 [recievedTitle]: [{
//                     name: recievedUsername,
//                     review: recievedText
//                 }]
//         })
//
//
//         fs.writeFileSync('./server/review.json', JSON.stringify(fileData, null, 4));
//     }
//     // if category and tile does not exist
//     else
//     {
//         //"object.assign" uses for adding to one object another object,It will return the target object.
//         const newFileContent = Object.assign(fileData, {
//             [recievedCategory]: {
//                 [recievedTitle]: [{
//                     name: recievedUsername,
//                     review: recievedText
//                 }]
//             }
//         })
//         fs.writeFileSync('./server/review.json', JSON.stringify(newFileContent, null, 4));
//     }
//     // when the file is empty(only first time)
//     }else{
//         const newFileContent = {
//             [recievedCategory]: {
//                 [recievedTitle]: [{
//                     name: recievedUsername,
//                     review: recievedText
//                 }]
//             }
//         }
//         fs.writeFileSync('./server/review.json', JSON.stringify(newFileContent, null, 4));
//     }
//     res.json('Review was saved');
// })
//
////finish totally fine post data


// res.send(req.param('topic'));

// app.get('/api/topic/:topic', (req, res) => {
//     res.send({ express: req.param("topic") });
// });


