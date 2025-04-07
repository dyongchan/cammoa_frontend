import { BrowserRouter, Route, Routes } from 'react-router';
import Layout from '@layout/Layout';
import Home from '@pages/Home/Home.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
