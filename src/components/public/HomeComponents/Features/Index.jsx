import Heading2 from "@components/Heading2";
import Feature from "./Feature";

const Features = () => {
  
  return (
    <section className="p-3">
      {/* ===== Heading ======= */}
      <Heading2 headingText={'Our Features'}/>

      {/* ========= Features ========== */}
      <div className="max-w-screen-xl mx-auto gap-8 grid sm:grid-cols-3">
        <Feature
          iconName={'faBook'}
          heading={"Professional Program"}
          link={"#"}
          text={
            "Unlock your potential with our industry-driven courses, designed to equip you with practical skills and expertise for a successful career."
          }
        />

        <Feature
          iconName={'faPeopleGroup'}
          heading={"Expert Teachers"}
          link={"#"}
          text={
            "Learn from accomplished professionals who bring extensive experience and deep knowledge to provide top-quality education and guidance."
          }
        />
        <Feature
          iconName={'faTrophy'}
          heading={"Achievement"}
          link={"#"}
          text={
            "Learn from accomplished professionals who bring extensive experience and deep knowledge to provide top-quality education and guidance."
          }
        />
      </div>
    </section>
  );
};

export default Features;
