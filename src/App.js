import './App.scss';
import '../src/Components/scss/common.scss'
import {Routes , Route, BrowserRouter} from "react-router-dom";
import Home from './Pages/Home'
import Tenth from './Pages/Tenth';
import Twelth from './Pages/Twelth';
import QuickQuestion from './Pages/QuickQuestion';


function App() {
  return (
    <div className="App">
      {/* <BrowserRouter> */}
        <Routes>
          <Route exact index path='/' element={<Home />} />
          <Route index path='/tenth' element={<Tenth />} />
          <Route index path='/twelth' element={<Twelth />} />
          <Route index path='/quickquestion' element={<QuickQuestion />} />
        </Routes>
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
