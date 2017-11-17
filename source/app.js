const Server = require('./server.js');
const port = (process.env.PORT || 8080);
const app = Server.app();
const cors = require('cors');

app.use(cors());
app.listen(port);
console.log(`Listening at http://localhost:${port}`);
