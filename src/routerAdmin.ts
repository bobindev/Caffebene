import express from 'express';
const routerAdmin = express.Router();
import restaurantContoller from './controllers/restaurant.controller';

routerAdmin.get('/', restaurantContoller.goHome
// (req: Request, res: Response) => {
//     res.send("Homepage");
// }
);

routerAdmin.get('/login', restaurantContoller.getLogin 
// (req: Request, res: Response) => {
//     res.send("Login Page");
// }
);

routerAdmin.get('/signup', restaurantContoller.getSignup
// (req: Request, res: Response) => {
//     res.send("Signup Page");
// }
);

export default routerAdmin;