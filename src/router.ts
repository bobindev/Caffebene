import express from 'express';
const router = express.Router();
import memberContoller from './controllers/member.controller';

/** Member **/
router.post('/member/login', memberContoller.login);
router.post("/member/signup", memberContoller.signup );
router.get("/member/detail", memberContoller.verifyAuth);

/** Product**/

/** Orders**/

export default router;