import React from "react";
import '../App.css';

export default function Shop(){
    const [ items, setItems ] = React.useState([])

    React.useEffect (() => {
        async function apiGrab(){
            const res = await fetch ('https://fortnite-api.com/v2/shop/br')
            const data = await res.json()
            console.log(data.data)
            setItems(data.data.daily.entries)
        }
        apiGrab()
    }, [])

    // const createTitles = items.map ( item => <h1>{item.items[0].name}</h1>)
    return (
        <div>
            {/* {createTitles} */}
            {items.map(item => <h1 key = {item.offerId}>{item.items[0].name}</h1>)}
        </div>

    )
}