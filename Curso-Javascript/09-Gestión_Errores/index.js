// exportando el logger
const logger = require("./logger");

// console.log("Estoy en pantalla")
logger.info("Esto es un mensaje informativo")
logger.debug("Esto es un mensaje de debug")
logger.warn("Esto es un mensaje de advertencia")
logger.error("Esto es un error");