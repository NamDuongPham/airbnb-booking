import { BsStarFill } from "react-icons/bs";
import { Carousel } from "antd";

interface ICardProps {
  card: Room;
}

import { Room } from "../../types/room";
import { styled } from "styled-components";
import { useRef } from "react";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { CarouselRef } from "antd/es/carousel";
function Card(props: ICardProps) {
  const { card } = props;
  const date = new Date(card.createAt);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const formattedDate = `${day}/${month}/${year}`;
  const onChange = () => {};
  const carouselRef = useRef<CarouselRef | null>(null);
  const prevSlide = () => {
    if (carouselRef.current) carouselRef.current.prev();
  };
  const nextSlide = () => {
    if (carouselRef.current) carouselRef.current.next();
  };

  return (
    <CarouselContainer>
      <div>
        <div className="slide-action prev">
          <LeftOutlined onClick={prevSlide} />
        </div>
        <div className="slide-action next">
          <RightOutlined onClick={nextSlide} />
        </div>
        <Carousel afterChange={onChange} ref={carouselRef}>
          {card.images.map((img, index) => (
            <div key={index} className="flex">
              <img
                src={img}
                alt=""
                className="object-cover rounded-[1.3rem] sm:h-[17rem]  md:h-[13rem] w-full"
              />
            </div>
          ))}
        </Carousel>
      </div>

      <div className=" text-black font-bold  text-[22px] flex items-center gap-2 text-center">
        {card.name}
      </div>
      <div className="pt-3 flex justify-between items-start">
        {/* Left */}
        <div className="">
          <p className="max-w-[17rem] font-semibold text-[17px] mb-2">
            {card.description}
          </p>
          <p className="max-w-[17rem]  text-[16px] -mt-1 text-gray-500 mb-2">
            {formattedDate}
          </p>
          <p className="max-w-[17rem] font-semibold text-[17px]">
            {card.price} $/ <span className="font-light">night</span>
          </p>
        </div>
        {/* Right */}
        <div className="flex items-center space-x-1">
          <BsStarFill />
          <p className="text-[15px]">{card.rating}</p>
        </div>
      </div>
    </CarouselContainer>
  );
}

export default Card;

const CarouselContainer = styled.div`
  position: relative;
  .prev {
    position: absolute;
    color: black;
    top: 23%;
    right: 10px;
    border-radius: 50%;
    background-color: white;
    z-index: 10;
    width: 20px;
    text-align: center;
    opacity: 0;

    transition: opacity 0.3s ease-in-out;
  }
  .prev:hover {
    opacity: 0.7;
  }
  .next {
    position: absolute;
    color: black;
    top: 23%;
    left: 10px;
    border-radius: 50%;
    background-color: white;
    z-index: 10;
    width: 20px;
    text-align: center;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }
  .next:hover {
    opacity: 0.7;
  }
`;
