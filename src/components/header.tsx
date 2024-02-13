"use client"

import { Box, Heading, Text,Flex, Link, Avatar } from "@radix-ui/themes"

export default function Header(){
    return (
        <>
            <Box p={'4'} px={'9'} className=" z-50 bg-mauve4 flex justify-between items-center sticky top-0 w-full">
                <Flex align={'center'} gap={'3'}>
                    <Avatar size={'4'} radius="full" className=" bg-mauve4" fallback={'R'} src={'/icon.svg'} />
                    <Heading size={'6'}>RAHUL</Heading>    
                </Flex>
                
                <Flex gap={'5'}>
                    <Link highContrast underline={'hover'} weight={'medium'} href="/">Home</Link>
                    <Link highContrast underline={'hover'} weight={'medium'} href="#about">About</Link>
                    <Link highContrast underline={'hover'} weight={'medium'}>Skills</Link>
                    <Link highContrast underline={'hover'} weight={'medium'}>Services</Link>
                    <Link highContrast underline={'hover'} weight={'medium'}>Projects</Link>
                    <Link highContrast underline={'hover'} weight={'medium'}>Contact</Link>
                </Flex>
            </Box>
        </>
    )
}