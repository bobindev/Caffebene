import express from 'express';
import path from 'path';
import router from './router';
import routerAdmin from './router-admin';
import morgan from'morgan';
import { MORGAN_FORMAT } from './libs/config';

import session from "express-session";
import ConnectMongoDB from "connect-mongodb-session";
import { T } from './libs/types/common';
import cookieParser from 'cookie-parser';

const MongoDBStore = ConnectMongoDB(session);
const store = new MongoDBStore({
    uri: String(process.env.MONGO_URL),
    collection: "session"
});

//1-ENTRANCE
const app = express();
app.use(express.static(path.join(__dirname, "public")));
app.use("/uploads", express.static("./uploads"))
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cookieParser());
app.use(morgan(MORGAN_FORMAT));


//2-SESSION
app.use(
    session({ //bu yerda session tashkil etilganda bizning mongodbdagi session qismiga murojat qiladi.
    secret: String(process.env.SESSION_SECRET),
    cookie: {
        maxAge: 1000 * 3600 * 6 //6hrs
    },
    store: store,
    resave: true,
    saveUninitialized: true
})
);
app.use(function(req, res, next) {
    const sessionInstance = req.session as T;
    res.locals.member = sessionInstance.member;
    next();
})

// Bu yerda seesion tashkil etilgandan keyin "router-admin"dagi signup va login jarayonida sessionlarni tashkil etishni talab qilamiz

//3-VIEWS
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//4-ROUTERS
app.use('/admin', routerAdmin); //SSR: EJS
app.use('/', router); //SPA: REACT

export default app; //= module.exports

