import { useState } from "react";

import ModalContainer from "../../../../components/ModalCustom/ModalContainer";
import { useGetTypeRoomsQuery } from "../../../../services/roomService";
import { Room } from "../../../../types/room";
interface IProps {
  isOpen: boolean;
  setIsOpen: (_is: boolean) => void;
  onSearch: (results: Room[]) => void;
}

function ModalSearch({ isOpen, setIsOpen, onSearch }: IProps) {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [searchResults, setSearchResults] = useState<Room[] | undefined>([]);
  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchKeyword(event.target.value);
  };
  const { data } = useGetTypeRoomsQuery();
  const handleSearch = () => {
    if (data) {
      const results = data.filter((card) => card.name === searchKeyword);
      console.log(results);
      setSearchResults(results);
      onSearch(results);
    }

    setIsOpen(false);
  };
  return (
    <ModalContainer title="Search" isOpen={isOpen} setIsOpen={setIsOpen}>
      <div style={{ height: 100 }} className="w-full">
        <div className="px-2">
          <input
            type="text"
            className="border border-rose-600 w-full "
            placeholder="Place ypu need to find"
            value={searchKeyword}
            onChange={handleSearchInputChange}
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-rose-500 text-white  mt-5 w-[50%]"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>
    </ModalContainer>
  );
}

export default ModalSearch;
