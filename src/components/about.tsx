import { Container, Text,Box } from "@radix-ui/themes";

export default function AboutPage(){
    return (
        <>
        <Container size={'4'} className="h-auto" id="about">
            <Text as="p" className="italic text-3xl font-semibold" align={'center'}>ABOUT</Text>
            <Box>
                <Text></Text>
            </Box>
        </Container>
        </>
    )
}