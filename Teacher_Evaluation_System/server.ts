import express from 'express';
import { PrismaClient } from '@prisma/client';
import {router} from './routes/routes';

const app = express();
app.use(express.json());
app.use(router);

const prisma = new PrismaClient();
const PORT = 3001;

app.get('/', (req, res) => {
    res.send('Welcome to our home page!');
});

async function main() {
    try {
        await prisma.$connect();
        console.log('Database connection successful');

        app.listen(PORT, () => {
            console.log(`listening on port http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error('Error connecting to the database', error);
        process.exit(1);
    }
}

main();
