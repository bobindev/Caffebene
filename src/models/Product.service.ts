import { shapeIntoMongooseObjectId } from "../libs/config";
import Errors, { HttpCode, Message } from "../libs/Errors";
import { Product, ProductInput, ProductUpdateInput } from "../libs/types/product";
import ProductModel from "../schema/Product.model";

class ProductService{
    private readonly productModel;
    constructor() {
        this.productModel = ProductModel;
    }

    /* SPA */

    /* SSR */
    public async getAllProducts(
        ): Promise<Product[]> {
            //string => objectID
            
            const result = await this.productModel.find().exec();
            if(!result) throw new Errors(HttpCode.NOT_FOUND,Message.NO_DATA_FOUND);

            console.log("result: ", result);
            return result;
        }

    public async createNewProducts(input: ProductInput): Promise<Product> {
        try {
            return await this.productModel.create(input);
        } catch (err) {
            console.error("Error, model:createNewProducts", err)
            throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED)
        }
    }

    public async updateChosenProducts(
        id: string,
        input: ProductUpdateInput): Promise<Product> {
            //string => objectID
            id = shapeIntoMongooseObjectId(id);
            const result = await this.productModel.findOneAndUpdate({_id: id}, input, {new: true}).exec();
            if(!result) throw new Errors(HttpCode.NOT_MODIFIED,Message.UPDATE_FAILED);

            console.log("result: ", result);
            return result;
        }
    
}

export default ProductService;