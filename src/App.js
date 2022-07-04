import './App.css';
import AddTask from './components/AddTask';
import ListTask from './components/ListTask';
import EditTask from './components/EditTask';
import Filter from './components/filter';
function App() {
  return (
    <div className="App" >
      <div className="container" style={{backgroundColor: 'beige'}}>
      <div className="row">
        <div className="col-md-7 offset-md-3 ">
          <h1 className="text-center m-5 pt-5 fa-solid fa-list">   TODO LIST</h1>
          <AddTask />
          <Filter/>
          <ListTask />
          <EditTask /> 
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
