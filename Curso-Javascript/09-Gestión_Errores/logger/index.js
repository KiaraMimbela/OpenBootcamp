const winston = require('winston');

const logger = winston.createLogger({
    // el nivel de log que acepta
    level: 'debug',
    // el formato en que muestra los logs
    format: winston.format.json(),
    // defaultMeta: { service: 'user-service' },
    transports: [
        // acciones que se ejecutan cada vez que hay un log
        // muestra las cosas por terminal
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        new winston.transports.File({ filename: 'combined.log' }),
    ],
});

// exportar el logger
module.exports = logger;