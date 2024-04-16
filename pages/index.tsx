import LogoComponent from "../src/components/logoComponent/logoComponent";
import Link from "next/link";

interface HomeProps {}
const Home: React.FC<HomeProps> = () => {
  return (
    <section className="flex min-h-screen  items-center justify-center p-24 bg-gray-200">
      <div className="hover:bg-blue-200 p-5 rounded-2xl">
        <Link href="/welcome">
          <LogoComponent color="black" width={150} height={150} />
        </Link>
      </div>
    </section>
  );
};

export default Home;
