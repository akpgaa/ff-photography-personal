import Carousel from "../components/Carousel";
import imagesByCategory from "../../lib/images";

const carouselList = [
  { title: "Wedding", images: imagesByCategory.wedding },
  { title: "Bride", images: imagesByCategory.bride },
  { title: "Outdoor", images: imagesByCategory.outdoor },
  { title: "Baby Shower", images: imagesByCategory.babyShower },
  { title: "Baby", images: imagesByCategory.baby },
];

export const CarouselList = () => {
  return (
    <>
      {carouselList.map((item) => (
        <Carousel title={item.title} images={item.images} key={item.title} />
      ))}
    </>
  );
};
