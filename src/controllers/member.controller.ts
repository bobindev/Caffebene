// controllerlar har doim object lar orqali hosil qilinadi
import { Request, Response } from 'express';
import { T } from "../libs/types/common"
import { LoginInput, Member, MemberInput } from '../libs/types/member';
import MemberService from '../models/Member.service';
import Errors, { HttpCode, Message } from '../libs/Errors';
import AuthService from '../models/Auth.service';
import { AUTH_TIMER } from '../libs/config';

const memberService = new MemberService();
const authService = new AuthService();

const memberContoller: T = {};

memberContoller.signup = async (req: Request, res: Response) => {
    try {
        console.log("signup");
        const input: MemberInput = req.body,
        result: Member = await memberService.signup(input),
        //TODO: TOKENS AUTHENTICATION

        token = await authService.createToken(result);
        res.cookie("accessToken", token, {maxAge: AUTH_TIMER *3600 * 1000, httpOnly: false,
        })
  
          res.status(HttpCode.CREATED).json({ member: result, accessToken: token });
    } catch (err) {
        console.log("Error, signup:", err);
        if (err instanceof Errors) res.status(err.code).json(err);
        else res.status(Errors.standard.code).json(Errors.standard);
    }

};

memberContoller.login = async (req: Request, res: Response) => {
    try {
        console.log("login");
        const input: LoginInput = req.body,
        result = await memberService.login(input),
        token = await authService.createToken(result)
        
        //TODO: TOKENS AUTHENTICATION
      //biz ishlatadigan browser ichidagi cookie ichiga qaysi nom bilan token lar saqlanishini beradi
      res.cookie("accessToken", token, {maxAge: AUTH_TIMER *3600 * 1000, httpOnly: false,
      })

        res.status(HttpCode.OK).json({ member: result, accessToken: token });
    } catch (err) {
        console.log("Error, login", err);
        if (err instanceof Errors) res.status(err.code).json(err);
        else res.status(Errors.standard.code).json(Errors.standard);
    }

};

memberContoller.verifyAuth = async(req: Request, res: Response) => {
  try {
    let member =null;
    const token =req.cookies["accessToken"];
    if(token) member= await authService.checkAuth(token);

    if(!member) throw new  Errors(HttpCode.UNAUTHORIZED, Message.NOT_AUTHENTICATED)

    res.status(HttpCode.OK).json({ member: member, accessToken: token });

  } catch (err) {
    console.log("Error, verifyAuth", err);
        if (err instanceof Errors) res.status(err.code).json(err);
        else res.status(Errors.standard.code).json(Errors.standard);
  }
}
//REACT

export default memberContoller;

// Agar "default" orqali export qilinsa file ninng umumiy qaytaroyatgan qiymatini olishimiz mn. Agar har bir qiymatn chaqirmoqch bo'lsak defaul ishlatilmaydi. 