"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Typography, Box, AppBar, Toolbar, Stack, Tooltip, Button } from '@mui/material';

import ChangeDocumentFormat from './changeDocumentFormat';
import Utility from './utility';
import MoreInfo from './moreInfo';
import Suggestion from './suggestion';


export default function Home() {



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
                            <Typography variant="body1">Estate Utility</Typography>
                        </Box>
                        < Suggestion />
                        <Tooltip title="Ketahui lebih lanjut" placement="left">
                            <MoreInfo />
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
                        <Stack direction="row" spacing={1.5}>
                            <ChangeDocumentFormat />
                            <Utility />
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
