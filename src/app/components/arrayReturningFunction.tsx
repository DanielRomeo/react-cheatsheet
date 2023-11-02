'use client'
import {useState} from 'react';

interface myComponentProps<T> {
    value: T;
}

const ArrayReturningComponent = <T,>({value} : myComponentProps<T>):T =>{
    let water: T = value;
    return water;
}

export default ArrayReturningComponent;