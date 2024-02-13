import { Box, Button, Container, Flex, Text } from "@radix-ui/themes";
import Image from "next/image";

export default function HomeComponent(){
    return (
        <>
            <Container id="home" size={'4'} className="h-[88vh] relative bg-mauve4">
                <Flex align={'center'} justify={'between'} className="relative top-6">
                    <Flex direction={'column'} gap={'4'}>
                        <div className="flex items-baseline gap-3">
                            <span className="w-[6%] h-[3px] bg-mauve10" ></span>
                            <Text>HELLO</Text>
                        </div>
                        <div className=" text-6xl font-semibold" >{`I'm`}<span className=" text-indigo10">{" Rahul Sai"}</span></div>
                        <Text className="w-[40vw]">{`I'm Rahul Sai a passionate web evelopper and Flutter Developper living in India, looking for work around the world`}</Text>
                        <Button size={'3'} className="w-fit" color={'gold'}><a href="/cv.pdf" download={"Rahul Resume"} target="_blank" >Download CV</a></Button>
                    </Flex> 
                    <Image className="rounded-full" src={"/mimoji.avif"} alt="pic" height={'400'} width={'400'} />
                </Flex>

                <Box className="absolute bottom-14 left-24">
                    <Flex gap={'4'}>
                        <a href="https://github.com/rahul181203" target="_blank" ><Image alt="github" src={"/github.svg"} height={'25'} width={'25'} /></a>
                        <a href="https://www.instagram.com/kanakam_rahul_sai/" target="_blank"><Image alt="Instagram" src={"/insta.svg"} height={'25'} width={'25'}  /></a>
                        <a href="https://twitter.com/RahulSa03005228" target="_blank"><Image alt="Twitter" src={"/x.svg"} height={'25'} width={'25'} /></a>
                        <a href="https://www.linkedin.com/in/rahul-sai-kanakam-b8240b229/" target="_blank"><Image alt="Twitter" src={"/linkdin.webp"} height={'25'} width={'25'} /></a>
                    </Flex>
                </Box>
            </Container>
        </>
    )
}