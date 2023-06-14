import { Box, Image } from "@chakra-ui/react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation, Zoom } from "swiper";
import ZoomImage from "../ZoomImage";

interface ISliderProps {
	imageArray: string[];
}

const Slider = ({ imageArray }: ISliderProps) => {
	return (
		<Box w="100%" marginTop={12}>
			<Swiper className="slider" centeredSlides={true} centerInsufficientSlides={true} navigation={true} modules={[Navigation]} spaceBetween={0}>
				{imageArray.map((image) => {
					return (
						<SwiperSlide>
							<ZoomImage size="6xl" src={image} />
						</SwiperSlide>
					);
				})}
			</Swiper>
		</Box>
	);
};

export default Slider;
