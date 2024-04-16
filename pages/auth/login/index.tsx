import React from "react";
import LoginForm from "../../../src/components/loginForm/loginForm";
import ImageComponent from "../../../src/components/imageComponent/imageComponent";
import loginImage from "../../../public/login_img.svg";
import PageComponent from "../../../src/components/pageComponent/pageComponent";

const LoginPage: React.FC = () => {
  return (
    <div>
      <PageComponent
        leftSide={<LoginForm />}
        rightSide={
          <ImageComponent
            width={700}
            height={800}
            alt="Welcome image"
            src={loginImage}
          />
        }
      />
    </div>
  );
};

export default LoginPage;
