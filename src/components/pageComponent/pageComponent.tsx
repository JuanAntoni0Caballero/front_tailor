import ImageComponent from "@/components/imageComponent/imageComponent";
import welcomeImage from "../../../public/home_img.svg";
import WelcomeCard from "@/components/welcomeCardComponent/welcomeCardComponent";

interface PageComponentProps {
  leftSide: any;
  rightSide: any;
}

const PageComponent: React.FC<PageComponentProps> = ({
  leftSide,
  rightSide,
}) => {
  return (
    <section className="flex min-h-screen  items-center justify-center">
      <div className="flex items-end justify-center  w-1/2 h-screen ">
        {leftSide}
      </div>
      <div className="flex items-center justify-center w-1/2 h-screen">
        {rightSide}
      </div>
    </section>
  );
};

export default PageComponent;
