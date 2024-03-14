import React from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
const { SubMenu } = Menu;
const Config = ({ items }) => {
    const onClick = (e) => {
      console.log('click', e);
    };
  

  return (
    <Menu className='bg-trasparent border-0' onClick={onClick} style={{ backgroundColor: 'transparent'  }} mode="vertical" triggerSubMenuAction="click">
      {items.map((item, index) => (
        <SubMenu  key={index} title={item.header} icon={<i className={item.icon}></i>}>
          {item.subItems.map((subItem, subIndex) => (
            <Menu.Item className='shadow border-1 border-success' style={{borderBottom:'2px solid green',borderRadius:'0'}} key={`${index}-${subIndex}`}>{subItem.title}</Menu.Item>
          ))}
        </SubMenu>
      ))}
    </Menu>
  );
}

export default Config;
