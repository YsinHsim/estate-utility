"use client";

import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { Typography, Box, AppBar, Toolbar, Stack, Tooltip } from '@mui/material';

import ChangeDocumentFormat from './changeDocumentFormat';
import Utility from './utility';
import MoreInfo from './moreInfo';
import Suggestion from './suggestion';


export default function Home() {
    //===============================================================   section:variable
    const [isLoading, setIsLoading] = useState(true);
    const [isSmartphone, setIsSmartphone] = useState(false);

    //===============================================================   section:useEffect
    useEffect(() => {
        checkIfSmartphone();
    })
    // Simulate loading delay (you can remove this in a real-world scenario)
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);  // Hide loading screen after a delay (e.g., 2 seconds)
        }, 500); // 2-second loading screen
    }, []);

    //===============================================================   section:function
    const checkIfSmartphone = () => {
        if (window.innerWidth <= 844) {
            setIsSmartphone(true);
        } else {
            setIsSmartphone(false);
        }
    }

    if (isLoading) {
        // Display loading screen
        return (
            <Box sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                bgcolor: 'rgba(255, 255, 255, 0.8)',  // Semi-transparent background
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <img
                    src="/image/cat-loading.gif"
                    alt="Loading..."
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain',  // Ensures the image fits inside the box while maintaining aspect ratio
                        transform: isSmartphone ? 'scale(1)' : 'scale(0.6)',
                        transition: 'transform 0.5s ease', // Smooth transition for zoom effect
                    }}
                />
            </Box>
        );
    }

    //===============================================================   section:view
    return (
        <>
            <Box sx={{
                height: '100vh',
                display: 'flex',
                flexDirection: 'column'
            }}>
                <AppBar position="static" sx={{
                    bgcolor: '#16A085'
                }}>
                    <Toolbar variant="dense" sx={{ display: 'flex' }}>
                        <Box sx={{ flexGrow: 1 }}>
                            <Typography variant="h6">Estate Utility</Typography>
                        </Box>
                        < Suggestion isSmartphone={isSmartphone} />
                        <Tooltip title="Ketahui lebih lanjut" placement="left">
                            <MoreInfo isSmartphone={isSmartphone} />
                        </Tooltip>
                    </Toolbar>
                </AppBar>
                <Box sx={{
                    flexGrow: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    bgcolor: '#E8F6F3'
                }}>
                    <Box sx={{
                        p: 2,
                    }}>
                        <Stack direction={isSmartphone ? "column" : "row"} spacing={isSmartphone ? 3.0 : 1.5}>
                            <ChangeDocumentFormat isSmartphone={isSmartphone} />
                            <Utility isSmartphone={isSmartphone} />
                        </Stack>
                    </Box>
                </Box>
                <Box sx={{
                    bgcolor: '#E8F6F3',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <Box sx={{
                        py: 1,

                    }}>
                        <motion.div
                            initial={{ opacity: 0, x: '100%' }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 4 }}
                        >
                            <Typography variant="caption" sx={{
                                color: '#566573'
                            }}>&copy; 2024 Estate Utility. Khas Untuk Kegunaan Estate.</Typography>
                        </motion.div>
                    </Box>
                </Box>
            </Box>
        </>
    );
}