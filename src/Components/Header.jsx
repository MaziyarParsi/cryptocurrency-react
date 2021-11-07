import React from 'react'
import { Button, Menu, Typography,Avatar } from 'antd'
import {Link} from 'react-router-dom'
import {HomOutline,MoneyCollectOutlined,BulbOutlined,FundOutlined,MenuOutlined} from '@ant-design/icons'
import icon from './../Assets/Images/cryptocurrency.png'

const Header = () => {
 return (
  <div className='navContainer'>
   <div className ='logoContainer'>
    <Avatar src={icon} size='large'/>
    <Typography.Title level={2} className='log'>
     <Link to ='/'>Crypto</Link>
    </Typography.Title>
    {/* <Button className='menu-control-container'></Button> */}
   </div>
   
  </div>
 )
}

export default Header
