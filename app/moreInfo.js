"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';

import { Dialog, DialogContent, DialogTitle, IconButton, Typography, Box, Stack } from '@mui/material';

import InfoIcon from '@mui/icons-material/Info';
import CloseIcon from '@mui/icons-material/Close';


export default function MoreInfo() {

    //===============================================================   section:variable
    const [openDialog, setOpenDialog] = useState(false);




    //===============================================================   section:function
    const handleClickOpen = () => {
        setOpenDialog(true);
    };
    const handleClose = () => {
        setOpenDialog(false);
    };



    //===============================================================   section:view
    return (
        <>
            <IconButton sx={{
                size: "small",
                '&:hover': {
                    color: '#D0D3D4',
                },
                transition: 'all 1s ease',
            }}
                onClick={handleClickOpen}>
                <InfoIcon />
            </IconButton>


            <Dialog open={openDialog} onClose={handleClose} sx={{
                '&MuiDialogContent-root': {
                    p: 2
                }
            }}
                fullScreen>
                <DialogTitle>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center', // Center content horizontally
                        width: '100%', // Ensures the Box takes full width
                    }}>
                        <Typography variant="body1" sx={{
                            textAlign: 'center', // Center the text
                            py: 0.5,
                            pl: 1,
                            flexGrow: 1,
                            fontWeight: 'bold',
                            color: '#34495E'
                        }}>
                            Maklumat Lanjut
                        </Typography>
                        <IconButton sx={{
                            size: "small",
                            color: "#CB4335",
                            '&:hover': {
                                bgcolor: "#EC7063",
                                color: 'white'
                            },
                            transition: 'all 1s ease',
                            p: 0.5
                        }}
                            onClick={handleClose}>
                            <CloseIcon />
                        </IconButton>
                    </Box>
                </DialogTitle>
                <DialogContent>
                    <Box sx={{
                        height: '84vh',
                        bgcolor: '#D0ECE7',
                        borderRadius: 0.5,
                        pl: 1
                    }}>
                        <Stack direction="row" spacing={4} sx={{
                            pt: 6, px: 4
                        }}>
                            <Box>
                                <motion.div
                                    initial={{ opacity: 0, y: '-100%' }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 2 }}
                                >
                                    <Typography variant="body1" sx={{
                                        pt: 3, fontWeight: 'bold', color: '#34495E'
                                    }} noWrap>Platform dan Teknologi yang Digunakan</Typography>

                                </motion.div>
                                <Box sx={{
                                    pt: 5, px: 6
                                }}>
                                    <motion.div
                                        initial={{ opacity: 0, y: '100%' }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 3 }}
                                    >
                                        <Stack direction="row" spacing={1.5}>
                                            <IconButton disabled>
                                                <img
                                                    src="/image/reactjs.png"
                                                    alt="Reactjs Logo"
                                                    style={{ width: 60, height: 60 }}
                                                />
                                            </IconButton>
                                            <IconButton disabled>
                                                <img
                                                    src="/image/javascript.png"
                                                    alt="Javascript Logo"
                                                    style={{ width: 60, height: 60 }}
                                                />
                                            </IconButton>
                                        </Stack>
                                    </motion.div>
                                    <motion.div
                                        initial={{ opacity: 0, y: '100%' }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 3, delay: 0.5 }}
                                    >
                                        <Stack direction="row" spacing={1.5} sx={{ pt: 2 }}>
                                            <IconButton disabled>
                                                <img
                                                    src="/image/nextjs.png"
                                                    alt="Nextjs Logo"
                                                    style={{ width: 60, height: 60 }}
                                                />
                                            </IconButton>
                                            <IconButton disabled>
                                                <img
                                                    src="/image/framer-motion.webp"
                                                    alt="FramerMotion Logo"
                                                    style={{ width: 60, height: 60 }}
                                                />
                                            </IconButton>
                                        </Stack>
                                    </motion.div>
                                </Box>
                            </Box>
                            <Box>
                                <motion.div
                                    initial={{ opacity: 0, y: '-100%' }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 2 }}
                                >
                                    <Typography variant="body1" sx={{
                                        pt: 3, fontWeight: 'bold', color: '#34495E'
                                    }}>Kenapa Laman Web Ini Dicipta</Typography>

                                </motion.div>
                                <Box sx={{
                                    pt: 5
                                }}>
                                    <motion.div
                                        initial={{ opacity: 0, y: '100%' }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 2 }}
                                    >
                                        <Box>
                                            <Typography variant="body2" sx={{
                                                fontWeight: 'bold',
                                            }} gutterBottom>
                                                Meningkatkan Kecekapan Kerani
                                            </Typography>
                                            <Typography variant="body2">
                                                meningkatkan kecekapan kerja dengan menyediakan alat yang lebih mudah dan pantas untuk melaksanakan tugas harian.
                                            </Typography>
                                        </Box>
                                    </motion.div>
                                    <motion.div
                                        initial={{ opacity: 0, y: '100%' }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 2, delay: 0.5 }}
                                    >
                                        <Box sx={{
                                            mt: 2
                                        }}>
                                            <Typography variant="body2" sx={{
                                                fontWeight: 'bold',
                                            }} gutterBottom>
                                                Mengurangkan Kerumitan Proses Kerja
                                            </Typography>
                                            <Typography variant="body2">
                                                direka untuk mengurangkan kerumitan dalam proses kerja dengan menyediakan fungsi-fungsi yang mudah digunakan dan diakses.
                                            </Typography>
                                        </Box>
                                    </motion.div>
                                    <motion.div
                                        initial={{ opacity: 0, y: '100%' }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 2, delay: 1 }}
                                    >
                                        <Box sx={{
                                            mt: 2
                                        }}>
                                            <Typography variant="body2" sx={{
                                                fontWeight: 'bold',
                                            }} gutterBottom>
                                                Menggalakkan Penggunaan Teknologi Dalam Kerja Kerani
                                            </Typography>
                                            <Typography variant="body2">
                                                menggalakkan penggunaan teknologi dalam tugas harian kerani, mengubah cara kerja konvensional kepada lebih moden dan automatik.
                                            </Typography>
                                        </Box>
                                    </motion.div>
                                </Box>
                            </Box>


                            <Box>
                                <motion.div
                                    initial={{ opacity: 0, y: '-100%' }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 2 }}
                                >
                                    <Typography variant="body1" sx={{
                                        pt: 3, fontWeight: 'bold', color: '#34495E'
                                    }} noWrap>Pembangun Laman Web Ini</Typography>

                                </motion.div>
                                <Box sx={{
                                    pt: 5
                                }}>
                                    <motion.div
                                        initial={{ opacity: 0, x: '100%' }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 2 }}
                                    >
                                        <Box sx={{
                                            display: 'flex',
                                            justifyContent: 'center'
                                        }}>
                                            <IconButton disabled>
                                                <img
                                                    src="/image/developer.jfif"
                                                    alt="Developer Picture"
                                                    style={{ width: 95, height: 95, borderRadius: 5 }}
                                                />
                                            </IconButton>
                                        </Box>
                                    </motion.div>
                                    <motion.div
                                        initial={{ opacity: 0, x: '100%' }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 2, delay: 1 }}
                                    >
                                        <Box sx={{
                                            pt: 1.5
                                        }}>
                                            <Typography variant="body2" sx={{
                                                fontWeight: 'bold'
                                            }} noWrap>
                                                Muhammad Yasin Abdul Hassim
                                            </Typography>
                                        </Box>
                                    </motion.div>
                                    <motion.div
                                        initial={{ opacity: 0, x: '100%' }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 2, delay: 1.5 }}
                                    >
                                        <Box sx={{
                                            pt: 0.5,
                                            display: 'flex',
                                            justifyContent: 'center'
                                        }}>
                                            <Typography variant="body2">
                                                IT Technician
                                            </Typography>
                                        </Box>
                                    </motion.div>
                                    <motion.div
                                        initial={{ opacity: 0, x: '100%' }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 2, delay: 2 }}
                                    >
                                        <Box sx={{
                                            pt: 0.5,
                                            display: 'flex',
                                            justifyContent: 'center'
                                        }}>
                                            <Typography variant="body2" noWrap>
                                                Agri - Tech | Teck Guan Plantation
                                            </Typography>
                                        </Box>
                                    </motion.div>
                                </Box>
                            </Box>
                        </Stack>
                    </Box>
                </DialogContent>
            </Dialog>
        </>
    );
}