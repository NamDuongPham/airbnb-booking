import InfoPrice from "./InfoPrice/InfoPrice";
import InfoUtilities from "./InfoUtilities/InfoUtilities";

function InfoDetail() {
  return (
    <div className="mt-5 flex flex-row justify-between" >
      <div className="basis-2/3">
        <InfoUtilities />
      </div>
      {/*  */}
    
      <div className="basis-1/3 pl-[40px]  ">
        <InfoPrice />
      </div>
    </div>
  );
}

export default InfoDetail;
