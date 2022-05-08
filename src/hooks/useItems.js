import { useEffect, useState } from "react";

const useItems = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('https://fierce-brushlands-16042.herokuapp.com/mobile')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    return [items, setItems]
}

export default useItems;