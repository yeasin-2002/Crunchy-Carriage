import {
  AboutTheFood,
  ItemShowcase,
  TodaysMeals,
} from "@/components/Advertisement";
import {
  BestSellingDishes,
  Hero,
  Newsletter,
  ShowAwesomeProduct,
} from "./_home";

const Home = () => {
  return (
    <div className="bg-snowfall min-h-screen">
      <Hero />
      <ShowAwesomeProduct />
      <AboutTheFood />
      <ItemShowcase />
      <BestSellingDishes />
      <TodaysMeals />
      <Newsletter />
    </div>
  );
};

export default Home;
