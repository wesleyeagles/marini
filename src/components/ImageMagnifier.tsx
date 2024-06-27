import { useCallback, useState } from 'react'
import { Controlled as ControlledZoom } from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

interface IImageMagnifierProps {
    smallImageUrl: string
    largeImageUrl: string
}

const ImageMagnifier = ({ largeImageUrl, smallImageUrl }: IImageMagnifierProps) => {
    const [isZoomed, setIsZoomed] = useState(false)

    const handleZoomChange = useCallback((shouldZoom: boolean | ((prevState: boolean) => boolean)) => {
        setIsZoomed(shouldZoom)
    }, [])

    return (
        <ControlledZoom
            canSwipeToUnzoom
            isZoomed={isZoomed}
            onZoomChange={handleZoomChange}
            zoomImg={{ src: largeImageUrl }}
        >
            <img
                style={{
                    width: '100%',
                }}
                alt=""
                src={smallImageUrl}
            />
        </ControlledZoom>
    )
}

export default ImageMagnifier
