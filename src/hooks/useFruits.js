import { useEffect, useState } from 'react';

const useFruits = () => {
    const [fruits, setFruits] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/fruit')
            .then(res => res.json())
            .then(data => setFruits(data))
    }, [])

    return [fruits];
};

export default useFruits;