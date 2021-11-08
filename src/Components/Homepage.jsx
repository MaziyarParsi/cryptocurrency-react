import React from 'react'
import millify from 'millify'
import { Typography,Row,Col,Statistic } from 'antd'
import { Link } from 'react-router-dom'
import {CryptoCurrencies,News} from '../Components'


import { useGetCryptosQuery } from '../services/CryptoApi'





const Homepage = ( ) => {
 const {Title}= Typography
 const {data, isFetching}= useGetCryptosQuery(12)
 const globalStats = data?.data?.stats
if(isFetching) return 'Loading...'
 return (
  <>
  <Title level={2} className='heading' >Global Crypto stats</Title>
  <Row>
     <Col span={12} >
       <Statistic title='Total Cryptocurrencies' value={millify(globalStats.total)}/>
     </Col>
     <Col span={12}>
       <Statistic title='Total Exchanges' value={millify(globalStats.totalExchanges)}/>
     </Col>
     <Col span={12}>
       <Statistic title='Total Market Cap' value={millify(globalStats.totalMarketCap)}/>
     </Col>
     <Col span={12}>
       <Statistic title='Total 24h Volume' value={millify(globalStats.total24hVolume)}/>
     </Col>
     <Col span={12}>
       <Statistic title='Total Markets' value={millify(globalStats.totalMarkets)}/>
     </Col>
  </Row>

  <div className="home-heading-container">
    <Title level={2} className="home-title">Top 10 CryptoCurrency in the world</Title>
    <Title level={3} className="show-more"><Link to='/cryptocurrencies'>Show more</Link></Title>
  </div>
  <CryptoCurrencies simpilified/>
  <div className="home-heading-container">
    <Title level={2} className="home-title">Latest Crypto News</Title>
    <Title level={3} className="show-more"><Link to='/news'>Show more</Link></Title>
  </div>
  <News simpilified/>
  
  </>
 )
}

export default Homepage
