import React from 'react'
import Layout from '../Layout/Layout'
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'

const Contact = () => {
    return (
        <Layout>
            <Box sx={{
                my: 10, ml: 10, "& h4": {
                    fontWeight: 'bold', mb: 2
                }
            }}>
                <Typography variant='h4'>Contact Us</Typography>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </Box>
            <Box sx={{
                m: 3, width: '600px', ml: 10
            }}>
                <TableContainer component={Paper}>
                    <Table aria-label='contact table'>
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{
                                    bgcolor: 'black', color: '#fff', "@media (max-width:600px)": {
                                        width: '300px',
                                    }
                                }} align='center'>
                                    Contact Details
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>Support: 1201555542</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Support: 1201555542</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Support: 1201555542</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </Layout>
    )
}

export default Contact