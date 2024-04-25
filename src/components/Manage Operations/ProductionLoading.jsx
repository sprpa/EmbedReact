import React, { useState } from 'react';

const ProductionLoading = () => {
  const [data, setData] = useState([
    { productionNo: '202425000108', fg_code: '830-00507', orderName: '202425000108-3', assignedDate: '21-02-2024', batchQuantity: '100', actualStatus: 'In Progress' },
    { productionNo: '202425000109', fg_code: '830-00507', orderName: '202425000108-3', assignedDate: '21-02-2024', batchQuantity: '120', actualStatus: 'In Progress' },
    { productionNo: '202425000110', fg_code: '830-00507', orderName: '202425000108-3', assignedDate: '21-02-2024', batchQuantity: '80', actualStatus: 'In Progress' },
    { productionNo: '202425000111', fg_code: '830-00507', orderName: '202425000108-3', assignedDate: '21-02-2024', batchQuantity: '100', actualStatus: 'In Progress' }
  ]);

  const [filteredData, setFilteredData] = useState(data);

  const [editableIndex, setEditableIndex] = useState(-1);

  const handleEdit = (rowId, colName, value) => {
    setData(prevData => {
      return prevData.map(item => {
        if (item.productionNo === rowId) {
          return { ...item, [colName]: value };
        }
        return item;
      });
    });
  };

  const handleSave = (index) => {
    setEditableIndex(-1);
    // You can perform save operation here, like sending data to backend
  };

  const handleCancel = () => {
    setEditableIndex(-1);
    // Reset edited data if needed
  };

  const handleFilter = (column, value) => {
    const filtered = data.filter(item =>
      item[column]?.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredData(filtered);
  };
  const handleEditAll = (productionNo) => {
    setData(prevData => {
      return prevData.map(item => {
        if (item.productionNo === productionNo) {
          return {
            ...item,
            // Enable editing for all columns
            productionNo: item.productionNo,
            fg_code: item.fg_code,
            orderName: item.orderName,
            assignedDate: item.assignedDate,
            batchQuantity: item.batchQuantity,
            actualStatus: item.actualStatus
          };
        }
        return item;
      });
    });
  };
  

  return (
    <div>
      <div className='d-flex justify-content-between'>
        <div className="d-flex" style={{ width: "100%" }} >
          <div className="p-2">
            <h6 className="process m-0 ">List of Production</h6>
          </div>
          <div className="form-group has-search  " style={{ width: "60%" }} >
            <span className="fa fa-search form-control-feedback mt-1"></span>
            <input type="text" className="form-control m-0 " style={{height:'100%'}} placeholder="Search"  />
          </div>
          <div>
            <button className="btn btn-primary ms-3">SUBMIT</button>
            <button className="btn btn-primary mx-3"><i className="fa-solid fa-gear"></i></button>
          </div>
        </div>
        <div className='d-flex gap-3 justify-content-end' style={{ width: "30%" }}>
          <button className='btn btn-success d-flex align-items-center'><i className="fa-solid fa-plus me-1"></i> <span>Create Flow</span> </button>
          <button className='btn btn-secondary'>Inactivate</button>
        </div>
      </div>

      <div className='my-5'>
        <table className="table table-bordered table-hover">
          <thead className="table-secondary batch-table">
            <tr>
              <th scope="col-1" className='text-center'>Sno</th>
              <th scope="col-2" className='text-center'>Production No</th>
              <th scope="col-2" className='text-center'>FG Code</th>
              <th scope="col-2" className='text-center'>Order Name</th>
              <th scope="col-1" className='text-center'>Assigned Date</th>
              <th scope="col-1" className='text-center'>Batch Quantity</th>
              <th scope="col-1" className='text-center'>Actual Status</th>
              <th scope="col-1" className='text-center'>Action</th>
            </tr>
            <tr>
              <th scope="col-1" className='text-center'>
              <input
                className='form-control form-filter m-0 w-100'
                  type="text"
                  onChange={(e) => handleFilter(e.target.value)}
                />
              </th>
              <th scope="col-2" className='text-center'>
                <input
                className='form-control form-filter m-0'
                  type="text"
                  placeholder="Filter by Production No"
                  onChange={(e) => handleFilter('productionNo', e.target.value)}
                />
              </th>
              <th scope="col-2" className='text-center'>
                <input
                className='form-control form-filter m-0'
                  type="text"
                  placeholder="Filter by FG Code"
                  onChange={(e) => handleFilter('fg_code', e.target.value)}
                />
              </th>
              <th scope="col-2" className='text-center'>
                <input
                className='form-control form-filter m-0'
                  type="text"
                  placeholder="Filter by Order Name"
                  onChange={(e) => handleFilter('orderName', e.target.value)}
                />
              </th>
              <th scope="col-1" className='text-center'>
                <input
                className='form-control form-filter m-0'
                  type="text"
                  placeholder="Filter by Assigned Date"
                  onChange={(e) => handleFilter('assignedDate', e.target.value)}
                />
              </th>
              <th scope="col-1" className='text-center'>
                <input className='form-control form-filter m-0'
                  type="text"
                  placeholder="Filter by Batch Quantity"
                  onChange={(e) => handleFilter('batchQuantity', e.target.value)}
                />
              </th>
              <th scope="col-1" className='text-center'>
                <input
                className='form-control form-filter m-0'
                  type="text"
                  placeholder="Filter by Actual Status"
                  onChange={(e) => handleFilter('actualStatus', e.target.value)}
                />
              </th>
              <th scope="col-1" className='text-center'>
              <input
                className='form-control form-filter m-0 w-100'
                  type="text"
                  onChange={(e) => handleFilter(e.target.value)}
                />
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item, index) => (
              <tr key={index}>
                <td className='text-center'>{index + 1}</td>
                <td className='text-center'>
                  <div
                    className="row_data"
                    contentEditable="true"
                    onBlur={e => handleEdit(item.productionNo, 'productionNo', e.target.innerText)}
                  >
                    {item.productionNo}
                  </div>
                </td>
                <td className='text-center'>
                  <div
                    className="row_data"
                    contentEditable="true"
                    onBlur={e => handleEdit(item.productionNo, 'fg_code', e.target.innerText)}
                  >
                    {item.fg_code}
                  </div>
                </td>
                <td className='text-center'>
                  <div
                    className="row_data"
                    contentEditable="true"
                    onBlur={e => handleEdit(item.productionNo, 'orderName', e.target.innerText)}
                  >
                    {item.orderName}
                  </div>
                </td>
                <td className='text-center'>
                  <div
                    className="row_data"
                    contentEditable="true"
                    onBlur={e => handleEdit(item.productionNo, 'assignedDate', e.target.innerText)}
                  >
                    {item.assignedDate}
                  </div>
                </td>
                <td className='text-center'>
                  <div
                    className="row_data"
                    contentEditable="true"
                    onBlur={e => handleEdit(item.productionNo, 'batchQuantity', e.target.innerText)}
                  >
                    {item.batchQuantity}
                  </div>
                </td>
                <td className='text-center'>
                  <div
                    className="row_data"
                    contentEditable="true"
                    onBlur={e => handleEdit(item.productionNo, 'actualStatus', e.target.innerText)}
                  >
                    {item.actualStatus}
                  </div>
                </td>
                    <td className='text-center'>
                        <button className='btn border-0 text-center w-100' onClick={() => handleEditAll(item.productionNo)}><i className="fa-regular fa-pen-to-square"></i> </button>
                    </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default ProductionLoading;
