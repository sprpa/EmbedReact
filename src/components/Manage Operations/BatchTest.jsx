import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Modal, Button } from 'react-bootstrap';

const YourModalComponent = ({ show, handleClose, title, data, selectedIndex, handleSelectChange }) => {
    if (!Array.isArray(data)) {
        return <p>No data available</p>;
      }
    return (
    <Modal show={show} onHide={handleClose} size="xl" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <select className='w-100 form-control' onChange={handleSelectChange} value={selectedIndex}>
            <option value={1}>Production 1</option>
            <option value={2}>Production 2</option>
            {/* Add more options for other productions if needed */}
          </select>
        </div>
        <table className='table'>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.label}</td>
                <td>{item.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

const YourComponent = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState([]);
  const [modalTitle, setModalTitle] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(1); // Default selected index

  const handleCloseModal = () => setShowModal(false);

  const handleSelectChange = (event) => {
    const index = parseInt(event.target.value);
    setSelectedIndex(index);
    fetchData(index);
  };

  const fetchData = async (index) => {
    setIsLoading(true);
    try {
      const response = await axios.get(`http://localhost:8000/table/1`);
      setModalData(response.data);
      setModalTitle(`Production ${index} Details`);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData(selectedIndex);
  }, []); // Fetch data for initial index on component mount

  return (
    <div>
      <Button variant='primary' onClick={() => setShowModal(true)} disabled={isLoading || !modalData.length}>
        Open Modal
      </Button>

      <YourModalComponent
        show={showModal}
        handleClose={handleCloseModal}
        title={modalTitle}
        data={modalData}
        selectedIndex={selectedIndex}
        handleSelectChange={handleSelectChange}
      />
    </div>
  );
};

export default YourComponent;
