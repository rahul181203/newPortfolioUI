import Image from "next/image";
import Header from '../components/header';
import HomeComponent from "@/components/home";
import AboutPage from "@/components/about";
import SkillsPage from "@/components/skills";
import { SectionSpacer } from "@/components/spacers";

export default function Home() {
  return (
    <>
      <Header/>
      <HomeComponent/>
      <SectionSpacer/>
      <SkillsPage/>
      {/* <AboutPage/> */}
    </>
  );
}
