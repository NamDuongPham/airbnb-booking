import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Card from "../../components/Card/Card";
import { useGetTypeRoomsQuery } from "../../services/roomService";
import { Room } from "../../types/room";
import ModalSearch from "./components/ModalSearch/ModalSearch";
function Home() {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get("category");

  const { data } = useGetTypeRoomsQuery();
  const [searchResults, setSearchResults] = useState<Room[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const filteredData = categoryParam
    ? data?.filter((card) => card.category === categoryParam)
    : data;

  const handleSearch = (results: Room[]) => {
    console.log("results",results);
    setSearchResults(results);
  };
 

  return (
    <div className="max-w-[2520px] mx-auto xl:px-10 md:px-10 sm:px-2 px-4 grid grid-cols-5 gap-4">
      <ModalSearch
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        onSearch={handleSearch}
      />
      {searchResults.length > 0 && (
        <div>
          <h2>Search Results:</h2>
          <div className="grid grid-cols-5 gap-4">
            {searchResults.map((result) => (
              <Card key={result.id} card={result} />
            ))}
          </div>
        </div>
      )}
      {/*  */}
      {filteredData?.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </div>
  );
}

export default Home;
