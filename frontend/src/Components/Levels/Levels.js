import React from 'react';
import './Levels.css';
import deleteImg from '../../Images/trash.png';
import useAuth from '../../Hooks/useAuth';

const Levels = ({ expense }) => {
    const { fetchAgain } = useAuth();
    const { isFetch, setIsFetch } = fetchAgain;

    const created = expense.createdAt;
    const date = new Date();
    const createdDate = date.toDateString(created).split(' ');

    const handleDeleteLevel = async (id) => {
        const url = `https://expenses-tracker-lime.vercel.app/api/v1/expense-tracker/expense/${id}`;
        const res = await fetch(url, {
            method: "DELETE",
            headers: { "content-type": "application/json" },
        });
        const data = await res.json();
        console.log(data);
        if (data.statusbar) {
            if (isFetch) {
                setIsFetch(false);
            } else {
                setIsFetch(true);
            }
        }
    };

    return (
        <section className={expense.type === 'Income' ? 'level_wrap income_level' : expense.type === "Expense" ? "level_wrap expense_level" : "level_wrap investment_level"}>
            <img style={{ width: '17px', cursor: "pointer" }} src={deleteImg} alt="" onClick={() => handleDeleteLevel(expense._id)} />
            <h6>{expense.amount}</h6>
            <h6>{`${createdDate[1]} ${createdDate[2]}`}</h6>
            <h3>{expense.title}</h3>
        </section>
    );
};

export default Levels;