import React, { ChangeEvent } from "react";

type InputFieldType = {
    placeholder: string;
    getValue?: (title: string) => void;
    number?: number;
    getNumber?: (number: number) => void;
    value?: string;
};

export const InputField = (props: InputFieldType) => {
    let setProductsValues = (e: ChangeEvent<HTMLInputElement>) => {
        let val = e.currentTarget.value;

        if (props.getValue) props.getValue(val);
        if (props.getNumber) props.getNumber(parseInt(val));
    };

    return (
        <>
            <input
                type={props.number ? "number" : "text"}
                placeholder={props.placeholder}
                value={props.value}
                onChange={setProductsValues}
            />
        </>
    );
};
