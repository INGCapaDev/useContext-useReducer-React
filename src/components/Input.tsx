import {
  useSearchActionsContext,
  useSearchContext,
} from '../context/searchContext/searchHooks';

export const Input = () => {
  const { searchText } = useSearchContext();
  const dispatch = useSearchActionsContext();
  return (
    <input
      type='text'
      onChange={(e) => {
        dispatch({ type: 'setSearchText', payload: e.target.value });
      }}
      value={searchText}
    />
  );
};
