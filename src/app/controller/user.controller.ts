import { Request, Response } from "express"
import { validationResult  } from 'express-validator'
export default {
    store: (req: Request, res: Response) => {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }
        
    },
    index: () => { },
    show: () => { },
    edit: () => { },
    destroy: () => { }
}