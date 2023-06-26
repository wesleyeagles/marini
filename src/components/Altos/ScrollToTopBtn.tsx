import { Box } from "@chakra-ui/react";
import BackToTopArrow from "../../svgs/altos/BackToTopArrow";

interface ScrollToTopInterface {
	inView: boolean;
	setInView: (inView: boolean) => void;
}

const ScrollToTopBtn = ({ inView }: ScrollToTopInterface) => {

    const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};


	return (
		<Box onClick={() => scrollToTop()} display={{ sm: `${inView ? "flex" : "none"}`, md: "none" }} position="fixed" bottom="20px" right="20px" background="#FFF" padding="8px" borderRadius="100px" zIndex="9999">
			<BackToTopArrow />
		</Box>
	);
};

export default ScrollToTopBtn;
