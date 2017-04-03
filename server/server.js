const path = require('path'),
      express = require('express'),
      {env} = require('./config/config'),
      app = express();

const publicPath = path.join(__dirname, '../public');

app.get('/', (req, res) => {
  console.log(publicPath);
  res.sendFile(`${publicPath}/index.html`);
});

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});

module.exports = {app};