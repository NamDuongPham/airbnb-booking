import { useEffect, useState } from "react";
import { Room } from "../../../../types/room";
interface IProps {
  room: Room;
}
function MapDetail({ room }: IProps) {
  const [mapUrl, setMapUrl] = useState("");
  useEffect(() => {
    // Tạo URL cho Google Map sử dụng địa chỉ
    const formattedAddress = encodeURIComponent(room.location);

    const mapUrl = `https://www.google.com/maps?q=${formattedAddress}`;
    setMapUrl(mapUrl);
  }, [room.location]);
  return (
    <div style={{ borderBottom: "1px solid #ddd" }}>
      <div className="my-5">
        <div>
          <h1 className="text-[25px] my-4 font-semibold">
            Nơi bạn sẽ phải đến
          </h1>
          <p className="mb-4">{room.location}</p>
        </div>
        {/* <iframe
          src={mapUrl + "&key=AIzaSyDNI_ZWPqvdS6r6gPVO50I4TlYkfkZdXh8"}
          width="100%"
          height={450}
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        /> */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.479437901283!2d106.65284937575264!3d10.851092357810586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529609110c5a3%3A0x843133b436fa2e0d!2zMjM3IFBo4bqhbSBWxINuIENoacOqdSwgUGjGsOG7nW5nIDE2LCBHw7IgVuG6pXAsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmlldG5hbQ!5e0!3m2!1sen!2s!4v1692799331095!5m2!1sen!2s"
          width="100%"
          height={450}
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}

export default MapDetail;
