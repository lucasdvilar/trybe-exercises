const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const appointments = ['Terminar o conteúdo', 'Fazer o projeto'];

function App() {
  return (
      <ul>
        {appointments.map((ap) => Task(ap))}
      </ul>
  );
}

export default App;
