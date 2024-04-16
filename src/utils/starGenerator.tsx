import Image from "next/image";
import WhiteStar from "../../public/white_star.svg";
import BlueStar from "../../public/blue_star.svg";

export default function starGenerator(rating: number) {
  if (!rating) {
    return (
      <div>
        <h1>No hay rating para mostrar</h1>
      </div>
    );
  }

  const numOfStar = rating;
  const blueStars = Array.from({ length: numOfStar }, (_, i) => (
    <Image key={i} src={BlueStar} alt="Blue Star" width={20} height={20} />
  ));

  const whiteStars = Array.from({ length: 5 - numOfStar }, (_, i) => (
    <Image
      key={numOfStar + i}
      src={WhiteStar}
      alt="White Star"
      width={20}
      height={20}
    />
  ));

  return (
    <div className="flex">
      {blueStars}
      {whiteStars}
    </div>
  );
}
