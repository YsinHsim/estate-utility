"use client";
import { motion } from 'framer-motion';
import React from 'react';

import { Stack, Typography, Box, Button } from '@mui/material';


export default function Utility({ isSmartphone }) {

    //===============================================================   section:function
    const handleButtonChangeBand = () => {
        window.open('/pdf/Panduan_Tukar_Band_Internet_protected.pdf', '_blank');
    };
    const handleButtonBlockWebsite = () => {
        window.open('/pdf/Panduan_Block_Website_Selain_Urusan_Kerja_protected.pdf', '_blank');
    };
    const handleButtonCheckInternetSpeed = () => {
        window.open('https://www.highspeedinternet.com/tools/speed-test');
    };
    const handleButtonTranslateDocument = () => {
        window.open('https://translate.google.com.my/');
    };
    const handleButtonChangeBandCode = () => {
        window.open('/pdf/Code_Tukar_Band.pdf', '_blank');
    };




    //===============================================================   section:view
    return (
        <motion.div
            initial={isSmartphone ? { opacity: 0, x: '100%' } : {}}
            animate={isSmartphone ? { opacity: 1, x: 0 } : {}}
            transition={isSmartphone ? { duration: 1, delay: 0 } : {}}
        >
            <Box sx={{
                p: 1.5,
                bgcolor: '#D6EAF8',
                borderRadius: 0.5,
            }}>
                <Typography variant={isSmartphone ? "body1" : "body2"} sx={{
                    pb: 1.5, color: 'black',
                }}>Panduan Pengaturan Internet</Typography>
                <Stack direction="column" spacing={1}>
                    <motion.div
                        initial={isSmartphone ? { opacity: 0, x: '100%' } : {}}
                        animate={isSmartphone ? { opacity: 1, x: 0 } : {}}
                        transition={isSmartphone ? { duration: 1, delay: 0 } : {}}
                    >
                        <Button
                            fullWidth
                            variant="contained"
                            size="small"
                            sx={{
                                bgcolor: '#CB4335',
                                '&:hover': {
                                    bgcolor: '#E74C3C'
                                }
                            }}
                            onClick={handleButtonChangeBand}
                        >
                            Panduan Tukar Band Internet
                        </Button>
                    </motion.div>
                    <motion.div
                        initial={isSmartphone ? { opacity: 0, x: '100%' } : {}}
                        animate={isSmartphone ? { opacity: 1, x: 0 } : {}}
                        transition={isSmartphone ? { duration: 1, delay: 0.2 } : {}}
                    >
                        <Button
                            fullWidth
                            variant="contained"
                            size="small"
                            sx={{
                                bgcolor: '#2471A3',
                                '&:hover': {
                                    bgcolor: '#2980B9'
                                }
                            }}
                            onClick={handleButtonBlockWebsite}
                        >
                            Panduan Block Website
                        </Button>
                    </motion.div>
                    <motion.div
                        initial={isSmartphone ? { opacity: 0, x: '100%' } : {}}
                        animate={isSmartphone ? { opacity: 1, x: 0 } : {}}
                        transition={isSmartphone ? { duration: 1, delay: 0.4 } : {}}
                    >
                        <Button
                            fullWidth
                            variant="contained"
                            size="small"
                            sx={{
                                bgcolor: '#28B463',
                                '&:hover': {
                                    bgcolor: '#2ECC71'
                                }
                            }}
                            onClick={handleButtonCheckInternetSpeed}
                        >
                            Semak Kelajuan Internet
                        </Button>
                    </motion.div>
                    <motion.div
                        initial={isSmartphone ? { opacity: 0, x: '100%' } : {}}
                        animate={isSmartphone ? { opacity: 1, x: 0 } : {}}
                        transition={isSmartphone ? { duration: 1, delay: 0.6 } : {}}
                    >
                        <Button
                            fullWidth
                            variant="contained"
                            size="small"
                            sx={{
                                bgcolor: '#D4AC0D',
                                '&:hover': {
                                    bgcolor: '#F1C40F'
                                }
                            }}
                            onClick={handleButtonTranslateDocument}
                        >
                            Terjemahan Dokumen
                        </Button>
                    </motion.div>
                    <motion.div
                        initial={isSmartphone ? { opacity: 0, x: '100%' } : {}}
                        animate={isSmartphone ? { opacity: 1, x: 0 } : {}}
                        transition={isSmartphone ? { duration: 1, delay: 0.8 } : {}}
                    >
                        <Button
                            fullWidth
                            variant="contained"
                            size="small"
                            sx={{
                                bgcolor: 'gray',
                                '$:hover': {
                                    bgcolor: 'black',
                                }
                            }}
                            onClick={handleButtonChangeBandCode}
                        >
                            Code Tukar Band
                        </Button>
                    </motion.div>
                </Stack>
            </Box>
        </motion.div>
    )
}