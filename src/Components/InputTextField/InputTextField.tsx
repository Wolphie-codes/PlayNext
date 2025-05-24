import { useRef } from 'react';
import './InputTextField.css';
import { BsSearch } from 'react-icons/bs';

interface Props {
  onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) onSearch(ref.current.value);
      }}
    >
      <div className="textFieldWrp">
        <div className="iconWrp">
          <BsSearch />
        </div>
        <input
          ref={ref}
          type="text"
          placeholder="Search games..."
          className="searchWrp"
        />
      </div>
    </form>
  );
};

export default SearchInput;
