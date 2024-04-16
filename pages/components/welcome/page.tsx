import ImageComponent from "../imageComponent/imageComponent";
import welcomeImage from "../../../public/home_img.svg";
import WelcomeCard from "../welcomeCardComponent/welcomeCardComponent";
import PageComponent from "../pageComponent/pageComponent";

interface WelcomeProps {}

const Welcome: React.FC<WelcomeProps> = () => {
  return (
    <PageComponent
      leftSide={<WelcomeCard />}
      rightSide={
        <ImageComponent
          width={700}
          height={800}
          alt="Welcome image"
          src={welcomeImage}
        />
      }
    />
  );
};

export default Welcome;
