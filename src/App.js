
import './App.css';
import Banner from './Banner';
import Header from './Header';
import requests from './Request';
import Row from './Row';

function App() {
  return (
    <div className="App">
      <h1>Netflix Clone App let's build it</h1>

      <Header />

      <Banner />

      <Row 
      isLargeRow
      title= "NETFLIX ORIGINALS"
      
      
      />

    </div>
  );
}

export default App;
