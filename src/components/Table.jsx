import React, { useState, useEffect } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import axios from 'axios';

function AccordionWithCheckbox() {
  const [selectedItems, setSelectedItems] = useState([]);
  const [data, setData] = useState([]);

    // useEffect to fetch menu data
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://eis-website-backend.onrender.com/super_menu");
                if (response.status !== 200) {
                    throw new Error('Failed to fetch menu data');
                }
                // Split the fetched data into different categories
                setData(response.data.main_menu);

            } catch (error) {
                console.error('Error fetching menu data:', error);
            }
        };

        fetchData();
    }, []);

    const handleHeaderCheckboxChange = (category) => {
      const categoryIndex = selectedItems.indexOf(category);
      if (categoryIndex === -1) {
        setSelectedItems([...selectedItems, category]);
      } else {
        const updatedSelectedItems = [...selectedItems];
        updatedSelectedItems.splice(categoryIndex, 1);
        setSelectedItems(updatedSelectedItems);
      }
    };
  
    const handleSubItemCheckboxChange = (category, subItem) => {
      if (selectedItems.includes(category)) {
        // Category is already selected, so deselect it if no sub-items are selected
        if (!Array.isArray(data[category]) || !data[category].some(item => item === subItem)) {
          const updatedSelectedItems = selectedItems.filter(item => item !== category);
          setSelectedItems(updatedSelectedItems);
        }
      } else {
        // Category is not selected, so select it
        setSelectedItems([...selectedItems, category]);
      }
    };
  
    return (
      <Accordion defaultActiveKey="0">
        {Object.keys(data).map((category, categoryIndex) => (
          <Accordion.Item key={categoryIndex} eventKey={categoryIndex.toString()}>
            <Accordion.Header>
              <input
                type="checkbox"
                checked={selectedItems.includes(category)}
                onChange={() => handleHeaderCheckboxChange(category)}
              />
              {category}
            </Accordion.Header>
            <Accordion.Body>
              {Array.isArray(data[category]) && data[category].map((subItem, subItemIndex) => (
                <div key={subItemIndex}>
                  <input
                    type="checkbox"
                    checked={selectedItems.includes(subItem)}
                    onChange={() => handleSubItemCheckboxChange(category, subItem)}
                  />
                  {subItem}
                </div>
              ))}
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    );
  }
  
  export default AccordionWithCheckbox;
