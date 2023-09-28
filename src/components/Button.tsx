import { ACTIONS } from '../context/searchContext/reducer';
import { useSearchActionsContext } from '../context/searchContext/searchHooks';
let rerender = 0;

const Button = () => {
  const dispatch = useSearchActionsContext();
  return (
    rerender++,
    (
      <button
        onClick={() =>
          dispatch({ type: ACTIONS.SET_SEARCH_TEXT, payload: '' })
        }>
        Clear render {rerender}
      </button>
    )
  );
};
export default Button;
