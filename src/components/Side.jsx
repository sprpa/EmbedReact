import React, { useEffect, useState } from "react";
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import axios from "axios";

const Side = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [configItems, setConfigItems] = useState([]);
  const [reportItems, setReportItems] = useState([]);
  const [manageOperationsSubItems, setManageOperationsSubItems] = useState([]);
  const [masterSubItems, setMasterSubItems] = useState([]);
  const [apiSubItems, setapiSubItems] = useState([]);
  const [usermanualSubItems, setUserManualSubItems] = useState([]);
  const [OperationSubItems, setOperationSubItems] = useState([]);
  const [ProductionSubItems, setProductionSubItems] = useState([]);
  const [InventorySubItems, setInventorySubItems] = useState([]);
  const [PackingSubItems, setPackingSubItems] = useState([]);
  const [TestingSubItems, setTestingSubItems] = useState([]);
  const [QualitySubItems, setQualitySubItems] = useState([]);
  const [ProductionReportSubItems, setProductionReportSubItems] = useState([]);
  const [TraceReportSubItems, setTraceReportSubItems] = useState([]);
  const [ManagementReportSubItems, setManagementReportSubItems] = useState([]);


    useEffect(() => {
        const fetchMenuData = async () => {
            try {
                const response = await axios.get("http://192.168.5.12:8089/main_menu?menutype=menu");
                if (response.status !== 200) {
                    throw new Error('Failed to fetch menu data');
                }
                setMenuItems(response.data.menu_items);
                console.log(response.data.menu_items);
            } catch (error) {
                console.error('Error fetching menu data:', error);
            }
            try {
                const response = await axios.get("http://192.168.5.12:8089/main_menu?menutype=configuration");
                if (response.status !== 200) {
                    throw new Error('Failed to fetch menu data');
                }
                setConfigItems(response.data.menu_items);
                console.log(response.data.menu_items);
            } catch (error) {
                console.error('Error fetching menu data:', error);
            }
            try {
                const response = await axios.get("http://192.168.5.12:8089/main_menu?menutype=Reports");
                if (response.status !== 200) {
                    throw new Error('Failed to fetch menu data');
                }
                setReportItems(response.data.menu_items);
                console.log(response.data.menu_items);
            } catch (error) {
                console.error('Error fetching menu data:', error);
            }
        };
        const fetchSubItems = async () => {
            try {
                const response = await axios.get("http://192.168.5.12:8089/sub_menu?MenuHeader=Manage%20Operations");
                if (response.status !== 200) {
                    throw new Error('Failed to fetch sub-menu data');
                }
                setManageOperationsSubItems(response.data.sub_categories);
                console.log(response.data.sub_categories);
            } catch (error) {
                console.error('Error fetching sub-menu data:', error);
            }
            try {
                const response = await axios.get("http://192.168.5.12:8089/sub_menu?MenuHeader=Masters");
                if (response.status !== 200) {
                    throw new Error('Failed to fetch sub-menu data');
                }
                setMasterSubItems(response.data.sub_categories);
                console.log(response.data.sub_categories);
            } catch (error) {
                console.error('Error fetching sub-menu data:', error);
            }
            try {
                const response = await axios.get("http://192.168.5.12:8089/sub_menu?MenuHeader=API%20Sync");
                if (response.status !== 200) {
                    throw new Error('Failed to fetch sub-menu data');
                }
                setapiSubItems(response.data.sub_categories);
                console.log(response.data.sub_categories);
            } catch (error) {
                console.error('Error fetching sub-menu data:', error);
            }
            try {
                const response = await axios.get("http://192.168.5.12:8089/sub_menu?MenuHeader=User%20Manual");
                if (response.status !== 200) {
                    throw new Error('Failed to fetch sub-menu data');
                }
                setUserManualSubItems(response.data.sub_categories);
                console.log(response.data.sub_categories);
            } catch (error) {
                console.error('Error fetching sub-menu data:', error);
            }
            try {
                const response = await axios.get("http://192.168.5.12:8089/sub_menu?MenuHeader=Operation");
                if (response.status !== 200) {
                    throw new Error('Failed to fetch sub-menu data');
                }
                setOperationSubItems(response.data.sub_categories);
                console.log(response.data.sub_categories);
            } catch (error) {
                console.error('Error fetching sub-menu data:', error);
            }
            try {
                const response = await axios.get("http://192.168.5.12:8089/sub_menu?MenuHeader=Operation");
                if (response.status !== 200) {
                    throw new Error('Failed to fetch sub-menu data');
                }
                setOperationSubItems(response.data.sub_categories);
                console.log(response.data.sub_categories);
            } catch (error) {
                console.error('Error fetching sub-menu data:', error);
            }
            try {
                const response = await axios.get("http://192.168.5.12:8089/sub_menu?MenuHeader=Production");
                if (response.status !== 200) {
                    throw new Error('Failed to fetch sub-menu data');
                }
                setProductionSubItems(response.data.sub_categories);
                console.log(response.data.sub_categories);
            } catch (error) {
                console.error('Error fetching sub-menu data:', error);
            }
            try {
                const response = await axios.get("http://192.168.5.12:8089/sub_menu?MenuHeader=Inventory");
                if (response.status !== 200) {
                    throw new Error('Failed to fetch sub-menu data');
                }
                setInventorySubItems(response.data.sub_categories);
                console.log(response.data.sub_categories);
            } catch (error) {
                console.error('Error fetching sub-menu data:', error);
            }
            try {
                const response = await axios.get("http://192.168.5.12:8089/sub_menu?MenuHeader=Packing");
                if (response.status !== 200) {
                    throw new Error('Failed to fetch sub-menu data');
                }
                setPackingSubItems(response.data.sub_categories);
                console.log(response.data.sub_categories);
            } catch (error) {
                console.error('Error fetching sub-menu data:', error);
            }
            try {
                const response = await axios.get("http://192.168.5.12:8089/sub_menu?MenuHeader=Testing");
                if (response.status !== 200) {
                    throw new Error('Failed to fetch sub-menu data');
                }
                setTestingSubItems(response.data.sub_categories);
                console.log(response.data.sub_categories);
            } catch (error) {
                console.error('Error fetching sub-menu data:', error);
            }
            try {
                const response = await axios.get("http://192.168.5.12:8089/sub_menu?MenuHeader=Quality");
                if (response.status !== 200) {
                    throw new Error('Failed to fetch sub-menu data');
                }
                setQualitySubItems(response.data.sub_categories);
                console.log(response.data.sub_categories);
            } catch (error) {
                console.error('Error fetching sub-menu data:', error);
            }
            try {
                const response = await axios.get("http://192.168.5.12:8089/sub_menu?MenuHeader=Production%20Report");
                if (response.status !== 200) {
                    throw new Error('Failed to fetch sub-menu data');
                }
                setProductionReportSubItems(response.data.sub_categories);
                console.log(response.data.sub_categories);
            } catch (error) {
                console.error('Error fetching sub-menu data:', error);
            }
            try {
                const response = await axios.get("http://192.168.5.12:8089/sub_menu?MenuHeader=Traceability%20Report");
                if (response.status !== 200) {
                    throw new Error('Failed to fetch sub-menu data');
                }
                setTraceReportSubItems(response.data.sub_categories);
                console.log(response.data.sub_categories);
            } catch (error) {
                console.error('Error fetching sub-menu data:', error);
            } try {
                const response = await axios.get("http://192.168.5.12:8089/sub_menu?MenuHeader=Management%20Report");
                if (response.status !== 200) {
                    throw new Error('Failed to fetch sub-menu data');
                }
                setManagementReportSubItems(response.data.sub_categories);
                console.log(response.data.sub_categories);
            } catch (error) {
                console.error('Error fetching sub-menu data:', error);
            }

        };

        fetchMenuData();
        fetchSubItems();
    }, []);

  return (
    <div className="h-100">
        <h6 className=" menu-head">Menu</h6>
        <Menu className='bg-trasparent border-0' mode="inline" triggerSubMenuAction="click">
              {menuItems.map((item, index) => (
                  <React.Fragment key={index}>
                      {item.Menu_Header === 'Operation' && (
                          <Menu.SubMenu title={item.Menu_Header}>
                              {OperationSubItems.map((subItem, subIndex) => (
                                  <Menu.Item key={`${index}-${subIndex}`} style={{ fontSize: '.8rem', paddingLeft: '0px' }}>
                                      <Link to={subItem.Sub_category}>{subItem.Sub_category}</Link>
                                  </Menu.Item>
                              ))}
                          </Menu.SubMenu>
                      )}
                      {item.Menu_Header === 'Production' && (
                          <Menu.SubMenu title={item.Menu_Header}>
                              {ProductionSubItems.map((subItem, subIndex) => (
                                  <Menu.Item key={`${index}-${subIndex}`} style={{ fontSize: '.8rem', paddingLeft: '0px' }}>
                                      <Link to={subItem.Sub_category}>{subItem.Sub_category}</Link>
                                  </Menu.Item>
                              ))}
                          </Menu.SubMenu>
                      )}
                      {item.Menu_Header === 'Inventory' && (
                          <Menu.SubMenu title={item.Menu_Header}>
                              {InventorySubItems.map((subItem, subIndex) => (
                                  <Menu.Item key={`${index}-${subIndex}`} style={{ fontSize: '.8rem', paddingLeft: '0px' }}>
                                      <Link to={subItem.Sub_category}>{subItem.Sub_category}</Link>
                                  </Menu.Item>
                              ))}
                          </Menu.SubMenu>
                      )}
                      {item.Menu_Header === 'Packing' && (
                          <Menu.SubMenu title={item.Menu_Header}>
                              {PackingSubItems.map((subItem, subIndex) => (
                                  <Menu.Item key={`${index}-${subIndex}`} style={{ fontSize: '.8rem', paddingLeft: '0px' }}>
                                      <Link to={subItem.Sub_category}>{subItem.Sub_category}</Link>
                                  </Menu.Item>
                              ))}
                          </Menu.SubMenu>
                      )}
                      {item.Menu_Header === 'Testing' && (
                          <Menu.SubMenu title={item.Menu_Header}>
                              {TestingSubItems.map((subItem, subIndex) => (
                                  <Menu.Item key={`${index}-${subIndex}`} style={{ fontSize: '.8rem', paddingLeft: '0px' }}>
                                      <Link to={subItem.Sub_category}>{subItem.Sub_category}</Link>
                                  </Menu.Item>
                              ))}
                          </Menu.SubMenu>
                      )}
                      {item.Menu_Header === 'Quality' && (
                          <Menu.SubMenu title={item.Menu_Header}>
                              {QualitySubItems.map((subItem, subIndex) => (
                                  <Menu.Item key={`${index}-${subIndex}`} style={{ fontSize: '.8rem', paddingLeft: '0px' }}>
                                      <Link to={subItem.Sub_category}>{subItem.Sub_category}</Link>
                                  </Menu.Item>
                              ))}
                          </Menu.SubMenu>
                      )}

                      {item.Menu_Header !== 'Operation' && item.Menu_Header !== 'Production' &&item.Menu_Header !== 'Inventory' && item.Menu_Header !== 'Packing' && item.Menu_Header !== 'Testing'  && item.Menu_Header !== 'Quality'  && (
                          <Menu.Item style={{ fontSize: '.8rem', paddingLeft: '0px' }}>
                              <Link to={item.link}>{item.Menu_Header}</Link>
                          </Menu.Item>
                      )}
                  </React.Fragment>
              ))}
          </Menu>
          <h6 className=" menu-head">Configrations</h6>
          <Menu className='bg-trasparent border-0' mode="inline" triggerSubMenuAction="click">
              {configItems.map((item, index) => (
                  <React.Fragment key={index}>
                      {item.Menu_Header === 'Manage Operations' && (
                          <Menu.SubMenu title={item.Menu_Header}>
                              {manageOperationsSubItems.map((subItem, subIndex) => (
                                  <Menu.Item key={`${index}-${subIndex}`} style={{ fontSize: '.8rem', paddingLeft: '0px' }}>
                                      <Link to={subItem.Sub_category}>{subItem.Sub_category}</Link>
                                  </Menu.Item>
                              ))}
                          </Menu.SubMenu>
                      )}
                      {item.Menu_Header === 'Masters' && (
                          <Menu.SubMenu title={item.Menu_Header}>
                              {masterSubItems.map((subItem, subIndex) => (
                                  <Menu.Item key={`${index}-${subIndex}`} style={{ fontSize: '.8rem', paddingLeft: '0px' }}>
                                      <Link to={subItem.Sub_category}>{subItem.Sub_category}</Link>
                                  </Menu.Item>
                              ))}
                          </Menu.SubMenu>
                      )}
                      {item.Menu_Header === 'API Sync' && (
                          <Menu.SubMenu title={item.Menu_Header}>
                              {apiSubItems.map((subItem, subIndex) => (
                                  <Menu.Item key={`${index}-${subIndex}`} style={{ fontSize: '.8rem', paddingLeft: '0px' }}>
                                      <Link to={subItem.Sub_category}>{subItem.Sub_category}</Link>
                                  </Menu.Item>
                              ))}
                          </Menu.SubMenu>
                      )}
                      {item.Menu_Header === 'User Manual' && (
                          <Menu.SubMenu title={item.Menu_Header}>
                              {usermanualSubItems.map((subItem, subIndex) => (
                                  <Menu.Item key={`${index}-${subIndex}`} style={{ fontSize: '.8rem', paddingLeft: '0px' }}>
                                      <Link to={subItem.Sub_category}>{subItem.Sub_category}</Link>
                                  </Menu.Item>
                              ))}
                          </Menu.SubMenu>
                      )}

                      {item.Menu_Header !== 'Manage Operations' && item.Menu_Header !== 'Masters' &&item.Menu_Header !== 'API Sync' && item.Menu_Header !== 'User Manual' && (
                          <Menu.Item style={{ fontSize: '.8rem', paddingLeft: '0px' }}>
                              <Link to={item.link}>{item.Menu_Header}</Link>
                          </Menu.Item>
                      )}
                  </React.Fragment>
              ))}
          </Menu>
          <h6 className=" menu-head">Reports</h6>
          <Menu className='bg-trasparent border-0' mode="inline" triggerSubMenuAction="click">
              {reportItems.map((item, index) => (
                  <React.Fragment key={index}>
                      {item.Menu_Header === 'Production Report' && (
                          <Menu.SubMenu title={item.Menu_Header}>
                              {ProductionReportSubItems.map((subItem, subIndex) => (
                                  <Menu.Item key={`${index}-${subIndex}`} style={{ fontSize: '.8rem', paddingLeft: '0px' }}>
                                      <Link to={subItem.Sub_category}>{subItem.Sub_category}</Link>
                                  </Menu.Item>
                              ))}
                          </Menu.SubMenu>
                      )}
                      
                      {item.Menu_Header === 'Traceability Report' && (
                          <Menu.SubMenu title={item.Menu_Header}>
                              {TraceReportSubItems.map((subItem, subIndex) => (
                                  <Menu.Item key={`${index}-${subIndex}`} style={{ fontSize: '.8rem', paddingLeft: '0px' }}>
                                      <Link to={subItem.Sub_category}>{subItem.Sub_category}</Link>
                                  </Menu.Item>
                              ))}
                          </Menu.SubMenu>
                      )}
                      {item.Menu_Header === 'Management Report' && (
                          <Menu.SubMenu title={item.Menu_Header}>
                              {ManagementReportSubItems.map((subItem, subIndex) => (
                                  <Menu.Item key={`${index}-${subIndex}`} style={{ fontSize: '.8rem', paddingLeft: '0px' }}>
                                      <Link to={subItem.Sub_category}>{subItem.Sub_category}</Link>
                                  </Menu.Item>
                              ))}
                          </Menu.SubMenu>
                      )}

                      {item.Menu_Header !== 'Production Report' && item.Menu_Header !== 'Traceability Report' &&item.Menu_Header !== 'Management Report'  && (
                          <Menu.Item style={{ fontSize: '.8rem', paddingLeft: '0px' }}>
                              <Link to={item.link}>{item.Menu_Header}</Link>
                          </Menu.Item>
                      )}
                  </React.Fragment>
              ))}
          </Menu>

    </div>
    
    
  );
};

export default Side;
