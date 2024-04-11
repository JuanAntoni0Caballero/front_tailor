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
{
  /* <div className="flex items-end justify-center  w-1/2 h-screen ">
        <WelcomeCard />
      </div>
      <div className="flex items-center justify-center w-1/2 h-screen">
        <ImageComponent
          width={700}
          height={800}
          alt="Welcome image"
          src={welcomeImage}
        />
      </div> */
}
