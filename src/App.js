import logo from './logo.svg';
import './App.css';

import NewExpense from './components/NewExpenses/NewExpense';
import Expenses from './components/Expenses/Expenses';


const DUMMY_DATA = [
  {
    id:"1",
    title:"Bilgisayar",
    amount:25.12,
    date: new Date(2022,1,12)
  },
  {
    id:"2",
    title:"Bilgisayar 2",
    amount:12.12,
    date: new Date(2022,2,15)
  },
  {
    id:"3",
    title:"Bilgisayar",
    amount:70.12,
    date: new Date(2022,6,6)
  },
  {
    id:"4",
    title:"Bilgisayar",
    amount:95.12,
    date: new Date(2022,7,5)
  },
  {
    id:"4",
    title:"Bilgisayar",
    amount:95.12,
    date: new Date(2020,3,5)
  },
  {
    id:"4",
    title:"Bilgisayar",
    amount:95.12,
    date: new Date(2020,4,5)
  },

];


const  App = () => {
  return (
    <div>
      <NewExpense></NewExpense>
      <Expenses items={DUMMY_DATA} ></Expenses>
    </div>
  );
}

export default App;
