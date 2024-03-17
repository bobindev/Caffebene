import express from 'express';
const routerAdmin = express.Router();
import restaurantContoller from './controllers/restaurant.controller';
import productContoller from './controllers/product.controller';
import makeUploader from './libs/utils/uploader';
import restaurantController from './controllers/restaurant.controller';
import productController from './controllers/product.controller';

//Restaurant
routerAdmin.get('/', restaurantController.goHome
    // (req: Request, res: Response) => {
    //     res.send("Homepage");
    // }
);

routerAdmin.get('/login', restaurantController.getLogin
    // (req: Request, res: Response) => {
    //     res.send("Login Page");
    // }
).post('/login', restaurantController.processLogin);

routerAdmin.get('/signup', restaurantController.getSignup
    // (req: Request, res: Response) => {
    //     res.send("Signup Page");
    // }
).post("/signup", 
makeUploader("members").single("memberImage"), 
restaurantController.processSignup );

routerAdmin.get('/logout', restaurantController.logout);

routerAdmin.get('/check-me', restaurantController.checkAuthSession);

//Product
routerAdmin.get('/product/all', restaurantController.verifyRestaurant,
productController.getAllProducts);

routerAdmin.post('/product/create', restaurantController.verifyRestaurant, 
//makeUploader("products").single("productImage"),
makeUploader("products").array("productImages", 5),
productController.createNewProducts);


routerAdmin.post(
    "/product/:id", 
    restaurantController.verifyRestaurant, 
    productController.updateChosenProduct
  );

//User
routerAdmin.get("/user/all",
restaurantController.verifyRestaurant,
restaurantController.getUsers);

routerAdmin.post("/user/edit",
restaurantController.verifyRestaurant,
restaurantController.updateChosenUser);

export default routerAdmin;