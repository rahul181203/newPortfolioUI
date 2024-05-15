import { Container, Grid,Text, Heading } from "@radix-ui/themes";
import SkillCard from './skillCard';


export default function SkillsPage(){
    const skills = [
        "/skills/java.png",
        "/skills/python.png",
        "/skills/html.png",
        "/skills/css.png",
        "/skills/js.webp",
        "/skills/React.webp",
        "/skills/nextjs.png",
        "/skills/api2.png",
        "/skills/git.webp",
        "/skills/flutter.png",
        "/skills/Mongodb.png",
        "/skills/node.webp",
        "/skills/ts.png",
        "/skills/tensorflow.png",
    ];
    return (
        <>
        <Container className="h-auto bg-mauve4" p={'5'} id="skills">
            <Text as="p" className=" text-3xl font-semibold italic" align={'center'}>SKILLS</Text>
            <Container size={'4'} mt={'7'}>
                <Grid columns={{initial:'3',sm:'4',md:"5",lg:"6"}} gap={'9'}>
                    {
                        skills.map((img,i)=>{
                            return <SkillCard key={i} img={img}/>
                        })
                    }
                </Grid>
            </Container>
        </Container>
        </>
    )
}