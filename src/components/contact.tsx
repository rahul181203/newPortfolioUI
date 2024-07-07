"use client"
import { Box, Button, Container,Text,TextArea,TextField} from "@radix-ui/themes";

export default function Contact(){
    return (
        <>
        <Container className="h-auto bg-mauve1" p={'5'} id="contact">
            <Text as="p" className=" text-3xl font-semibold italic" align={'center'}>Contact</Text>
            <Box className="shadow-xl p-3 backdrop-blur-sm bg-black/5 rounded-sm">
                <form action="mailto:rahulkanakam135@gmail.com" method="post" encType="text/plain">
                    <Box className="m-2">
                        <label>Name</label>
                        <TextField.Input type="text" placeholder="Enter your name"></TextField.Input>
                    </Box>
                    <Box className="m-2">
                        <label>Email</label>
                        <TextField.Input type="text" placeholder="Enter your email"></TextField.Input>
                    </Box>
                    <Box className="m-2">
                        <label>Message</label>
                        <TextArea placeholder="enter msg"></TextArea>
                    </Box>
                    <Box className="m-2">
                        <Button type="submit">Send</Button>
                    </Box>
                </form>
            </Box>
        </Container>
        </>
    )
}