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
    <div className="h-80 p-10 bg-gray-200 rounded-xl m-10 flex flex-col justify-between">
      <LogoComponent color="black" height={100} width={100} />
      <div>
        <h3 className="text-4xl font-sans font-thin">Hola,</h3>
        <h3 className="text-4xl font-sans font-thin">
          Bienvenido a la prueba de Tailor hub, en ella has de añadir los
          restaurantes favoritos donde te gustaría ir en tu onboarding.
        </h3>
      </div>
      <ButtonComponent
        type="button"
        text="Entrar"
        textColor="black"
        borderColor="red-600"
        onClick={handleToSignIn}
      />
    </div>
  );
};

export default WelcomeCard;
