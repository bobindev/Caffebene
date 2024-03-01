import express from 'express';
const routerAdmin = express.Router();
import restaurantContoller from './controllers/restaurant.controller';

//Restaurant
routerAdmin.get('/', restaurantContoller.goHome
    // (req: Request, res: Response) => {
    //     res.send("Homepage");
    // }
);

routerAdmin.get('/login', restaurantContoller.getLogin
    // (req: Request, res: Response) => {
    //     res.send("Login Page");
    // }
).post('/login', restaurantContoller.processLogin);

routerAdmin.get('/signup', restaurantContoller.getSignup
    // (req: Request, res: Response) => {
    //     res.send("Signup Page");
    // }
).post("/signup", restaurantContoller.processSignup )

//Product
//User


export default routerAdmin;