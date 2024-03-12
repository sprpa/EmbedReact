import React from 'react';

const CustomTable = ({ data, onDelete }) => {
  const handleDelete = (index) => {

    onDelete(index);
  };

  return (
    <table className="table table-bordered table-hover">
      <thead className="table-dark">
        <tr>
          <th scope="col">Sno</th>
          <th scope="col">Process Name</th>
          <th scope="col">Item Code</th>
          <th scope="col">Production No</th>
          <th scope="col">Production Status</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.sno}</td>
            <td>{item.processName}</td>
            <td>{item.itemCode}</td>
            <td>{item.productionNo}</td>
            <td>{item.productionStatus}</td>
            <td>
              {/* Add action buttons or any other actions as needed */}
              <button className="btn btn-primary mx-2">Edit</button>
              <button className="btn btn-danger mx-2" onClick={() => handleDelete(index)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CustomTable;
