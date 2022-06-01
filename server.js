const express = require('express');

const app = express();
const PORT = 3000;

app.get('/usere', (req, res) => {
  res.status(200).send("Hello, World!");
})

app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`);
}); 



