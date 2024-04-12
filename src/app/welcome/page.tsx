import ImageComponent from "@/components/imageComponent/imageComponent";
import welcomeImage from "../../../public/home_img.svg";
import WelcomeCard from "@/components/welcomeCardComponent/welcomeCardComponent";
import PageComponent from "@/components/pageComponent/pageComponent";

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
