import './App.css';

import FirstComponent from './components/FirstComponent';
import AnotherComponent from './components/AnotherComponent';
import Images from './components/Images';
import Hooks from './components/Hooks';
import List from './components/List';
import RenderCond from './components/RenderCond';
import Fragments from './components/Fragments';
import Container from './components/Container';

function App() {
  return (
    <div className="App">
     <h1>Hello World!</h1>

     <FirstComponent />
     <AnotherComponent />

     <Images />

     <Hooks />

     <List />

     <RenderCond x={8} y={22} />

    <Fragments />

    <Container>
      <h1>Este é o filho do elemento pai.</h1>
    </Container>

    </div>
  );
}

export default App;
