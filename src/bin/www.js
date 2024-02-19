'use strict'

const app = require('../../app');
const PORT = 43299;

app.listen( PORT, () => {
    console.log(`${PORT}포트 서버 가동`)
});