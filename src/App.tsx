import React, { useState } from 'react';
import Meat from './assets/Meat.jpg'
import salad from './assets/salad.jpg'
import Bacon from './assets/bacon.jpg'
import cheese from './assets/cheese.jpg'
import './App.css'


const App = () => {

    interface IIngredients{
        name: string,
        price: number,
        src: string,
        id: number,
        count: number
    }

    const [price, setPrice] = useState<number>(0)
    const [ingredients, setIngredients] = useState<IIngredients[]>([
        {name: 'Meat',  price: 80, src: Meat, id: 1, count: 0},
        {name: 'Cheese', price: 50, src: cheese, id: 2, count: 0},
        {name: 'Salad', price: 10, src: salad, id: 3, count: 0},
        {name: 'Bacon', price: 60, src: Bacon, id: 4, count: 0},

    ]);


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
                    <div className='Ingredients'>
                        {ingredients.map(i => (

                            <div key={i.id} className='Ibtn'>

                                <button type='button' className='btnFood' onClick={() => BtnAdd(i.id)} >
                                    <img src={i.src} alt=""  className='img'/></button>

                                <span>{i.name} x{i.count} </span>
                                {i.count > 0 ? (
                                    <button type='button' onClick={() => deleteOneItem(i.id)} className='delete'></button>
                                ) : null}
                            </div>
                        ))}
                    </div>
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
                </div>
                <div className='footer'></div>
            </div>

        </>
    );
};

export default App;