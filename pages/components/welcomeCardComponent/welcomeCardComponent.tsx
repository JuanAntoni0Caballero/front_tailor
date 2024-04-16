"use client";
import ButtonComponent from "../buttonComponent/buttonComponent";
import LogoComponent from "../logoComponent/logoComponent";
import { useRouter } from "next/navigation";

interface WelcomeCardProps {}

const WelcomeCard: React.FC<WelcomeCardProps> = () => {
  const router = useRouter();

  const handleToSignIn = () => {
    router.push("/auth/signin");
  };

  return (
    <div className="p-5 md:p-8 lg:p-10 bg-gray-200 rounded-xl mb-10 flex flex-col items-start">
      <div className="mb-6">
        <LogoComponent color="black" height={100} width={100} />
      </div>
      <div className="text-left mb-6">
        <h3 className="text-2xl md:text-3xl font-sans font-thin mb-2">Hola,</h3>
        <h3 className="text-2xl md:text-3xl font-sans font-thin mb-2">
          Bienvenido a la prueba de Tailor hub, en ella has de añadir los
          restaurantes favoritos donde te gustaría ir en tu onboarding.
        </h3>
      </div>
      <div className="mt-4">
        <ButtonComponent
          type="button"
          text="Entrar"
          textColor="black"
          borderColor="black"
          onClick={handleToSignIn}
        />
      </div>
    </div>
  );
};

export default WelcomeCard;
