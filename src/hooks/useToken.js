import axios from 'axios';
import { useEffect, useState } from 'react';

const useToken = (user) => {
    const [token, setToken] = useState('')

    useEffect(() => {
        const getIdToken = async () => {
            const email = user?.user?.email;
            if (email) {
                const { data } = await axios.post('https://stock-fruits-server.up.railway.app/login', { email })
                setToken(data.accessToken)
                localStorage.setItem('accessToken', data.accessToken)
            }
        }
        getIdToken()
    }, [user])

    return [token];
};

export default useToken;