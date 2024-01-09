import React, { useState } from "react";
import s from "./main.module.css";
import { Products } from "../Products";
import { SettingsProducts } from "../SettingsProducts";
import { v4 as uuidv4 } from "uuid";

export type ProductType = {
    id: string;
    title: string;
    status: string;
    price: number;
    type: string;
    color: string;
};

export const Main = () => {
    const [products, setProducts] = useState([
        {
            id: uuidv4(),
            title: "Name - (Color)",
            type: "Type",
            color: "Color",
            wheelSize: "22",
            status: "Available",
            price: 20,
        },
        {
            id: uuidv4(),
            title: "Product 2",
            type: "Type",
            color: "Color",
            wheelSize: "22",
            status: "Available",
            price: 15,
        },
    ]);

    React.useEffect(() => console.log("Products", products), [products]);

    let defineProduct = (title: string, type: string, color:string, size: string, price: number) => {
        setProducts([
            ...products,
            {
                id: uuidv4(),
                title: title,
                type: type,
                color: color,
                wheelSize: size,
                status: "Available",
                price: price,
            },
        ]);
    };

    let changeStatus = (status: string, id: string) => {
        let product = products.map(prod => prod.id === id ? {...prod, status: status} : prod);
        setProducts(product);
    }

    return (
        <div className={s.container}>
            <div className={s.main}>
                <Products products={products} changeStatus={changeStatus}/>
                <SettingsProducts defineProduct={defineProduct} products={products}/>
            </div>
        </div>
    );
};
