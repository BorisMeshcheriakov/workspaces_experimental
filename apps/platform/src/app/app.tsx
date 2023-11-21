import * as React from 'react';
import { Provider } from 'react-redux';

import { store } from '@redux/store';

import { increment, useAppDispatch, useAppSelector } from '@redux/store';

import { Link, Route, Routes } from 'react-router-dom';

import { Page } from '@platform/pages';
import { programsReducer } from '@platform/entities';

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
    <Provider store={store}>
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
          <li>
            <Link to="/test-page">TestPage</Link>
          </li>
        </ul>
        <div>
          <button onClick={test}>Test host</button>
        </div>
        <div>
          <span>result:</span>
          <span>{result}</span>
        </div>
        <Page />
        <Routes>
          <Route path="/" element={<div>Home</div>} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/clients" element={<Clients />} />
          {/* <Route path="/test-page" element={<TestPage />} /> */}
        </Routes>
      </React.Suspense>
    </Provider>
  );
}

export default App;
