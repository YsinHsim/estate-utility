"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Box, Typography, Stack, Button, } from '@mui/material';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function ChangeDocumentFormat({ isSmartphone }) {

    //===============================================================   section:function
    const handleButtonWordToPdf = () => {
        window.open('https://www.ilovepdf.com/word_to_pdf');
    };
    const handleButtonPdfToWord = () => {
        window.open('https://www.ilovepdf.com/pdf_to_word');
    };
    const handleButtonExcelToPdf = () => {
        window.open('https://www.ilovepdf.com/excel_to_pdf');
    };
    const handleButtonJpgToPdf = () => {
        window.open('https://www.ilovepdf.com/jpg_to_pdf');
    };


    //===============================================================   section:view
    return (
        <Box sx={{
            p: 1.5,
            bgcolor: '#D6EAF8',
            borderRadius: 0.5,
        }}>
            <Typography variant="body2" sx={{
                pb: 1.5
            }}>Tukar Format Dokumen</Typography>
            <Stack direction="column" spacing={1}>
                <motion.div
                    initial={isSmartphone ? { opacity: 0, x: '-100%' } : {}}
                    animate={isSmartphone ? { opacity: 1, x: 0 } : {}}
                    transition={isSmartphone ? { duration: 1, delay: 0 } : {}}
                >
                    <Button
                        fullWidth
                        variant="contained"
                        size="small"
                        onClick={handleButtonWordToPdf}
                        sx={{
                            bgcolor: '#CB4335',
                            '&:hover': {
                                bgcolor: '#E74C3C'
                            }
                        }}
                    >
                        WORD <ArrowForwardIcon sx={{ px: 1 }} /> PDF
                    </Button>
                </motion.div>
                <motion.div
                    initial={isSmartphone ? { opacity: 0, x: '-100%' } : {}}
                    animate={isSmartphone ? { opacity: 1, x: 0 } : {}}
                    transition={isSmartphone ? { duration: 1, delay: 0.2 } : {}}
                >
                    <Button
                        fullWidth
                        variant="contained"
                        size="small"
                        onClick={handleButtonPdfToWord}
                        sx={{
                            bgcolor: '#2471A3',
                            '&:hover': {
                                bgcolor: '#2980B9'
                            }
                        }}
                    >
                        PDF <ArrowForwardIcon sx={{ px: 1 }} /> WORD
                    </Button>
                </motion.div>
                <motion.div
                    initial={isSmartphone ? { opacity: 0, x: '-100%' } : {}}
                    animate={isSmartphone ? { opacity: 1, x: 0 } : {}}
                    transition={isSmartphone ? { duration: 1, delay: 0.4 } : {}}
                >
                    <Button
                        fullWidth
                        variant="contained"
                        size="small"
                        onClick={handleButtonExcelToPdf}
                        sx={{
                            bgcolor: '#28B463',
                            '&:hover': {
                                bgcolor: '#2ECC71'
                            }
                        }}
                    >
                        EXCEL <ArrowForwardIcon sx={{ px: 1 }} /> PDF
                    </Button>
                </motion.div>
                <motion.div
                    initial={isSmartphone ? { opacity: 0, x: '-100%' } : {}}
                    animate={isSmartphone ? { opacity: 1, x: 0 } : {}}
                    transition={isSmartphone ? { duration: 1, delay: 0.6 } : {}}
                >
                    <Button
                        fullWidth
                        variant="contained"
                        size="small"
                        onClick={handleButtonJpgToPdf}
                        sx={{
                            bgcolor: '#D4AC0D',
                            '&:hover': {
                                bgcolor: '#F1C40F'
                            }
                        }}
                    >
                        JPG <ArrowForwardIcon sx={{ px: 1 }} /> PDF
                    </Button>
                </motion.div>
            </Stack>
        </Box>
    );
}