import express from 'express';
const router = express.Router();
import memberContoller from './controllers/member.controller';


router.post('/login', memberContoller.login);
router.post("/signup", memberContoller.signup )

export default router;