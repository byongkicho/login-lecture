'use strict';

// 모듈
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const logger = require('./src/config/logger')
const dotenv = require("dotenv");
dotenv.config();

const app = express();


const accessLogStream = require('./src/config/log')
// 라우팅
const home = require('./src/routes/home');

// 엡세팅
app.set('views', './src/views');
app.set('view engine', 'ejs');
app.use(express.static(`${__dirname}/src/public`));
app.use(bodyParser.json());
//URL을 통해전달되는 데이터 들이 한글 공밷 등과 같은 문자가 포함딜 경우 제대로 인식되지 않는 문제 해결
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(morgan('dev'));
// app.use(morgan('common',{ stream : accessLogStream}));
app.use(morgan('tiny',{ stream : logger.stream}));

app.use('/', home);  // use -> 미들웨어를 등록해주는 메서드.

module.exports = app;