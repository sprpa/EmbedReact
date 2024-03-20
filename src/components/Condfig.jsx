import React from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
const { SubMenu } = Menu;
const Config = ({ items }) => {
    const onClick = (e) => {
    };
  

  return (
    <Menu className='bg-trasparent border-0' onClick={onClick} style={{ backgroundColor: 'transparent' }} mode="vertical" triggerSubMenuAction="click">
    {items.map((item, index) => (
      <SubMenu key={index} title={item.header} icon={<i className={item.icon}></i>}>
        {item.subItems.map((subItem, subIndex) => (
          <Menu.Item style={{ borderBottom: '0.5px solid rgba(0, 128, 0, 0.295)', fontSize: '.8rem', borderRadius: '0' }} key={`${index}-${subIndex}`}>
            <Link to={`${item.header.toLowerCase().replace(/\s/g, '')}/${subItem.title.toLowerCase().replace(/\s/g, '')}`}>{subItem.title}</Link>
          </Menu.Item>
        ))}
      </SubMenu>
    ))}
  </Menu>

  );
}

export default Config;
