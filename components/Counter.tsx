import { useStore } from '../hooks/useStore';

export const Counter = () => {
  const { count, increment } = useStore();

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>
    </div>
  );
};
