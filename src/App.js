// import { ReactQueryDevtools } from 'react-query/devtools';
import { QueryClient, QueryClientProvider } from 'react-query';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './components/Header';
import AddData from './components/form';
import Main from './components/main';
import User from './components/user';
function App() {
  const smallQuery = new QueryClient({})
  return (
    <div className="App">

      <QueryClientProvider client={smallQuery}>
        {/* <ReactQueryDevtools initialIsOpen={true} /> */}

        <Router >
          <Header />
          <Routes>
            <Route index element={<AddData />} />
            <Route path="/list" element={<Main />} />
            <Route path='/list/:id' element={<User />} />
          </Routes>
        </Router>


      </QueryClientProvider>
    </div>
  );
}

export default App;
