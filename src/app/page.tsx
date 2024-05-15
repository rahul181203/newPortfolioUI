import Image from "next/image";
import Header from '../components/header';
import HomeComponent from "@/components/home";
import AboutPage from "@/components/about";
import SkillsPage from "@/components/skills";
import { SectionSpacer } from "@/components/spacers";
import Certificates from "@/components/certificates";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <>
      <Header/>
      <HomeComponent/>
      <SectionSpacer/>
      <AboutPage/>
      <SectionSpacer/>
      <SkillsPage/>
      <SectionSpacer/>
      <Certificates/>
      <SectionSpacer/>
      <Projects/>
      {/* <AboutPage/> */}
    </>
  );
}
