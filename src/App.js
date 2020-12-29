import './App.css';
import img1 from './assets/image1.png'
function App() {
  return (
    <div className="App bg-blue-200 h-screen flex items-center justify-center">
      <header className="App-header">
        <div>
        <img src={img1}/>
        </div>
        <a> Hello my name is Jennifer</a>
      </header>
    </div>
  );
}

export default App;
