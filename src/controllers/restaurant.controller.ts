// controllerlar har doim object lar orqali hosil qilinadi
import { Request, Response } from 'express';
import { T } from "../libs/types/common"

const restaurantContoller: T = {};
//Bu yerda controllarga tegishli methodlarni qurib olamiz
restaurantContoller.goHome = (req: Request, res: Response) => {
    try {
        res.send("Homepage");
    } catch (err) {
        console.log("Error, goHome", err);
    }

};

restaurantContoller.getLogin = (req: Request, res: Response) => {
    try {
        res.send("Login Page");
    } catch (err) {
        console.log("Error, getLogin", err);
    }

};

restaurantContoller.getSignup = (req: Request, res: Response) => {
    try {
        res.send("Signup Page");
    } catch (err) {
        console.log("Error, getSignup", err);
    }

};


export default restaurantContoller;
