import Banner from "./components/Banner";
import AvailableTutors from "./components/AvailableTutors";
import WhyChooseUs from "./components/WhyChooseUs";
import StudentReviews from "./components/StudentReviews";

export const metadata = {
  title: "Home | TutorSync",
};

export default function HomePage() {
  return (
    <>
      <Banner />
      <AvailableTutors />
      <WhyChooseUs />
      <StudentReviews />
      
    </>
  );
}