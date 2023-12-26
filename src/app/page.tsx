import {
  AboutTheFood,
  ItemShowcase,
  TodaysMeals,
} from "@/components/Advertisement";
import { BestSellingDishes, Hero, Newsletter } from "./_home";

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutTheFood />
      <ItemShowcase />
      <BestSellingDishes />
      <TodaysMeals />
      <Newsletter />
    </div>
  );
};

export default Home;
