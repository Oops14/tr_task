import React from "react";

type ButtonType = {
    title: string;
    saveSettings?: (
        title: string,
        type: string,
        color: string,
        size: string,
        price: number
    ) => void;

    productName?: string;
    setProductName?: (productName: string) => void;
    type?: string;
    setType?: (type: string) => void;
    color?: string;
    setColor?: (color: string) => void;
    wheel?: string;
    setWheel?: (wheel: string) => void;
    price?: number;
    setPrice?: (price: number) => void;
};

export const Button = (props: ButtonType) => {
    return (
        <>
            <button
                onClick={() => {
                    if (
                        props.saveSettings &&
                        props.productName &&
                        props.setProductName &&
                        props.type &&
                        props.setType &&
                        props.color &&
                        props.setColor &&
                        props.wheel &&
                        props.setWheel &&
                        props.price &&
                        props.setPrice
                    ) {
                        props.saveSettings(
                            props.productName,
                            props.type,
                            props.color,
                            props.wheel,
                            props.price
                        );

                        props.setProductName("");
                        props.setType("");
                        props.setColor("");
                        props.setWheel("");
                        props.setPrice(0);
                    } else {
                        alert('Not all fields was right defined');
                    }
                }}
            >
                {props.title}
            </button>
        </>
    );
};
