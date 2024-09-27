import React from 'react';
import {IIngredients} from "../../types";

interface BurgerProps {
    ingredients:IIngredients[];
    price: number;
}

const Burger:React.FC<BurgerProps> = ({ingredients , price}) => {
    return (
        <>
        <div className="Burger">
            <div className="BreadTop">
                <div className="Seeds1"></div>
                <div className="Seeds2"></div>
            </div>
            {ingredients.map(item => {
                const divs = [];
                for (let i = 0; i < item.count; i++) {
                    divs.push(
                        <div key={i} className={item.name}>
                        </div>
                    );
                }
                return divs;

            })}
            <div className="BreadBottom"></div>
            <p>Price: {price}</p>

        </div>

</>
)
    ;
};

export default Burger;