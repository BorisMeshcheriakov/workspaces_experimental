import * as React from 'react';

import { increment, useAppDispatch, useAppSelector } from '@redux/store';

import { Link, Route, Routes } from 'react-router-dom';

const Programs = React.lazy(() => import('programs/Module'));
const Clients = React.lazy(() => import('clients/Module'));

const useTest = () => {
  const dispatch = useAppDispatch();
  const test = () => dispatch(increment(1));
  return {
    test,
  };
};

export function App() {
  const { test } = useTest();
  const result = useAppSelector((state) => state.test);

  return (
    <React.Suspense fallback={null}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/programs">Programs</Link>
        </li>
        <li>
          <Link to="/clients">Clients</Link>
        </li>
      </ul>
      <div>
        <button onClick={test}>Test host</button>
      </div>
      <div>
        <span>result:</span>
        <span>{result}</span>
      </div>
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/clients" element={<Clients />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
