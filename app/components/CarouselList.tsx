import Carousel from "../components/Carousel";

import imagesWedding from "../../lib/images";
const carouselList = [
  {
    title: "Wedding",
    images: imagesWedding,
  },
  {
    title: "Birthday",
    images: imagesWedding,
  },
  {
    title: "Outdoor",
    images: imagesWedding,
  },
  {
    title: "Baby Shower",
    images: imagesWedding,
  },
  {
    title: "Puberty",
    images: imagesWedding,
  },
];
export const CarouselList = () => {
  return (
    <>
      {carouselList.map((item) => (
        <Carousel
          title={item.title}
          images={item.images as []}
          key={item.title}
        />
      ))}
    </>
  );
};
