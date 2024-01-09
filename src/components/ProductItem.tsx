import React, { ChangeEvent, useEffect, useState } from "react";

type ProductItemType = {
    id: string;
    title: string;
    price: number;
    type: string;
    color: string;
    status: (status: string, id: string) => void;
    itemStatus: string;
}

export const ProductItem = (props: ProductItemType) => {
    const [val, setVal] = useState('Available');

    let changeVal = (e: ChangeEvent<HTMLSelectElement>) => {
        setVal(e.currentTarget.value);
    }

    useEffect(() => {
        props.status(val, props.id);
    }, [val]);

    return (
        <div className={props.itemStatus === "Available" ? "product-item" : "product-item out-of-stock"}>
            <div className="prod-left-info">
                <div className="name">
                    <span>{props.title}</span> - {props.type} ({props.color})
                </div>
                <div className="id">id: {props.id}</div>
                <div className="status">
                    <label>STATUS:</label>
                    <select className="status-select" value={val} onChange={changeVal} name="status">
                        <option value="Available">Available</option>
                        <option value="out-of-stock">Out of Stock</option>
                    </select>
                </div>
            </div>
            <div className="prod-right-info">
                <div className="close">
                    <span>x</span>
                </div>
                <div className="price">{props.price} UAN/hr.</div>
            </div>
        </div>
    );
};
