const { createLogger, transports, format} = require('winston');
const { combine, timestamp, printf, label, simple, colorize} = format;
// const winston = require('winston');
const printFormat = printf(({timestamp,label ,level,message}) =>{
    return `${timestamp} [${label}] ${level} : ${message}`
})
const printLogFormat = {
    file : combine(
        label({
            label: "백앤드 맛보기",
        }),
        // colorize(),
        timestamp({
            format : "YYYY-MM_DD HH:mm:dd",
        }),
        printFormat,
        ),
    console : combine(
        colorize(),
        simple(),
        ),
}
combine(
    label({
        label: "백앤드 맛보기",
    }),
    // colorize(),
    timestamp({
        format : "YYYY-MM_DD HH:mm:dd",
    }),
    printFormat,
    )
const opts = {
    file : new transports.File({
        filename: "access.log",
        dirname: "./logs",
        level : "info",
        format : printLogFormat.file,
    }),
    console :  new transports.Console({
        level : "info",
        format : printLogFormat.console,
    }),
}

const logger = createLogger({
transports: [opts.file],
})
if (process.env.NODE_ENV !== "production"){
    logger.add(opts.console);
}
module.exports = logger;