import React from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
const { SubMenu } = Menu;
const Config = ({ items }) => {
    const onClick = (e) => {
    };
  

  return (
  //   <Menu className='bg-trasparent border-0' onClick={onClick} style={{ backgroundColor: 'transparent' }} mode="inline" triggerSubMenuAction="click">
  //   {items.map((item, index) => (
  //     <SubMenu key={index} title={item.menu_header} icon={<i className={item.icon}></i>}>
  //       {item.subItems.map((subItem, subIndex) => (
  //         <Menu.Item className='menu-item' style={{fontSize: '.8rem',paddingLeft:'0px'}} key={`${index}-${subIndex}`}>
  //           <Link to={`${item.header.toLowerCase().replace(/\s/g, '')}/${subItem.title.toLowerCase().replace(/\s/g, '')}`}>{subItem.title}</Link>
  //         </Menu.Item>
  //       ))}
  //     </SubMenu>
  //   ))}
  // </Menu>
  // <Menu className='bg-trasparent border-0' mode="inline" triggerSubMenuAction="click">
  //     {items.map((item, index) => (
  //       <Menu.Item key={index} style={{ fontSize: '.8rem', paddingLeft: '0px' }}>
  //         <Link to={item.menu_header.toLowerCase().replace(/\s/g, '')}>{item.menu_header}</Link>
  //       </Menu.Item>
  //     ))}
  //   </Menu>
  <></>


  );
}

export default Config;
