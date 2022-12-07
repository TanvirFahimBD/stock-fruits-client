import { useEffect, useState } from 'react';

const useFruits = (pageSize) => {
    const [fruits, setFruits] = useState([])

    useEffect(() => {
        fetch('https://stock-fruits-server.up.railway.app/fruit')
            .then(res => res.json())
            .then(data => {
                setFruits(data)
            })
    }, [])

    return [fruits];
};

export default useFruits;