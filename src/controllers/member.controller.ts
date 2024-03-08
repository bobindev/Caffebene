// controllerlar har doim object lar orqali hosil qilinadi
import { Request, Response } from 'express';
import { T } from "../libs/types/common"
import { LoginInput, Member, MemberInput } from '../libs/types/member';
import MemberService from '../models/Member.service';
import Errors from '../libs/Errors';

const memberService = new MemberService();

const memberContoller: T = {};

memberContoller.signup = async (req: Request, res: Response) => {
    try {
        console.log("signup");
        const input: MemberInput = req.body,
        result: Member = await memberService.signup(input);
        //TODO: TOKENS AUTHENTICATION

        res.json({ member: result });
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
        result = await memberService.login(input);
        //TODO: TOKENS AUTHENTICATION

        res.json({ member: result });
    } catch (err) {
        console.log("Error, login", err);
        if (err instanceof Errors) res.status(err.code).json(err);
        else res.status(Errors.standard.code).json(Errors.standard);
    }

};

//REACT

export default memberContoller;

// Agar "default" orqali export qilinsa file ninng umumiy qaytaroyatgan qiymatini olishimiz mn. Agar har bir qiymatn chaqirmoqch bo'lsak defaul ishlatilmaydi. 