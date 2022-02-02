import logo from './logo.svg';
import './App.css';

import NewExpense from './components/NewExpenses/NewExpense';
import Expenses from './components/Expenses/Expenses';

const  App = () => {
  return (
    <div>
      <NewExpense></NewExpense>
      <Expenses title="Expenses Component"></Expenses>
    </div>
  );
}

export default App;
