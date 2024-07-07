import { Container, Text,Box,Flex } from "@radix-ui/themes";
import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';

export default function AboutPage(){
    return (
        <>
        <Container size={'4'} className="h-auto" id="about">
            <Text as="p" className="italic text-3xl font-semibold" align={'center'}>ABOUT</Text>
            <Flex justify={'center'} align={'center'}>
            <Timeline position="right">
                <TimelineItem>
                <TimelineOppositeContent color="text.secondary">
                    </TimelineOppositeContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent color="text.secondary">
                    2018 - 2019
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot color="secondary" />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>Completed 10th standard with 10GPA </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent color="text.secondary">
                    2019 - 2021
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                    <TimelineDot color="primary" />
                    <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>Completed Intermediate in MPC domain with 87.4%</TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent color="text.secondary">
                    2021 - 2025
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                    <TimelineDot color="warning" />
                    <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>Studying B.Tech in Computer Science and Engineering holding with 8.99 CGPA </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent color="text.secondary">
                    Dec 2021 
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                    <TimelineDot color="error"/>
                    <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>Started Freelancing in mobile application.</TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent color="text.secondary">
                    Sep 2023 - Oct 2023
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                    <TimelineDot color="secondary"/>
                    </TimelineSeparator>
                    <TimelineContent>Started Internship as JR.Flutter Developer in Oruphones.</TimelineContent>
                </TimelineItem>
                </Timeline>
            </Flex>
        </Container>
        </>
    )
}


