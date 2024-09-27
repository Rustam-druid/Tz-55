import React from 'react';
import {IIngredients} from "../types";

interface IngredientProps {
    ingredients:IIngredients[];
    BtnAdd:(id: number) => void;
    deleteOneItem:(id:string) => void;
    setPrice:React.SetStateAction<number>
    setIngredients:React.SetStateAction<IIngredients[]>
}

const IngredientsIngredient:React.FC<IngredientProps> = ({ingredients,setIngredients, setPrice , deleteOneItem}) => {
    const BtnAdd = (id: number) => {
        const itemIndex = ingredients.findIndex((item) => item.id === id);
        if (itemIndex !== -1) {

            const updatedIngredients = [...ingredients];
            updatedIngredients[itemIndex].count += 1;


            let totalstate = updatedIngredients.reduce((acc,item ) => {
                acc = acc + (item.count * item.price)

                return acc;
            },30)
            setPrice(totalstate)

            setIngredients(updatedIngredients);
        }
    };

    return (
        <>
            <div className='Ingredients'>
                {ingredients.map(i => (

                    <div key={i.id} className='Ibtn'>

                        <button type='button' className='btnFood' onClick={() => BtnAdd(i.id)}>
                            <img src={i.src} alt="" className='img'/></button>

                        <span>{i.name} x{i.count} </span>
                        {i.count > 0 ? (
                            <button type='button' onClick={() => deleteOneItem(i.id)} className='delete'></button>
                        ) : null}
                    </div>
                ))}
            </div>
        </>
    );
};

export default IngredientsIngredient;