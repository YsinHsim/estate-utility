"use client";

import React from 'react';

import { Stack, Typography, Box, Button } from '@mui/material';


export default function Utility() {

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




    //===============================================================   section:view
    return(
        <Box sx={{
            p:1.5,
            bgcolor: '#D6EAF8',
            borderRadius: 0.5,
        }}>
            <Typography variant="body2" sx={{
                pb:1.5
            }}>Panduan Pengaturan Internet</Typography>
            <Stack direction="column" spacing={1}>
                <Button
                    variant="contained"
                    size="small"
                    sx={{
                        bgcolor: '#CB4335',
                        '&:hover':{
                            bgcolor: '#E74C3C'
                        }
                    }}
                    onClick={handleButtonChangeBand}
                >
                    Panduan Tukar Band Internet
                </Button>
                <Button
                    variant="contained"
                    size="small"
                    sx={{
                        bgcolor: '#2471A3',
                        '&:hover':{
                            bgcolor: '#2980B9'
                        }
                    }}
                    onClick={handleButtonBlockWebsite}
                >
                    Panduan Block Website
                </Button>
                <Button 
                    variant="contained"
                    size="small"
                    sx={{
                        bgcolor: '#28B463',
                        '&:hover':{
                            bgcolor: '#2ECC71'
                        }
                    }}
                    onClick={handleButtonCheckInternetSpeed}
                >
                    Semak Kelajuan Internet
                </Button>
                <Button 
                    variant="contained"
                    size="small"
                    sx={{
                        bgcolor: '#D4AC0D',
                        '&:hover':{
                            bgcolor: '#F1C40F'
                        }
                    }}
                    onClick={handleButtonTranslateDocument}
                >
                    Terjemahan Dokumen
                </Button>
            </Stack>
        </Box>
    )
}