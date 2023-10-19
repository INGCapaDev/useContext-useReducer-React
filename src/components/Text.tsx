import { useSearchContext } from '../context/searchContext/context';

const Text = () => {
  const { searchText } = useSearchContext();
  return <h1>{searchText} </h1>;
};
export default Text;
