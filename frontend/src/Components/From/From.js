import React from 'react';
import './From.css';
import useAuth from './../../Hooks/useAuth';
import Levels from '../Levels/Levels';
// gadget@gmail.com
const From = ({ expenses }) => {
    const [title, setTitle] = React.useState('');
    const [type, setType] = React.useState('Expense');
    const [amount, setAmount] = React.useState(0);

    const { user, fetchAgain } = useAuth();
    const { userID } = user;
    const { isFetch, setIsFetch } = fetchAgain;




    const handleExpenseFetch = async (statement) => {

        const url = `https://expenses-tracker-lime.vercel.app/api/v1/expense-tracker/expense`;
        const res = await fetch(url, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(statement),
        });
        const data = await res.json();
        return data;
    };

    const handleTransaction = async (event) => {
        await event.preventDefault();
        const statement = { userID, title, type, amount }
        if (statement.type === "Expense" && !expenses.length) {
            return alert(`Don't Added Expenses Fast...`)
        }
        const data = await handleExpenseFetch(statement);
        if (data.statusbar) {
            alert(data.message);
            if (isFetch) {
                setIsFetch(false);
            } else {
                setIsFetch(true);
            }
        } else {
            alert(data.message)
        }
    };



    return (
        <section className='from_section'>
            <div className="from_title_wrap">
                <h1>Transaction</h1>
            </div>

            <div className="form_wrap">
                <form onSubmit={handleTransaction}>
                    <input
                        onBlur={(e) => setTitle(e.target.value)}
                        type="text" placeholder='Expense, Salary, Income, SIP' name='title' />
                    <select onBlur={(e) => setType(e.target.value)}>
                        <option value="Expense">Expenses</option>
                        <option value="Income">Income</option>
                        <option value="Saving">Saving</option>
                        {/* <option value="Investment">Investment</option> */}
                    </select>
                    <input onBlur={(e) => setAmount(e.target.value)} type="number" placeholder='Amount' />

                    <input type="submit" value="Make Transaction" className='submit_btn' />
                </form>
            </div>

            <div className="transaction_history">
                <div className="transaction_history_title">
                    <h3>History</h3>
                </div>

                <div className="levels_section_wrap">
                    {
                        expenses.map((expense, index) => <Levels key={index} expense={expense} />)
                    }

                </div>
            </div>
        </section>
    );
};

export default From;