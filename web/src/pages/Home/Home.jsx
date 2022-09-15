import { SectionTitle, CardRow } from "pages/Home/Home.styled";
import Wilder from "components/Wilder/Wilder";
import WILDERS from 'data/wildersData';

const Home = () => {
  return (
    <>
      <SectionTitle>Wilders</SectionTitle>
      <CardRow>
        {WILDERS.map((wilder) => (
          <Wilder
            key={wilder.id}
            firstName={wilder.firstName}
            lastName={wilder.lastName}
            skills={wilder.skills}
            isTrainer={wilder.isTrainer}
          />
        ))}
      </CardRow>
    </>
  );
};

export default Home;