import express from 'express';
const routerAdmin = express.Router();
import restaurantContoller from './controllers/restaurant.controller';
import productContoller from './controllers/product.controller';
import makeUploader from './libs/utils/uploader';

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
).post("/signup", 
makeUploader("members").single("memberImage"), 
restaurantContoller.processSignup );

routerAdmin.get('/logout', restaurantContoller.logout);

routerAdmin.get('/check-me', restaurantContoller.checkAuthSession);

//Product
routerAdmin.get('/product/all', restaurantContoller.verifyRestaurant,
productContoller.getAllProducts);

routerAdmin.post('/product/create', restaurantContoller.verifyRestaurant, 
//makeUploader("products").single("productImage"),
makeUploader("products").array("productImages", 5),
productContoller.createNewProducts);

routerAdmin.post('/product/:id', restaurantContoller.verifyRestaurant, productContoller.updateChosenProducts);

//User


export default routerAdmin;