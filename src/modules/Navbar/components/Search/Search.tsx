import { useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import ModalSearch from '../../../Home/components/ModalSearch/ModalSearch';
import { Room } from '../../../../types/room';
function Search() {
  const [isModalOpen, setIsModalOpen] = useState(false);
 
  
  const handleSearchClick = () => {
    setIsModalOpen(true);
  };
  const handleSearch = (results: Room[]) => {
    console.log(results);
  };
  return (
    <div className="border-[1px] ww-full md:auto py-2 rounded-full shadow-sm hover:shadow-md transition cursor-pointer">
      <div className="flex flex-row items-center justify-between">
        <div className="text-sm font-semibold px-6">Anywwhere</div>
        <div className="hidden sm:block text-sm font-semibold px-6 border-x-[1px] flex-2 text-center">
          Any Week
        </div>
        <div className="text-sm pl-6 pr-6 text-gray-600 flex flex-row items-center gap-3">
          <div className="hidden sm:block ">Add Guests</div>
          <div className="p-2 bg-[#DE3151] rounded-full text-white"
          onClick={handleSearchClick}>
            <BiSearch size={18}/>
          </div>
          <ModalSearch isOpen={isModalOpen} setIsOpen={setIsModalOpen} onSearch={handleSearch}/>
        </div>
      </div>
    </div>
  );
}

export default Search;
