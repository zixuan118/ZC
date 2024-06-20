import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const LoveContainer = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 80px 20px;
    background: linear-gradient(135deg, #c3b6d8 0%, #e2dfe2 100%);
    min-height: 100vh;
    opacity: 0;
    transform: translateY(50px);
    transition: opacity 0.5s, transform 0.5s;
`;

const Title = styled(motion.h2)`
    font-size: 2.5em;
    margin-bottom: 20px;
    color: #333333;
    text-align: center;
`;

const Timeline = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const TimelineItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 20px;
    position: relative;
    padding-left: 40px;
    &::before {
        content: '';
        position: absolute;
        left: 20px;
        top: 0;
        bottom: 0;
        width: 2px;
        background-color: #333;
    }
`;

const Date = styled(motion.div)`
    font-size: 1.2em;
    font-weight: bold;
    color: #333;
    margin-bottom: 10px;
`;

const Content = styled(motion.div)`
    font-size: 1em;
    color: #666;
    background-color: #e6e8e6;
    padding: 10px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Image = styled.img`
    width: 100px;
    height: auto;
    border-radius: 5px;
    margin-top: 10px;
    cursor: pointer;
`;

const Love = () => {
    const timelineData = [
        {
            date: '2023-10-02',
            content: 'Our first conversation.',
        },
        {
            date: '2023-11-06',
            content: 'I took you home, and you introduced me to Nagomi Izakaya.',
            image: `${process.env.PUBLIC_URL}/images/2ba017f517c5196727a1707713a3b25f.JPG`,
        },
        {
            date: '2023-11-27',
            content: 'You shared a CAS concert video with me. You said you love sunsetz the most.',
        },
        {
            date: '2023-11-29',
            content: 'We planned to chase the aurora together.',
        },
        {
            date: '2023-11-30',
            content: 'We went aurora hunting. Though we didn\'t see it, I loved spending time with you.',
        },
        {
            date: '2023-12-02',
            content: 'A day in Providence. The fruit tart was sold out, but the evening was sweet with drinks together.',
            image: `${process.env.PUBLIC_URL}/images/4eb3e00dbf4d54b1d657d87c56e733d0.JPG`,
        },
        {
            date: '2023-12-09',
            content: 'At Fenway, we became a couple. ❤️',
        },
        {
            date: '2023-12-18',
            content: 'We attended our last class together.',
        },
        {
            date: '2023-12-24',
            content: 'Christmas together at Leo.',
            image: `${process.env.PUBLIC_URL}/images/3dcb9ea6bd69e320f253bc518e856e99.JPG`,
        },
        {
            date: '2023-12-31',
            content: 'New Year\'s Eve fireworks, welcoming the new year together.',
            image: `${process.env.PUBLIC_URL}/images/39efb03861adf8b787d606059016b4c3.JPG`,
        },
        {
            date: '2024-01-05',
            content: 'A trip to Newport.',
        },
        {
            date: '2024-01-07',
            content: 'Snow day fun with Bing Bing.',
        },
        {
            date: '2024-01-09',
            content: 'One month together. ❤️',
            image: `${process.env.PUBLIC_URL}/images/94e7128c8233177edff9fbccdfde154a.JPG`,
        },
        {
            date: '2024-01-18',
            content: 'We celebrated my birthday together.',
        },
        {
            date: '2024-02-09',
            content: 'Two months together, making dumplings. ❤️',
            image: `${process.env.PUBLIC_URL}/images/0c9617367bd8b17b66108e6c64464c38.jpg`,
        },
        {
            date: '2024-02-14',
            content: 'Valentine\'s Day at a Russian restaurant.',
        },
        {
            date: '2024-03-09',
            content: 'Three months together, enjoying tiramisu from an Italian restaurant. ❤️',
        },
        {
            date: '2024-04-09',
            content: 'Four months together, celebrated with Tous Les Jours. ❤️',
        },
        {
            date: '2024-05-07',
            content: 'A trip to Flushing, enjoying Malu Bianbian.',
        },
        {
            date: '2024-05-09',
            content: 'Five months together. ❤️',
        },
        {
            date: '2024-05-20',
            content: 'You attended my graduation ceremony.',
        },
        {
            date: '2024-06-09',
            content: 'Half a year together, even though you\'re in China. ❤️',
        },
        {
            date: 'To be continued',
            content: '...',
        }
    ];

    return (
        <LoveContainer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <Title
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
            >
                Love
            </Title>
            <Timeline>
                {timelineData.map((item, index) => (
                    <TimelineItem key={index}>
                        <Date
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.5 * index }}
                        >
                            {item.date}
                        </Date>
                        <Content
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.5 * index }}
                        >
                            {item.content}
                            {item.image && <Image src={item.image} alt={item.date} />}
                        </Content>
                    </TimelineItem>
                ))}
            </Timeline>
        </LoveContainer>
    );
};

export default Love;
