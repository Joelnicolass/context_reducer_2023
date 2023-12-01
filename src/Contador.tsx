import { increment, incrementBy, incrementBy5 } from "./store/actions";
import { useStore } from "./store/hooks/use_store";

const Contador = () => {
  const { state, dispatch } = useStore();

  return (
    <div>
      <h1>{state.counter}</h1>
      <button
        onClick={() => {
          dispatch(incrementBy(10));
        }}
      >
        +
      </button>
    </div>
  );
};

export default Contador;
