import React from 'react';
import './Main.css';
import Balance from '../Balance/Balance';
import From from '../From/From';
import useAuth from './../../Hooks/useAuth';
import { useEffect } from 'react';

const Main = () => {

    const { fetchAgain, user } = useAuth();
    const { userID } = user;
    const { isFetch } = fetchAgain;
    const [expenses, setExpenses] = React.useState([]);





    useEffect(() => {
        if (userID) {
            const url = `https://expenses-tracker-lime.vercel.app/api/v1/expense-tracker/expense/${userID}`;
            fetch(url)
                .then((res) => res.json())
                .then((data) => {
                    if (data.statusbar) {
                        setExpenses(data.data);
                    }
                })
        }
    }, [isFetch, userID]);



    return (
        <section className='main_container'>
            <Balance expenses={expenses} />
            <From expenses={expenses} />
        </section>
    );
};

export default Main;