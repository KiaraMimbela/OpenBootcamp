const winston = require('winston');

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'user-service' },
    transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    ],
});

function error() {
    throw new Error("Este es un mensaje de error, vuelve más tarde!")
}

try {
    error()
} catch(e) {
    logger.error("Error")
    logger.error(e.toString())
}