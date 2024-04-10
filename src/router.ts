import express from 'express';
const router = express.Router();
import memberContoller from './controllers/member.controller';
import uploader from "./libs/utils/uploader"

/** Member **/
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

/** Product**/

/** Orders**/

export default router;