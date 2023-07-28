import React from 'react'
import { readData } from './CRUD'

const Read = () => {

    useEffect(() => {
        const fetchData = async () => {
            const readUser = await readSpecificData("User", "uYSA6hK2ZXwEjzFsKt1l");
            setUser(readUser)
        };
        fetchData();
    }, []);

}



export { Read }