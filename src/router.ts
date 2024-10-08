import express from 'express';
const router = express.Router();
import memberContoller from './controllers/member.controller';
import uploader from "./libs/utils/uploader"
import productController from './controllers/product.controller';
import orderContoller from './controllers/order.controller';

/** Member **/
router.get("/member/restaurant", memberContoller.getRestaurant)
router.post('/member/login', memberContoller.login);
router.post("/member/signup", memberContoller.signup);
router.post("/member/logout",
  memberContoller.verifyAuth,
  memberContoller.logout);
router.get("/member/detail",
  memberContoller.verifyAuth,
  memberContoller.getMemberDetail);

router.post("/member/update",
  memberContoller.verifyAuth,
  uploader("members").single("memberImage"),
  memberContoller.updateMember);

router.get("/member/top-users", memberContoller.getTopUsers)

/** Product**/
router.get("/product/all", productController.getProducts);
router.get("/product/:id",
  memberContoller.retrieveyAuth,
  productController.getProduct);

/** Orders**/
router.post("/order/create", 
memberContoller.verifyAuth, 
orderContoller.createOrder);

router.get("/order/all", 
memberContoller.verifyAuth, 
orderContoller.getMyOrders);

router.post("/order/update", 
memberContoller.verifyAuth, 
orderContoller.updateOrder);

export default router;