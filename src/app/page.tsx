import {
  AboutTheFood,
  TodaysMeals,
  VideoIntro,
} from "@/components/Advertisement";
import { BestSellingDishes, Newsletter } from "./_home";

const Home = () => {
  return (
    <div>
      <AboutTheFood />
      <BestSellingDishes />
      <TodaysMeals />
      <VideoIntro />
      <Newsletter />
    </div>
  );
};

export default Home;
