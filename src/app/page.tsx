import { AboutTheFood, BurgerOfTheMonth, ItemShowcase, TodaysMeals } from "@/components";
import { BestSellingDishes, Hero, Newsletter } from "./_home";

const Home = () => {
  return (
    <div className="min-h-screen bg-snowfall ">
      <Hero />
      <AboutTheFood />
      <BurgerOfTheMonth />
      <ItemShowcase />
      <BestSellingDishes />
      <TodaysMeals />
      <Newsletter />
    </div>
  );
};

export default Home;
