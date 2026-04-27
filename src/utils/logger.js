import chalk from "chalk";

const timestamp = () => new Date().toISOString();

const logger = {
  info: (msg) =>
    console.log(chalk.blue(`[INFO] ${timestamp()} — ${msg}`)),

  success: (msg) =>
    console.log(chalk.green(`[SUCCESS] ${timestamp()} — ${msg}`)),

  warn: (msg) =>
    console.log(chalk.yellow(`[WARN] ${timestamp()} — ${msg}`)),

  error: (msg) =>
    console.log(chalk.red(`[ERROR] ${timestamp()} — ${msg}`))
};

export default logger;
