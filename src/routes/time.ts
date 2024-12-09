import express from 'express';
import {Router, Request, Response} from 'express';

const timeController = require('../controllers/time.controller');
const timeRouter : Router = express.Router();

// Implement get operation
timeRouter.get('/', (req : Request, res : Response) => {
    const reqTimeZone : string = req.query.timezone as string;
    try
    {
      const result : string = timeController.getTime(reqTimeZone);
      res.json(result);
    }
    catch
    {
      // If any error trying to get the adjusted time, we have an invalid timezone value
      // Can likely enhance this error handling, depending on what we want the caller to receive
      res.status(400).json({ errorMessage: "Invalid timezone" });
    }
});

export default timeRouter;