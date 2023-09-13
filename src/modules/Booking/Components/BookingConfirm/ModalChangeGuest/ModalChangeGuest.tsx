import { useState } from "react";
import { useParams } from "react-router-dom";
import ModalCustom from "../../../../../components/ModalCustom/ModalCustom";
import { useGetTypeRoomByIdQuery } from "../../../../../services/roomService";
interface IProps {
  isOpen: boolean;
  setIsOpen: (_is: boolean) => void;
  onGuestDataChange: (newGuestData: GuestData) => void;
}
interface GuestData {
  adults: number;
  children: number;
  babies: number;
  pets: number;
}
function ModalChangeGuest({ isOpen, setIsOpen,onGuestDataChange }: IProps) {
  const { id } = useParams();
  const { data: room } = useGetTypeRoomByIdQuery(id);
  console.log(room);

  const [adultCount, setAdultCount] = useState(1); // Số lượng người lớn
  const [childCount, setChildCount] = useState(0); // Số lượng trẻ em
  const [babyCount, setBabyCount] = useState(0); // Số lượng em bé
  const [petCount, setPetCount] = useState(0); // Số lượng thú cưng
  const handleCountChange = (type: string, action: string) => {
    let updatedCount;

    switch (type) {
      case "adult":
        updatedCount = action === "increment" ? adultCount + 1 : adultCount - 1;
        setAdultCount(Math.max(0, Math.min(updatedCount, room.maxGuest)));
        break;
      case "child":
        updatedCount = action === "increment" ? childCount + 1 : childCount - 1;
        setChildCount(
          Math.max(0, Math.min(updatedCount, room.maxGuest - adultCount))
        );
        break;
      case "baby":
        updatedCount = action === "increment" ? babyCount + 1 : babyCount - 1;
        setBabyCount(Math.max(0, updatedCount));
        break;
      case "pet":
        updatedCount = action === "increment" ? petCount + 1 : petCount - 1;
        setPetCount(Math.max(0, updatedCount));
        break;
      default:
        break;
    }
  };
  const handleSave = () => {
    const updatedGuestData: GuestData = {
      adults: adultCount,
      children: childCount,
      babies: babyCount,
      pets: petCount,
    };

    sessionStorage.setItem("guestData", JSON.stringify(updatedGuestData));
    onGuestDataChange(updatedGuestData);
    setIsOpen(false)
  };
  return (
    <ModalCustom
      title="THAY ĐỔI SỐ LƯỢNG KHÁCH"
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      footer={<></>}
    >
      <div className="p-2">
        <div>
          <h1 className="text-[23px] mb-2">Khách</h1>
          <p className="text-justify">
            Chỗ ở này cho phép tối đa 10 khách, không tính em bé. Nếu bạn mang
            theo nhiều hơn 2 thú cưng, vui lòng báo cho Chủ nhà biết.
          </p>
        </div>
        <div className="flex flex-row justify-between mt-2">
          <div>
            <div className="text-[18px] font-semibold">Người lớn</div>
            <div className="text-[15px]">Từ 13 trở lên</div>
          </div>
          <div className="flex gap-3 items-center">
            <button onClick={() => handleCountChange("adult", "decrement")}>
              -
            </button>
            <div>{adultCount}</div>
            <button onClick={() => handleCountChange("adult", "increment")}>
              +
            </button>
          </div>
        </div>
        <div className="flex flex-row justify-between mt-2">
          <div>
            <div className="text-[18px] font-semibold">Trẻ em</div>
            <div className="text-[15px]">Độ tuổi 2 – 12</div>
          </div>
          <div className="flex gap-3 items-center">
            <button  onClick={() => handleCountChange("child", "decrement")}>-</button>
            <div>{childCount}</div>
            <button onClick={() => handleCountChange("child", "increment")}>+</button>
          </div>
        </div>
        <div className="flex flex-row justify-between mt-2">
          <div>
            <div className="text-[18px] font-semibold">Em bé</div>
            <div className="text-[15px]">Dưới 2 tuổi</div>
          </div>
          <div className="flex gap-3 items-center">
            <button  onClick={() => handleCountChange("baby", "decrement")}>-</button>
            <div>{babyCount}</div>
            <button onClick={() => handleCountChange("baby", "increment")}>+</button>
          </div>
        </div>
        <div className="flex flex-row justify-between mt-2">
          <div>
            <div className="text-[18px] font-semibold">Thú cưng</div>
            <div className="text-[15px]">
              Bạn sẽ mang theo động vật phục vụ?
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <button  onClick={() => handleCountChange("pet", "decrement")}>-</button>
            <div>{petCount}</div>
            <button onClick={() => handleCountChange("pet", "increment")}>+</button>
          </div>
        </div>
        <div className="flex items-center justify-center mt-5">
          <button className="bg-black text-white" onClick={()=>{handleSave()}}>
            Lưu
          </button>
        </div>
      </div>
    </ModalCustom>
  );
}

export default ModalChangeGuest;
