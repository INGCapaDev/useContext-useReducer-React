import { useSearchContext } from '../context/searchContext/searchHooks';

const Text = () => {
  const { searchText } = useSearchContext();
  return <h1>{searchText} </h1>;
};
export default Text;
