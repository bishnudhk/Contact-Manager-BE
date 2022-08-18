// store a errore log in a remote location and access all in project 

import { format, createLogger, transports } from "winston";

const logFormat = format.printf(({ level, message, timestamp, stack }) => {
    // which format 
    return `[${timestamp}] [${level}] : ${stack || message}`;
  });
  const logger = createLogger({
    // inside format combine method 
    format: format.combine(
      format.colorize(),
      format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
      logFormat
    ),
    transports: [new transports.Console()],
  });
  
  export default logger;