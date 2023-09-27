import { SliderImage } from "@/sheared/ProductDetails/helpers"
import { useKeenSlider } from "keen-slider/react";
import { ThumbnailPlugin } from "@/sheared/ProductDetails/helpers"
import "keen-slider/keen-slider.min.css";
import { Iimage } from "@/Interface/Product/Product";


export default function Slider({ images }: { images: Iimage[] }) {

    const [sliderRef, instanceRef] = useKeenSlider({
        initial: 0,
    })
    const [thumbnailRef] = useKeenSlider(
        {
            initial: 0,
            slides: {
                perView: 4,
                spacing: 10,
            },
        },
        [ThumbnailPlugin(instanceRef)]
    )
    return (
        <>
            <div ref={sliderRef} className="keen-slider">
                {
                    images.map((img, index) => <div key={index}>
                        <SliderImage img={img.url} />
                    </div>)
                }
            </div>
            {/* -------------------------- thumbnail ---------------------- */}
            <div ref={thumbnailRef} className="keen-slider flex justify-center thumbnail">
                {
                    images.map((img, index) => <div key={index} >
                        <SliderImage img={img.url} />
                    </div>)
                }
            </div>
        </>
    )


}