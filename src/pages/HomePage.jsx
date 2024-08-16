import React from 'react';
import Layout from '../components/layout/Layout';
import Home from '../components/home/home';

const HomePage = () => {
  return (
    <Layout children={<Home />} image={'https://images.pexels.com/photos/5088009/pexels-photo-5088009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} />
  )
}

export default HomePage;