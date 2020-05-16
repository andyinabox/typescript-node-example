// es6 import
import express, { Application, Request, Response, NextFunction } from 'express';

const PORT = 5000;
// Type of Application
const app: Application = express();

// Arrow function with number params and returns a number
const addNumbers = (num1: number, num2: number): number => num1 + num2;

app.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.send(`Hello to TypeScript Node 🔥 ${addNumbers(5, 5)}`);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT} 🔥`));
