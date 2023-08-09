import { Navigate } from "react-router-dom";
import { SITE_MAP } from "../../constants/site-map";
import { useGetTypeRoomsQuery } from "../../services/roomService";
import Card from "../../components/Card/Card";

function Home() {
  const token = localStorage.getItem("token");

  if (token) {
    const { data } = useGetTypeRoomsQuery();

    console.log(data);

    return (
      <div className="max-w-[2520px] mx-auto xl:px-10 md:px-10 sm:px-2 px-4 grid grid-cols-5 gap-4">
        {data?.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </div>
    );
  } else {
    return <Navigate to={SITE_MAP.LOGIN.url} replace={true} />;
  }
}

export default Home;
