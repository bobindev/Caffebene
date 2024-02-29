// controllerlar har doim object lar orqali hosil qilinadi
import { Request, Response } from 'express';
import { T } from "../libs/types/common"

const memberContoller: T = {};
//Bu yerda controllarga tegishli methodlarni qurib olamiz
// memberContoller.goHome = (req: Request, res: Response) => {
//     try {
//         res.send("Homepage");
//     } catch (err) {
//         console.log("Error, goHome", err);
//     }

// };

// memberContoller.getLogin = (req: Request, res: Response) => {
//     try {
//         res.send("Login Page");
//     } catch (err) {
//         console.log("Error, getLogin", err);
//     }

// };

// memberContoller.getSignup = (req: Request, res: Response) => {
//     try {
//         res.send("Signup Page");
//     } catch (err) {
//         console.log("Error, getSignup", err);
//     }

// };

//memberControlller ni router ichida chaqirib olish uchun export qilinishi kerak.

//REACT

export default memberContoller;

// Agar "default" orqali export qilinsa file ninng umumiy qaytaroyatgan qiymatini olishimiz mn. Agar har bir qiymatn chaqirmoqch bo'lsak defaul ishlatilmaydi. 