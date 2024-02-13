import Image from "next/image";
import Header from '../components/header';
import HomeComponent from "@/components/home";
import AboutPage from "@/components/about";

export default function Home() {
  return (
    <>
      <Header/>
      <HomeComponent/>
      <AboutPage/>
    </>
  );
}
