import {
  Container,
  Text,
  Flex,
  Box,
  Card,
  Heading,
  Separator,
  Link,
} from "@radix-ui/themes";
import Image from "next/image";
import { ComponentSpacer } from "./spacers";

export default function Projects() {

    const data:ProjectData[] =  [
        {
            title:"MUSIC APP",
            category:"Entertainment",
            technologies:["NextJS","Prisma","TypeScript","Jotai","MongoDB"],
            description:[
                "A Collection of music where anyone can listen to various kind of music.",
                "Jotai statemangement library is used to manage the audio controls throughout the app.",
                "Entirely built on NEXTJS"
            ],
            image:"/projects/music1.png",
            repo:"https://github.com/rahul181203/musicApp/",
            live:"https://musicappdev.vercel.app/"
        },
        {
            title:"Library Management System",
            category:"Management",
            technologies:["React","Axios","Express","MongoDB"],
            description:[
                "A Collection of library book where anyone can request to checkout various kind of books.",
                "Real time request of books and updation of due dates.",
                "Completly a Server less Application"
            ],
            image:"/projects/lms.png",
            repo:"https://github.com/VitMernProject/library-management-system",
            live:"https://library-management-system-gamma-two.vercel.app/"
        },
        {
            title:"Electromart (ongoing)",
            category:"E-Commerce",
            technologies:["NextJS","Axios","NextAuth","Postgress SQL","Prisma"],
            description:[
                "OAUTH login is enabled with google and facebook as well as manual login.",
                "Aiming to Implement the Notification Manager and Payment gateway through stripe.",
                "Completly a Server Application"
            ],
            image:"/projects/electron.png",
            repo:"https://github.com/VitMernProject/library-management-system",
            live:"https://electronmart.vercel.app/"
        }
    ]



  return (
    <>
      <Container
        size={"4"}
        className=" bg-mauve4 h-auto"
        p={"7"}
        id="projects"
      >
        <Text
          as="p"
          align={"center"}
          className=" text-3xl italic font-semibold py-5"
        >
          Projects
        </Text>
        <Flex direction={"column"} gap={'4'}>
            {
                data.map((val,i)=>{
                    return <ProjectComponent key={i} data={val} />
                })
            }
        </Flex>
      </Container>
    </>
  );
}

interface ProjectData{
    "title":string,
    "category":string,
    "technologies":string[],
    "description":string[],
    "image":string,
    "repo":string,
    "live":string
}

const ProjectComponent=({data}:{data:ProjectData})=>{
  return (
    <>
      <Box className="shadow-lg">
        <Card className="relative">
          <Flex justify={"between"} position={"relative"}>
            <Box className="h-auto w-[400px] relative">
              <Image
                className="rounded-lg"
                src={data.image}
                alt="img1"
                layout="fill"
              />
            </Box>
            <Box p={"3"}>
              <Heading size={"6"}>{data.title}</Heading>

              <Text as="div" size="2" color="gray">
                {data.category}
              </Text>
              <Flex align={"center"} gap={"3"}>
                <Text as="div" size="4" weight="bold">
                  Technologies Used:
                </Text>
                {
                    data.technologies.map((val,i)=>{
                        return<>
                        <Text key={i} as="div" size="3" weight={"regular"}>
                            {val}
                        </Text>
                        <Separator orientation="vertical" />
                        </>
                    })
                }
                
              </Flex>
              <ComponentSpacer />
              <ul className="list-disc">
                {
                    data.description.map((val,i)=>{
                        return <li key={i}>{val}</li>
                    })
                }
              </ul>
              <ComponentSpacer />
              <Flex align={"center"} gap={"3"}>
                <Link
                  target="blank"
                  href={data.repo}
                >
                  REPO
                </Link>
                <Separator orientation="vertical" />
                <Link target="blank" href={data.live}>
                  LIVE
                </Link>
              </Flex>
            </Box>
          </Flex>
        </Card>
      </Box>
    </>
  );
}
