import React , {useState} from 'react'
import {Select,Typography,Row,Col,Avatar,Card, Input} from 'antd'
import moment from 'moment'
import {useGetCryptoNewsQuery} from '../services/CryptoNewsApi'
import {Loader} from '../Components'




const {Text,Title}=Typography
const {Option}= Select
const demoImageUrl = 'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News'

const News = ({simpilified}) => {
 const [newsCategory, setNewsCategory] = useState('Cryptocurrency')
const { data:cryproNews}=useGetCryptoNewsQuery({newsCategory:newsCategory,count:simpilified?6:12})

 if(!cryproNews?.value) return <Loader/>


  return (
   <Row gutter={[24,24]}>
    
    {cryproNews.value.map((news,index)=>(
     <Col xs={24} sm={12} lg={8} key={index} >
     <Card hoverable className='news-card'>
       <a href={news.url} target='_blank' rel='noreferrer'>
        <div className='news-image-container'>
         <Title className='news-title' level={4}> {news.name} </Title>
         <img  style={{maxHeight:'100px',maxWidth:'200px'}} src={news?.image?.thumbnail?.contentUrl || demoImageUrl } alt="news" />
        </div>
          <p>
            {news.description>100 ? `${news.description.substring(0,100)}...`:news.description}
            
          </p>
          <div className="provider-container">
            <div>
              <Avatar src={news.provider[0]?.image?.thumbnail?.contentUrl || demoImageUrl} alt="news"   />
              <Text className="provider-name"> {news.provider[0]?.name}</Text>
            </div>
              <Text>{moment(news.datePublished).startOf('ss').fromNow()}</Text>

          </div>
       </a>
     </Card>
   </Col>
    ))}
   </Row>
  )
}

export default News
