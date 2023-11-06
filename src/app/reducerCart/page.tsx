'use client'
import {useReducer, useState} from 'react';
import Products from './products';

interface cartType{
    id: number,
    name: string,
    price: number
}

interface productType{
    id: number,
    name: string,
    price: number
}

// my products, remains unchanged:
const myProducts: productType[] = [ 
    {
        id: 1,
        name: 'IPHONE',
        price: 5000
    },
    {
        id: 2,
        name: 'SAMSUNG',
        price: 3000
    },
    {
        id: 3,
        name: 'NOKIA',
        price: 100
    }
]

// initial cart array:
const initialCart: cartType[] = [ 
 
];

// reducer function:
const reducer = (state: any, action: any)=>{
    switch(action.type){
        case 'delete':
           
            let newState: cartType[] = state.filter((item: cartType)=>{
                return action.id !== item['id']
            })
            return [...newState];
        case 'add':
            let obj: cartType= {
                id: action.item['id'],
                name: action.item['name'],
                price: action.item['price']
            }

            // state.push(obj);
            return [...state, obj]
            // return state;
        default: 
            return state;
    }
}

export default function Home(){
    const [products, setProducts] = useState<productType[]>(myProducts);
    const [cart, dispatch] = useReducer(reducer, initialCart)

    const handleAddToCart = (cartItem: any) : any=>{
        //
        // console.log(cartItem)
        dispatch({item: cartItem, type: 'add' });
    }

    const handleRemoveFromCart = (cartItem: any) : any=>{
        dispatch({id: cartItem.id, type: 'delete' });
    }

  return (
   <>

    {   products ? products.map((product: productType)=>(
            <div key={product.id} style={productsCard}>
                <h3>{product.name}</h3>
                <h6 style={{color: 'green'}}>{product.price}</h6>
                <button type="button" onClick={()=> handleAddToCart(product)}>Add to cart</button>
                <hr/>
            </div>
            
        )) : (<div>No products</div>)
    }

    {    cart && cart.length > 0  ? cart.map((cartItem: cartType)=>(
            <div key={cartItem.id} style={cartCard}>
                <h3>{cartItem.name}</h3>
                <h6 style={{color: 'green'}}>{cartItem.price}</h6>
                <button type="button" onClick={()=>handleRemoveFromCart(cartItem)}>delete</button>
                <hr/>
            </div>
            
        )) : (<div>No items in cart</div>)
    }

   </>
  )
}


const productsCard = {
    background: 'darkblue'
}
const cartCard = {
    border: '1px solid grey',
    'border-radius': '10%',
    margin: '20px'
}

