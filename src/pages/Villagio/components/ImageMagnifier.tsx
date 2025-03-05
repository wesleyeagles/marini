import { Box, Image } from "@chakra-ui/react";
import { useState, MouseEvent } from "react";

import estrutura from "../images/estrutura-em-alta.png";

const ImageMagnifier = ({ src }: { src: string }) => {
  const [zoomStyle, setZoomStyle] = useState<{ display: string; backgroundPosition?: string }>({
    display: "none",
  });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;

    setZoomStyle({
      display: "block",
      backgroundPosition: `${x}% ${y}%`,
    });
  };

  return (
    <Box position="relative" w="100%" mx="auto" overflow="hidden">
      <Image
        src={src}
        alt="Produto"
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setZoomStyle({ display: "none" })}
        w="100%"
        cursor="zoom-in"
      />
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        bgImage={estrutura}
        bgSize="200%"
        pointerEvents="none"
        style={zoomStyle}
      />
    </Box>
  );
};

export default ImageMagnifier;
