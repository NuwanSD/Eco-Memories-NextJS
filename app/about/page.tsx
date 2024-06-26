import ProfileCard from "./components/ProfileCard";

const About = () => {
  return (
    <>
      <div className="px-12 py-20">
        <p className="py-10 section-text flex justify-center">
          We Are Group 08
        </p>
        <ProfileCard />
      </div>
      <div className="px-12 py-20">
        <p className="flex">
          We are a dedicated team of second-year students from the University of
          Kelaniya, specializing in Engineering Technology and Computing
          Technology. As part of our Project in Technology II course, Group 11
          has undertaken this initiative to combat plastic waste and promote
          sustainability. Our mission is to raise awareness about the
          detrimental effects of plastic pollution and encourage community
          participation in creating a cleaner, healthier environment.
        </p>
        <p className="flex mt-5">
          Thank you for visiting our website and supporting our mission to
          reduce plastic waste. Your interest and involvement are crucial in
          making a positive impact on our environment. Together, we can create a
          cleaner, greener future.
        </p>
      </div>
    </>
  );
};

export default About;
