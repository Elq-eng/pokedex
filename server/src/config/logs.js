import winston, { transports } from "winston";

let logger = new winston.createLogger({
  transports: [
      new transports.File({
          level: 'info',
          filename: 'src/logs/infoLogs.log',
          handleExceptions: true,
          json: true,
          colorize: true
      }),
      new transports.Console({
          level: 'debug',
          handleExceptions: true,
          json: true,
          colorize: true
      })
  ],
  exitOnError: false
});

logger.stream = {
    write: function(message, encoding){
        logger.info(message);
    }
};


export default logger;