import { Box, BoxProps, Flex } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { Swiper } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css";
import { Autoplay, Navigation } from "swiper";

type Props = {
  slidesPerView?: number;
  tablet?: number;
  desktop?: number;
  children: React.ReactNode;
} & BoxProps;

export const Slider: React.FC<Props> = ({
  children,
  slidesPerView,
  tablet,
  desktop,
  ...props
}) => {
  const prevRef = useRef<any>(null);
  const nextRef = useRef<any>(null);

  const [next, setNext] = useState("");
  const [prev, setPrev] = useState("");

  useEffect(() => {
    setNext(nextRef.current);
    setPrev(prevRef.current);
  }, []);

  return (
    <Box position="relative" {...props}>
      <Swiper
        spaceBetween={20}
        navigation={{
          prevEl: prev,
          nextEl: next,
        }}
        modules={[Autoplay, Navigation]}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        className="mySwiper"
        breakpoints={{
          400: {
            spaceBetween: 20,
          },
          420: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: tablet,
          },
          992: {
            slidesPerView: desktop,
          },
        }}
        slidesPerView={slidesPerView}
      >
        {children}
      </Swiper>

      <Flex pos="absolute" top="-60px" right="0" zIndex={1}>
        <Box mr="35px" ref={prevRef} h="7.5px" w="15px" cursor="pointer">
          <Box
            as="span"
            display="inline-block"
            bgColor="#000"
            h="2px"
            w="10px"
            pos="absolute"
            transform="rotate(-45deg)"
          />
          <Box
            as="span"
            display="inline-block"
            bgColor="#000"
            h="2px"
            w="10px"
            pos="absolute"
            bottom="0px"
            transform="rotate(45deg)"
          />
        </Box>
        <Box ref={nextRef} h="7.5px" w="15px" cursor="pointer" pos="relative">
          <Box
            as="span"
            display="inline-block"
            bgColor="#000"
            h="2px"
            w="10px"
            pos="absolute"
            transform="rotate(45deg)"
          />
          <Box
            as="span"
            display="inline-block"
            bgColor="#000"
            h="2px"
            w="10px"
            pos="absolute"
            bottom="0px"
            transform="rotate(-45deg)"
          />
        </Box>
      </Flex>
    </Box>
  );
};
