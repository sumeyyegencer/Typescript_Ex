import { Product } from "./Product";


export class SimpleDataSource{


    private products:Array<Product>;


    constructor(){
        this.products=new Array<Product>(

            new Product(1,"Samasung S5","Telefon",1000),
            new Product(1,"Samasung S6","Telefon",2000),
            new Product(1,"Samasung S7","Telefon",3000),
            new Product(1,"Samasung S8","Telefon",4000),
        );
    }


    getProducts():Product[]{

        return this.products;
    }



}