import { Carousel, Typography, Button } from "@material-tailwind/react";

export default function CarouselSlides(prop) {
  const { carouselData } = prop;

  return (
    <Carousel className="shadow-2xl">
      {carouselData.map((image, index) => (
        <div
          key={index}
          className="relative w-full bg-center bg-cover h-96 lg:h-[36rem]"
          style={{
            backgroundImage: `url(${image.image})`,
          }}>
          <div className="absolute inset-0 bg-black opacity-60"></div>

          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <Typography variant="h2" color="white" className="text-3xl font-bold lg:text-5xl">
              {image.title}
            </Typography>

            <Typography color="white" className="px-16 py-4 text-sm text-center lg:text-lg">
              {image.info}
            </Typography>

            <Button
              variant="text"
              className="mt-4 text-white bg-blue-600 border-2 border-blue-600 hover:bg-white hover:text-blue-600 lg:w-96">
              Explore
            </Button>
          </div>
        </div>
      ))}
    </Carousel>
  );
}
