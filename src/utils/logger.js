class Logger {
    info(message, ...args) {
      console.log(`[INFO] ${message}`, ...args);
    }
  
    error(message, error) {
      console.error(`[ERROR] ${message}`, error);
    }
  
    warn(message, ...args) {
      console.warn(`[WARN] ${message}`, ...args);
    }
  }
  
  module.exports = new Logger();