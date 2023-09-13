import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Carousel } from "antd";
import { CarouselRef } from "antd/es/carousel";
import moment from "moment";
import { useRef } from "react";
import { BsStarFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { Room } from "../../types/room";
interface ICardProps {
  card: Room;
}
function Card(props: ICardProps) {
  const { card } = props;
  const date = moment(card.createAt).format("MMM Do YY");
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
                className="object-cover rounded-[1.3rem] sm:h-[17rem]  md:h-[13rem] w-full img"
              />
            </div>
          ))}
        </Carousel>
      </div>

      <Link to={`/detail/typeroom/${card.id}`}>
        <div className=" text-[#de3151] font-bold  text-[20px] flex justify-between gap-2  mt-2">
          {card.name}
          <div className="flex items-center ">
            <BsStarFill color="#eded32" />
            <p className="text-[15px] text-black">{Math.floor(card.rating)}</p>
          </div>
        </div>

        <div className="pt-3 flex justify-between items-start">
          {/* Left */}
          <div className="">
            <p className=" text-gray-700  text-[17px] mb-2 text-justify leading-7">
              {card.description.length > 100
                ? card.description.substring(0, 100) + "..."
                : card.description}
            </p>
            <p className="max-w-[17rem]  text-[16px] mt-1 text-gray-400 mb-2">
              {date}
            </p>
            <p className="max-w-[17rem] font-semibold text-[17px]">
              {card.price} $/ <span className="font-light">night</span>
            </p>
          </div>
          {/* Right */}
        </div>
      </Link>
    </CarouselContainer>
  );
}

export default Card;

const CarouselContainer = styled.div`
  position: relative;
  padding: 10px;
  &:hover {
    box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset,
      rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
    border-radius: 20.8px;
    cursor: pointer;
    .img:hover {
      transform: scale(1.1);
      transition: transform 0.7s ease-in-out;
    }
  }

  .prev {
    position: absolute;
    color: black;
    top: 22%;
    left: 20px;
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
    top: 22%;
    right: 20px;
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
