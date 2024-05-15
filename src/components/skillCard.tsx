import { Flex,Box,Text } from "@radix-ui/themes";
import Image from "next/image";


export default function SkillCard({img}:{img:string}){
    return (
        <>
            <Flex align={'center'} justify={'center'} className="shadow-2xl w-[100px] h-[100px] rounded-full hover:translate-y-[-20px] hover:duration-300 ease-in-out relative p-2" color="black">
                <Image src={img} alt="img" height={'100'} width={'100'} layout="responsive" className="p-3"/>
            </Flex>

        </>
    );
}
