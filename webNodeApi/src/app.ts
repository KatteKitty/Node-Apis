import 'express-async-errors';
import express, {Request, Response, NextFunction} from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';

const app = express(); 

app.use(morgan('tiny')); 
app.use(cors()); 
app.use(helmet()); 
app.use(express.json());

app.use((req: Request, res: Response, next: NextFunction) =>{
    res.send('Hello everybody :>');
})

app.use((erro: Error, req: Request, res: Response, next: NextFunction) =>{
    res.status(500).send(erro.message);
})

export default app;