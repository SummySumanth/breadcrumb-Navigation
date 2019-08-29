
const express = require('express');

const app = express();

app.use(express.static('build'));

app.listen(process.env.PORT || 3001, () => {
  console.log('server started at', process.env.PORT || 3000);
});