
import {  CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import img1 from '../../public/slider/img1.jpg'
import img2 from '../../public/slider/img2.jpg'
import img3 from '../../public/slider/img3.jpg'
import img4 from '../../public/slider/img4.jpg'

  const images = [img1, img2, img3, img4]
 

export function HeroSection() {
  return (
   <div className="mb-10 ">
  <Carousel className="rounded-2xl"> 
    <CarouselContent>
      {images.map((image, index) => (
        <CarouselItem key={index}>
          <div className="p-1">
            <div>
              <CardContent className="p-0">
                <div className="relative h-[220px] md:h-[380px] lg:h-[600px] w-full">
                  <img
                    src={image}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-[680px] object-cover rounded-lg"
                  />
                
                </div>
              </CardContent>
            </div>
          </div>
        </CarouselItem>
      ))}
    </CarouselContent>

    <CarouselPrevious />
    <CarouselNext />
  </Carousel>
</div>

  )
}
