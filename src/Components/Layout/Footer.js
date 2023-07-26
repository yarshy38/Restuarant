import { Box, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
    return (
        <>
            <Box sx={{ textAlign: 'center', bgcolor: '#1a1a19', color: 'white', p: 3 }}>
                <Typography variant='h5'>
                    All Right Reserved  &copy; react shop
                </Typography>
            </Box>

        </>
    )
}

export default Footer