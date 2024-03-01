// controllerlar har doim object lar orqali hosil qilinadi
import { Request, Response } from 'express';
import { T } from "../libs/types/common";
import MemberService from "../models/Model.service";

const restaurantContoller: T = {};
//Bu yerda controllarga tegishli methodlarni qurib olamiz
restaurantContoller.goHome = (req: Request, res: Response) => {
    try {
        console.log("goHome");
        res.send("Homepage");
    } catch (err)  {
        console.log("Error, goHome", err);
    }

};

restaurantContoller.getLogin = (req: Request, res: Response) => {
    try {
        console.log("getLogin");
        res.send("Login Page");
    } catch (err) {
        console.log("Error, getLogin", err);
    }

};

restaurantContoller.getSignup = (req: Request, res: Response) => {
    try {
        console.log("getSignup");
        res.send("Signup Page");
    } catch (err) {
        console.log("Error, getSignup", err);
    }

};

restaurantContoller.processLogin = (req: Request, res: Response) => {
    try {
        console.log("processLogin");
        res.send("DONE");
    } catch (err) {
        console.log("Error, processLogin", err);
    }

};

restaurantContoller.processSignup = (req: Request, res: Response) => {
    try {
        console.log("processSignup");
        res.send("DONE");
    } catch (err) {
        console.log("Error, processSignup", err);
    }

};

export default restaurantContoller;
