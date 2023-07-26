import React from 'react'
import Layout from '../Layout/Layout'
import { Box, Card, CardActionArea, CardMedia } from '@mui/material'
import { menuList } from '../data/data'


const Menu = () => {
    return (
        <Layout>
            <Box>
                {menuList.map(menu => (
                    <Card>
                        <CardActionArea>
                            <CardMedia sx={{ minHeight: '400px' }} component={'img'} src={menu.img} alt={menu.name} />
                        </CardActionArea>
                    </Card>
                ))}
            </Box>
        </Layout>
    )
}

export default Menu