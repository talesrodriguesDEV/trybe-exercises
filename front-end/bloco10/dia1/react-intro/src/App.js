import logo from './logo.svg';
import './App.css';

const appointments = ['acordar', 'comer', 'estudar', 'exercitar', 'dormir', 'teste'];

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  return (
    Task('Aoba'),
    appointments.map((appointment) => Task(appointment))
    );
}

export default App;
