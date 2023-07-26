import './homeStyle.css'
import React from 'react'
import Layout from '../Layout/Layout'
import { Link } from 'react-router-dom'
import Banner from '../../images/banner.jpeg'
const Home = () => {
    return (
        <Layout>
            <div className='home' style={{ backgroundImage: `url(${Banner})` }}>
                <div className='header-container'>
                    <h1>Food Website</h1>
                    <p>Best Food In Pakistan</p>
                    <Link to='/menu'>
                        <button>Order Now</button>
                    </Link>
                </div>
            </div>

        </Layout>

    )
}

export default Home