"use client";

import React, { useState } from 'react';

import { Button, Box, Typography, Dialog, DialogContent, DialogTitle, IconButton, TextField } from '@mui/material';

import CloseIcon from '@mui/icons-material/Close';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';


export default function Suggestion() {

    //===============================================================   section:variable
    const [openDialog, setOpenDialog] = useState(false);
    const [message, setMessage] = useState("Salam Sejahtera, \nsaya mempunyai cadangan/maklum balas untuk laman web Estate Utility iaitu :- \n\n");




    //===============================================================   section:function
    const handleClickOpen = () => {
        setOpenDialog(true);
    };
    const handleClose = () => {
        setOpenDialog(false);
    };
    const handleInputChange = (event) => {
        setMessage(event.target.value);
    };

    // Send message via WhatsApp
    const handleSendMessage = () => {
        // Developer's WhatsApp number (replace with actual number)
        const developerPhone = "60128507469"; // Replace with actual phone number

        // WhatsApp URL format with encoded message
        const whatsappUrl = `https://wa.me/${developerPhone}?text=${encodeURIComponent(message)}`;

        // Open WhatsApp link (this will open in a new tab or the WhatsApp app)
        window.open(whatsappUrl, "_blank");

        // Reset the text field
        setMessage("Salam Sejahtera, \nsaya mempunyai cadangan/maklum balas untuk laman web Estate Utility iaitu :- \n\n");

        // Close the dialog after sending
        handleClose();
    };

    //===============================================================   section:view
    return (
        <>
            <Button
                variant="text"
                sx={{
                    px: 4,
                    color: '#CCD1D1',
                    '&:hover': {
                        color: 'white'
                    },
                    transition: 'all 0.8s ease',
                }}
                onClick={handleClickOpen}
            >
                Sokongan & Cadangan
            </Button>


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
                            Sokongan & Cadangan
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
                        display:'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <Box>
                            <TextField
                                label="Tulis Cadangan atau Maklum Balas Anda"
                                variant="outlined"
                                fullWidth
                                multiline
                                rows={6}
                                value={message}
                                onChange={handleInputChange}
                                sx={{
                                    marginBottom: 2,
                                    bgcolor: 'white',
                                    borderRadius: 1.5
                                }}
                            />
                            {/* Button to send suggestion */}
                            <Button
                                variant="contained"
                                fullWidth
                                onClick={handleSendMessage}
                                startIcon={<WhatsAppIcon />}
                                sx={{
                                    bgcolor: '#28B463',
                                    '&:hover':{
                                        bgcolor: '#2ECC71'
                                    }
                                }}
                            >
                                Hantar Melalui WhatsApp
                            </Button>
                        </Box>
                    </Box>
                </DialogContent>
            </Dialog>
        </>
    );
}