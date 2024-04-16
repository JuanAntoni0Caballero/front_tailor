import Image from "next/image";
import WhiteStar from "../../../../public/white_star.svg";
import ButtonComponent from "../buttonComponent/buttonComponent";

const NewCommentBox = () => {
  return (
    <div className="border border-black rounded-2xl p-4">
      <div className="flex">
        <Image src={WhiteStar} width={20} height={20} alt="star" />
        <Image src={WhiteStar} width={20} height={20} alt="star" />
        <Image src={WhiteStar} width={20} height={20} alt="star" />
        <Image src={WhiteStar} width={20} height={20} alt="star" />
        <Image src={WhiteStar} width={20} height={20} alt="star" />
      </div>
      <h3>Escribe tu comentario sobre el restaurante</h3>
      <ButtonComponent
        text="Enviar"
        textColor="black"
        borderColor="black"
        type="button"
      />
    </div>
  );
};
export default NewCommentBox;
