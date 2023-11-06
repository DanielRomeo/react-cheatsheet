'use client'
import { useState } from "react"

interface productType{
    id: number,
    name: string,
    price: number
}

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


const Products = () => {

    const [products, setProducts] = useState<productType[]>(myProducts);

    const handleClick = (): void=>{
        //
    }

    return (
    <div>
        {
           
        }
    </div>
  )
}

export default Products;
