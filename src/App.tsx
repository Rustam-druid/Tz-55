import React, { useState } from 'react';
import Meat from './assets/Meat.jpg'
import salad from './assets/salad.jpg'
import Bacon from './assets/bacon.jpg'
import cheese from './assets/cheese.jpg'
import './App.css'
import Burger from "./components/Burger/Burger.tsx";
import {IIngredients} from "./types";
import IngredientsIngredient from "./components/Ingredients.Ingredient.tsx";


const App = () => {


    const [price, setPrice] = useState<number>(0)
    const [ingredients, setIngredients] = useState<IIngredients[]>([
        {name: 'Meat',  price: 80, src: Meat, id: 1, count: 0},
        {name: 'Cheese', price: 50, src: cheese, id: 2, count: 0},
        {name: 'Salad', price: 10, src: salad, id: 3, count: 0},
        {name: 'Bacon', price: 60, src: Bacon, id: 4, count: 0},

    ]);



    const deleteOneItem = (id:string) => {
        const itemIndex = ingredients.findIndex((item) => item.id === id);
        if (itemIndex !== -1) {

            const updatedIngredients = [...ingredients];
            if (updatedIngredients[itemIndex].count > 0) {
                updatedIngredients[itemIndex].count -= 1;
            }
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
            <div className='container'>
                <div className='header'></div>
                <div className='main'>
<IngredientsIngredient deleteOneItem={deleteOneItem} ingredients={ingredients} setPrice={setPrice} setIngredients={setIngredients}></IngredientsIngredient>
                    <Burger ingredients={ingredients} price={price}></Burger>
                </div>
                <div className='footer'></div>
            </div>

        </>
    );
};

export default App;