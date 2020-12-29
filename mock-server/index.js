const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const express = require('express');
const app = express();
app.use(cors());
app.use(bodyParser.json());
let fs = require("fs");

let jsonParser = bodyParser.json();
const JWT_Secret = 'your_secret_key';


app.post('/auth', jsonParser,(req, res) => {

  if (req.body) {

    //let data = fs.readFileSync("./assets/jsons/users.json", "utf8");
    let users = JSON.parse(fs.readFileSync("./assets/jsons/users.json", "utf8"));
    console.log(users)
    for(let i = 0 ;i<users.length; i++){
      //console.log(typeof users[i].login + ' ' + typeof users[i].password + ' user')
     // console.log(req.body.login + ' '  + typeof req.body.password + ' request')
      if(users[i].login === req.body.login && users[i].password === req.body.password){
        console.log(typeof users[i].login + ' ' + typeof users[i].password + ' user')
        console.log(typeof req.body.login + ' '  + typeof req.body.password + ' request')
        let token = jwt.sign(users[i], JWT_Secret);
        res.status(200).send({
          signedUser: users[i],
         token: token
        })

      }


    }

  }
  else {
    res.status(403).send({
      errorMessage: 'Please provide login and password'
    });
  }

});

app.post("/reg", jsonParser,(req, res) => {
  if(!req.body)
    res.status(403).send({
    errorMessage: 'Please provide login and password'
  });

  let users = JSON.parse(fs.readFileSync("./assets/jsons/users.json", "utf8"));
  let id = Math.max.apply(Math,users.map(function(o){return o.id;})) + 1;

  let newUser = {
    id: id,
    login: req.body.login,
    password: req.body.password
  };

  //console.log(newUser)
  users.push(newUser);
  //console.log(users)

 let data = JSON.stringify(users);
  fs.writeFileSync("./assets/jsons/users.json", data);

});

app.get("/titles", (req, res, next) => {
  const title = require('./assets/jsons/title-example.json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.json(title);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
