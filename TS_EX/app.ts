import { Product } from "./Product";
import { ProductService } from "./ProductService";

let _productService=new ProductService();

let result= _productService.getProducts();

console.log(result);
