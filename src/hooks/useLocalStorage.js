import {useState, useEffect} from 'react'
//prefix init
const PREFIX = 'codepen-clone-'
export default function useLocalStorage(key, initialValue) {
    //set prefix key
    const prefixedKey = PREFIX + key
    //useState as function
    const [value, setValue] = useState(()=>{
        //fetch saved data
        const jsonValue = localStorage.getItem(prefixedKey);
        // no exxisting data
        if(jsonValue != null) return JSON.parse(jsonValue)
        //initialValue data type
        if(typeof initialValue === 'function'){
            return initialValue()
        }else{
            return initialValue;
        }
    })

    //save data when changed
    useEffect(()=>{
        localStorage.setItem(prefixedKey, JSON.stringify(value))
    }, [prefixedKey, value])
    return [value, setValue]
}
