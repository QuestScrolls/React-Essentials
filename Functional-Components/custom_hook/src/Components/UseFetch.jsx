import {useEffect, useState} from 'react'

const useFetch = () => {
    const[data, setdata] = useState();

    useEffect(() => {
        if (!url) return; // prevent fetch if url is empty or undefined

        fetch(url)
        .then((res) => res.json())
        .then((data) => setdata(data))
        .catch ((error) => {
            console.error('Fetch Error:', error);
            setdata(null);
        });
    }, [])

    return[data]
}

export default useFetch