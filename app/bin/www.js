'use strict'

const app = require('../app');
const logger = require('../src/config/logger')
const PORT = process.env.PORT || 43299;

app.listen( PORT, () => {
    // console.log(`${PORT}포트 서버 가동`)
    logger.info(`${PORT} 포트에서 서버가 가동되었습니다.`)
});