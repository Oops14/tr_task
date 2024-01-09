import React, { useState } from "react";
import { InputField } from "./InputField";
import { Button } from "./Button";
import { ProductType } from "./main/Main";

type SettingsProductsType = {
    defineProduct: (title: string, type: string, color: string, size: string, price: number) => void;
    products: Array<ProductType>
};

export const SettingsProducts = (props: SettingsProductsType) => {
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [color, setColor] = useState("");
    const [wheel, setWheel] = useState("");
    const [price, setPrice] = useState(0);

    let allBikesPrice = 0;
    props.products.forEach(element => {
        allBikesPrice += element.price;
    });

    let getName = (title: string) => {
        setName(title);
    };

    let getType = (title: string) => {
        setType(title);
    };

    let getColor = (title: string) => {
        setColor(title);
    };

    let getWheel = (title: string) => {
        setWheel(title);
    };

    let getPrice = (price: number) => {
        setPrice(price);
    };

    return (
        <div className="products-settings-column">
            <InputField placeholder="Name" getValue={getName} value={name} />
            <InputField placeholder="Type" getValue={getType} value={type} />
            <InputField placeholder="Color" getValue={getColor} value={color} />
            <InputField
                placeholder="Wheel size"
                getValue={getWheel}
                value={wheel}
            />
            <InputField placeholder="Price" getNumber={getPrice} number={price} />
            <InputField placeholder="ID (slug): XXXXXXXXXXX" />

            <div className="buttons_block">
                <Button
                    title={"Save"}
                    saveSettings={props.defineProduct}
                    productName={name}
                    setProductName={setName}
                    type={type}
                    setType={setType}
                    color={color}
                    setColor={setColor}
                    wheel={wheel}
                    setWheel={setWheel}
                    price={price}
                    setPrice={setPrice}
                />
                <Button title={"Clear"} />
            </div>
            <div>
                <h3>Statistics</h3>
                <div>Total bikes: {props.products.length}</div>
                <div>Available bikes: 0</div>
                <div>Average bike cost: {allBikesPrice}</div>
            </div>
        </div>
    );
};
