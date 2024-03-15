import { Request, Response } from 'express';
import Errors, { HttpCode, Message } from "../libs/Errors";
import { T } from "../libs/types/common";
import ProductService from '../models/Product.service';
import { ProductInput } from '../libs/types/product';
import { AdminRequest } from '../libs/types/member';

const productService = new ProductService();

const productContoller: T = {};

/* SPA */

/* SSR */

productContoller.getAllProducts = async (req: Request, res: Response) => {
    try {
        console.log("getAllProducts"); 
        res.render("products");
    } catch (err) {
        console.log("Error, getAllProducts:", err)
        
        if (err instanceof Errors) res.status(err.code).json(err);
        else res.status(Errors.standard.code).json(Errors.standard);
    }
};

productContoller.createNewProducts = async (req: AdminRequest, res: Response) => {
    try {
        console.log("createNewProducts"); 
        console.log("req.files:", req.files);
        if (!req.files?.length) throw new Errors(HttpCode.INTERNAL_SERVER_ERROR, Message.CREATE_FAILED);

        const data: ProductInput = req.body;
        data.productImages = req.files?.map((ele) => {
            return ele.path.replace(/\\/g, "/");
        });
        
        await productService.createNewProducts(data);

        res.send(`<script> alert ("Successful creation"); window.location.replace('/admin/product/all')</script>`);
    } catch (err) {
        console.log("Error, createNewProducts:", err);
        const message =
        err instanceof Errors ? err.message : Message.SOMETHING_WENT_WRONG;
        
        res.send(`<script> alert ("${message}"); window.location.replace('/admin/product/all')</script>`);
    }
};

productContoller.updateChosenProducts = async (req: Request, res: Response) => {
    try {
        console.log("updateChosenProducts"); 
    } catch (err) {
        console.log("Error, updateChosenProducts:", err);
        if (err instanceof Errors) res.status(err.code).json(err);
        else res.status(Errors.standard.code).json(Errors.standard);
    }
};

export default productContoller;