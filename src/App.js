import { QueryClient, QueryClientProvider } from 'react-query';
// import { ReactQueryDevtools } from 'react-query/devtools';
import './App.css';
import PostData from './form';
import Test from './test';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes
} from "react-router-dom";
import Header from './components/Header';
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
            <Route index element={<PostData />} />
            <Route path="/list" element={<Test />} />
            <Route path='/list/:id' element={<User />} />
          </Routes>
        </Router>


      </QueryClientProvider>
    </div>
  );
}

export default App;
