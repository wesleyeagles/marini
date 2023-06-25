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
		<Box w={{sm: "100%", "lg2": "40vw", "2xl": "43vw"}} marginTop={12}>
			<Swiper className="slider" centeredSlides navigation modules={[Navigation]} spaceBetween={0} style={{ width: "100%"}}>
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
