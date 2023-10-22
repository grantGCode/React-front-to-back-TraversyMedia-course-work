import UseRefExample3 from './components/UseRefExample3'

function App() {
  const infoMessage ="React 18 no longer displays warnings in the console if there is a memory leak"
  // infoMessage.style.color = 'red'
  // infoMessage.style.backgroundcolor = 'gray'
  return (
    <>
      <UseRefExample3 />
      <p>{infoMessage}</p>
    </>
  );
}

export default App;
