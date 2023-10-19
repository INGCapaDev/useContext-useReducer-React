import { useSearchDispatch } from '../context/searchContext/context';
let rerender = 0;

const Button = () => {
  const dispatch = useSearchDispatch();
  return (
    rerender++,
    (
      <button onClick={() => dispatch({ type: 'SET_searchText', payload: '' })}>
        Clear render {rerender}
      </button>
    )
  );
};
export default Button;
