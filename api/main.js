    const   express = require('express'),
        fs = require('fs'),
        shell = require('shelljs'),
        bodyParser = require('body-parser')
        cors = require('cors');

var db = require('./db.json');

var corsOptions = { // fuck off cors
    origin: '*',
    optionsSuccessStatus: 200,
    methods: 'POST'
}

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors(corsOptions));
app.use(express.json());

app.post('/findUser', (req, res) => {
    let data = req.body;
    console.log(`Requested user : ${data.name}`);

    // send a json to the client. If no user find, return {}
    let findedUser = data.name != undefined ? db.users.find(element => element.name == data.name) : undefined;

    if(findedUser == undefined) findedUser = {name : null};

    res.status(200).json(findedUser);
});

app.post('/createUser', (req, res) => {
    let data = req.body;
    console.log(`Creating a new user :\nName : ${data.name}\tFactory name : ${data.factoryName}`);

    // create a new user following the db organization.
    let newUser = {
        name: data.name,
        inventory: {
            balance: 0,
            ressources: []
        },
        factory: {
            lvl: 0,
            name: data.factoryName,
            production: []
        }
    };

    // adding the user in the db
    db.users.push(newUser);
    // updating the server db
    updateDb();

    res.status(200).json(newUser);
});

app.post('/findItems', (req, res) =>
{
    let data = req.body;
    console.log(`Searching ressources ${data.name}...`);

    // searching a ressouce into db.ressources[]
    let findedRessource = db.ressources.find(element => element.name == data.name);

    if(findedRessource == undefined)
    {
        console.log(`Ressouce find !`)
        res.status(200).json(findedRessource);
    }
    else
    {
        console.log('Ressouce doesnt exist !');
        res.status(404);
    }
});

app.post('/allItems', (req, res) => {
    res.status(200).json(db.items);
});

app.listen(8044, () => {
    console.log('Server has started on port 8044');
});

function updateDb()
{
    // fs.writeFileSync('./db.json', JSON.stringify(db));
}

/*
DB MODEL : 

{
    "users": [
        {
            "name",
            "inventory": {
                "balance",
                "ressources": [
                    {
                        "item",
                        "quantity"
                    }
                ]
            },
            "factory": {
                "lvl",
                "name",
                "production": [
                    {
                        "name", // ressouce's name
                        "productionRate"
                    }
                ]
            }
        }
    ],
    "offers": [
        {
            "seller", // user's name
            "isClosed",
            "name", // ressouce's name
            "quantity"
        }
    ],
    "items": [
        {
            "name",
            "grade",
            "price": {
                "money",
                "ressources": [
                    "name" // ressouce's name
                ]
            }
        }
    ],
    "production-line" : [
        "name",
        "productionStat" : {
            "item",
            "production-rate"
        },
        "grade",
        "price" : {
            "money",
            "items" : [
                "item",
                "quantity"
            ]
        }
    ]
}
*/