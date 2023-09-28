const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8081;
const mongoose = require('mongoose');
const routes = require('./routes');
const fileUpload = require('express-fileupload');
const session = require ('express-session');
