"use client";
import LogoComponent from "./components/logoComponent/logoComponent";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface HomeProps {}
const Home: React.FC<HomeProps> = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/welcome");
    }, 3000);
  }, []);
  return (
    <section className="flex min-h-screen  items-center justify-center p-24 bg-gray-200">
      <LogoComponent color="black" width={150} height={150} />
    </section>
  );
};

export default Home;
