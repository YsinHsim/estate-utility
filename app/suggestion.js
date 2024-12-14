"use client";

import React, { useState } from 'react';
import { Button, Box, Typography, Dialog, DialogContent, DialogTitle, IconButton, TextField, Stack } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export default function Suggestion({ isSmartphone }) {

    //=============================================================== section:variable
    const [openDialog, setOpenDialog] = useState(false);
    const [message, setMessage] = useState("Salam Sejahtera, \nsaya mempunyai cadangan/maklum balas untuk laman web Estate Utility iaitu :- \n\n");

    //=============================================================== section:function
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

    //=============================================================== section:view
    return (
        <>
            <Button
                variant="text"
                sx={{
                    px: 4,
                    color: isSmartphone ? '#FAFAFA' : '#CCD1D1',
                    '&:hover': {
                        color: isSmartphone ? 'white' : 'white'
                    },
                    transition: 'all 0.8s ease',
                }}
                onClick={handleClickOpen}
            >
                {isSmartphone ? (
                    <Typography variant="button">Cadangan</Typography>
                ) : (
                    <Typography variant="button">Sokongan & Cadangan</Typography>
                )}
            </Button>

            <Dialog
                open={openDialog}
                onClose={handleClose}
                fullScreen
                sx={{
                    '&MuiDialogContent-root': {
                        p: 2
                    }
                }}>
                <DialogTitle>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        width: '100%',
                        alignItems: 'center',
                    }}>
                        <Typography variant="body1" sx={{
                            textAlign: 'center',
                            py: 0.5,
                            pl: 1,
                            flexGrow: 1,
                            fontWeight: 'bold',
                            color: '#34495E',
                            fontSize: { xs: '1.1rem', sm: '1.25rem' }
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
                        }} onClick={handleClose}>
                            <CloseIcon />
                        </IconButton>
                    </Box>
                </DialogTitle>

                <DialogContent
    sx={{
        bgcolor: isSmartphone ? '#D0ECE7' : '#D0ECE7',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: isSmartphone ? 'stretch' : 'center', // Center-align content when not a smartphone
        justifyContent: isSmartphone ? 'flex-start' : 'center', // Avoid pushing to bottom when not a smartphone
        p: 2
    }}
>
    {isSmartphone ? (
        <Typography
            variant="body1"
            sx={{
                py: 2,
                pl: 0.5,
            }}
        >
            Cadangan & Maklum Balas
        </Typography>
    ) : null}
    <Box
        sx={{
            width: isSmartphone ? '100%' : '30%',
            display: 'flex',
            flexDirection: 'column',
            gap: 2, // Add spacing between TextField and Button
        }}
    >
        <TextField
            label="Tulis Cadangan atau Maklum Balas Anda"
            variant="outlined"
            fullWidth
            multiline
            rows={6}
            value={message}
            onChange={handleInputChange}
            sx={{
                borderRadius: 1.5,
                '& .MuiInputBase-root': {
                    backgroundColor: 'white',
                    fontSize: { xs: '0.875rem', sm: '1rem' }
                }
            }}
        />
        <Button
            variant="contained"
            onClick={handleSendMessage}
            startIcon={<WhatsAppIcon />}
            sx={{
                bgcolor: '#28B463',
                fontSize: { xs: '0.875rem', sm: '1rem' },
                '&:hover': {
                    bgcolor: '#2ECC71'
                },
            }}
        >
            {isSmartphone ? (
                <Typography variant="button">Hantar</Typography>
            ) : (
                <Typography variant="button">Hantar Melalui Whatsapp</Typography>
            )}
        </Button>
    </Box>
</DialogContent>

            </Dialog>
        </>
    );
}
