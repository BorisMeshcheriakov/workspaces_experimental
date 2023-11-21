// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { increment, useAppDispatch, useAppSelector } from '@redux/store';
// import styles from './app.module.scss';

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
    <div>
      <h1>Programs {result}</h1>
      <button onClick={test}>Test client</button>
    </div>
  );
}

export default App;
