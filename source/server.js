const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const xFrameOptions = require('x-frame-options');
const helmet = require('helmet');

module.exports = {

    app: function () {
        const app = express();
        const indexPath = path.join(__dirname, '/public/index.html');
        const publicPath = express.static(path.join(__dirname, 'public'));

        // Security options
        app.use(helmet());
        app.use(xFrameOptions());

        app.use(bodyParser.json({limit: '50mb'}));
        app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
        app.use('/public', publicPath);

        app.get('/', function (_, res) {
            res.sendFile(indexPath);
        });

        // Catch all redirect to index.html
        app.get('*', function (req, res) {
            res.sendFile(indexPath);
        });

        return app
    }
};