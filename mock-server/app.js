const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const express = require('express');
const app = express();
app.use(cors());
app.use(bodyParser.json());

let testUser = { login: 'test_man', password: '228335'};

app.post('http://localhost:9095/api/sign-up', ()=>{
  console.log('success')
})

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
