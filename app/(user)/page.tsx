import Hero from "../components/Hero";
import Carousel from "../components/Carousel";
import { CarouselList } from "../components/CarouselList";

export default async function HomePage() {
  return (
    <div className="max-w-7xl px-4 lg:px-8">
      <Hero />
      <CarouselList />

      <div className="p-8 flex flex-col items-center sm:mt-8 md:mt-16">
        <p className="text-center lg:max-w-3xl md:text-2xl xl:max-w-4xl text-gray-600 py-8">
          My camera is an extension of myself. I use photography to communicate,
          tell stories, and challenge my creativity.
        </p>
      </div>
    </div>
  );
}
