import React from 'react';
import './Balance.css';
import { Chart, ArcElement } from "chart.js";
import { Doughnut } from "react-chartjs-2";

Chart.register(ArcElement)



const Balance = ({ expenses }) => {

    let income = 0;
    let cost = 0;
    let saving = 0;

    for (const x of expenses) {
        if (x.type === 'Income') {
            income = income + x.amount;
        } else if (x.type === "Expense") {
            cost = x.amount + cost;
        } else if (x.type === "Saving") {
            saving = saving + x.amount;
        }
    };


    let total = income - cost - saving;
    // let savingPercent = (((income - cost) / income) * 100).toFixed(0);
    // let investmentPercent = (((income - saving) / income) * 100).toFixed(0);
    // let expensesPercent = investmentPercent - savingPercent;
    // savingPercent = parseInt(savingPercent);
    // investmentPercent = 100 - parseInt(investmentPercent);

    let incomePercent = 0;
    let expensesPercent = 0;
    let savingPercent = 0;
    incomePercent = income / income;
    expensesPercent = cost / income;
    expensesPercent = (expensesPercent * 100).toFixed(0);
    savingPercent = saving / income;
    savingPercent = (savingPercent * 100).toFixed(0)
    incomePercent = 100 - (parseInt(expensesPercent) + parseInt(savingPercent));

    incomePercent = parseInt(incomePercent);
    expensesPercent = parseInt(expensesPercent);
    savingPercent = parseInt(savingPercent);




    // console.log(savingPercent, expensesPercent);
    const config = {
        data: {
            labels: [
                'Red',
                'Blue',
                'Yellow'
            ],
            datasets: [{
                label: 'My First Dataset',
                data: [incomePercent, expensesPercent, savingPercent],
                backgroundColor: [
                    "rgb(0, 255, 0)",
                    "rgb(255, 40, 10)",
                    "rgb(255, 255, 0)",
                ],
                hoverOffset: 4,
                borderRadius: 30,
                spacing: 10,
                width: 200,
                height: 100
            }]
        },
        options: {
            cutout: 120
        }
    };



    return (
        <div className='balance_section'>
            <div className='graph_wrap'>
                <Doughnut {...config} style={{ width: "100px", height: "100px" }} />
                <div className='balance_text_wrap'>
                    <h3>Total-Balance</h3>
                    <h6 id='total_balance_id'>${total === 0 ? `00` : total}</h6>
                </div>
            </div>

            <div className="balance_amount_wrap">
                <div className='income_wrap'>
                    <h4>INCOME</h4>
                    <h6>${income === 0 ? `00` : income}</h6>
                </div>
                <div className="expenses_wrap">
                    <h4>EXPENSE</h4>
                    <h6>${cost === 0 ? `00` : cost}</h6>
                </div>
                <div className="invest_wrap">
                    <h4>SAVING</h4>
                    <h6>${saving === 0 ? `00` : saving}</h6>
                </div>
            </div>

            <div className="saving_expense_percent_wrap">
                <div className='saving_percent_wrap'>
                    <h3>On Hand</h3>
                    <h6>{incomePercent ? incomePercent : `00`}%</h6>
                </div>
                <div className='expense_percent_wrap'>
                    <h3>Expense</h3>
                    <h6>{expensesPercent ? expensesPercent : `00`}%</h6>
                </div>
                <div className='investment_percent_wrap'>
                    <h3>Saving</h3>
                    <h6>{savingPercent ? savingPercent : `00`}%</h6>
                </div>
            </div>


        </div>
    );
};

export default Balance;