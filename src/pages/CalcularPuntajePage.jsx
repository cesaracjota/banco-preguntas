import React from 'react'
import Layout from '../components/layout/Layout'
import CalcularPuntaje from '../components/puntaje/CalcularPuntaje'

const CalcularPuntajePage = () => {
  return (
    <Layout children={<CalcularPuntaje />} image={'https://images.pexels.com/photos/5088008/pexels-photo-5088008.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} />
  )
}

export default CalcularPuntajePage
