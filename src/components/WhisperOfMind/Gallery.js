import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Modal from 'react-modal';
import { useState } from 'react';

const GalleryContainer = styled(motion.div)`
    padding: 80px 20px;
    text-align: center;
    background-color: #e6e8e6;
    min-height: 100vh;
`;

const Title = styled.h2`
    font-size: 2.5em;
    margin-bottom: 20px;
    color: #333333;
`;

const ImagesGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 20px;
    margin-bottom: 40px;
`;

const ImageWrapper = styled.div`
    cursor: pointer;
`;

const Image = styled.img`
    width: 100%;
    border-radius: 10px;
    transition: transform 0.3s;
    &:hover {
        transform: scale(1.05);
    }
`;

const VideoWrapper = styled.div`
    margin-top: 40px;
`;

const Video = styled.video`
    width: 50%;
    border-radius: 10px;
`;

const ModalContent = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const CloseButton = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: #fff;
    border: none;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    cursor: pointer;
    font-size: 1.5em;
    line-height: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #333;
    &:hover {
        background-color: #f0f0f0;
    }
`;

Modal.setAppElement('#root');

const Gallery = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalContent, setModalContent] = useState(null);

    const images = [
        '/images/R0001149 2.JPG',
        '/images/R0001374 2.JPG',
        '/images/R0001153 2.JPG',
    ];

    const openModal = (content) => {
        setModalContent(
            <ModalContent>
                {content}
                <CloseButton onClick={closeModal}>&times;</CloseButton>
            </ModalContent>
        );
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
        setModalContent(null);
    };

    return (
        <GalleryContainer
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
        >
            <Title>Gallery</Title>
            <ImagesGrid>
                {images.map((src, index) => (
                    <ImageWrapper key={index} onClick={() => openModal(<img src={src} alt={`Gallery image`} />)}>
                        <Image src={src} alt={`Gallery image`} />
                    </ImageWrapper>
                ))}
            </ImagesGrid>
            <VideoWrapper>
                <Video controls>
                    <source src="/videos/Apple_Nov15_ZC.MP4" type="video/mp4" />
                    Your browser does not support the video tag.
                </Video>
            </VideoWrapper>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={{
                    content: {
                        top: '50%',
                        left: '50%',
                        right: 'auto',
                        bottom: 'auto',
                        marginRight: '-50%',
                        transform: 'translate(-50%, -50%)',
                        maxHeight: '90vh',
                        overflowY: 'auto'
                    },
                }}
            >
                {modalContent}
            </Modal>
        </GalleryContainer>
    );
};

export default Gallery;
