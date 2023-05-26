import React from 'react'
import useAuth from '../hooks/useAuth';
import UnAuthrized from './UnAuthrized';

function Home() {


    const { login } = useAuth();

    let a = 10;

    return (
        <>
        {
            login ? <div><h1 className='text-center m-5'>Home Page</h1></div> :  <UnAuthrized/>
        }
        </>
    )
}

export default Home;