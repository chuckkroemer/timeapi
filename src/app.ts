import express from 'express';
import timeRouter from './routes/time';

const app = express();

// Map the time route to our handler
app.use('/time', timeRouter);

export default app;