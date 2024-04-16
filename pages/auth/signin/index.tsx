import React from "react";
import SignInForm from "../../../src/components/signInForm/signInForm";
import ImageComponent from "../../../src/components/imageComponent/imageComponent";
import signInImage from "../../../public/signIn_img.svg";
import PageComponent from "../../../src/components/pageComponent/pageComponent";

const SignUpPage: React.FC = () => {
  return (
    <div>
      <PageComponent
        leftSide={<SignInForm />}
        rightSide={
          <ImageComponent
            width={700}
            height={800}
            alt="Welcome image"
            src={signInImage}
          />
        }
      />
    </div>
  );
};

export default SignUpPage;
