import { ProductItem } from "./ProductItem";
import { ProductType } from "./main/Main";

type ProductsType = {
    products: Array<ProductType>;
    changeStatus: (status: string, id: string) => void;
};

export const Products = (props: ProductsType) => {
    return (
        <div className="products-column">
            {props.products.map((prod, index) => {
                return (
                    <ProductItem
                        key={index}
                        id={prod.id}
                        title={prod.title}
                        price={prod.price}
                        type={prod.type}
                        color={prod.color}
                        status={props.changeStatus}
                        itemStatus={prod.status}
                    />
                );
            })}
        </div>
    );
};
