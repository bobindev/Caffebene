import express from 'express';
const router = express.Router();
import memberContoller from './controllers/member.controller';

router.get('/', memberContoller.goHome
// (req: Request, res: Response) => {
//     res.send("Homepage");
// }
);

router.get('/login', memberContoller.getLogin 
// (req: Request, res: Response) => {
//     res.send("Login Page");
// }
);

router.get('/signup', memberContoller.getSignup
// (req: Request, res: Response) => {
//     res.send("Signup Page");
// }
);

export default router;