import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const EditableTable = () => {
  const [data, setData] = useState([
    { id: 1, fname: 'Code', lname: 'With Mark', email: 'mark@codewithmark.com' },
    { id: 2, fname: 'Mary', lname: 'Moe', email: 'mary@gmail.com' },
    { id: 3, fname: 'John', lname: 'Doe', email: 'john@yahoo.com' },
    { id: 4, fname: 'Julie', lname: 'Dooley', email: 'julie@gmail.com' }
  ]);

//   const randomId = () => {
//     const idNum = Math.random().toString(9).substr(2, 3);
//     const idStr = Math.random().toString(36).substr(2);
//     return idNum + idStr;
//   };

  const handleEdit = (rowId, colName, value) => {
    setData(prevData => {
      return prevData.map(item => {
        if (item.id === rowId) {
          return { ...item, [colName]: value };
        }
        return item;
      });
    });
  };

  return (
    <div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.id}>
              <td>
                <div
                  className="row_data"
                  contentEditable="true"
                  onBlur={e => handleEdit(item.id, 'fname', e.target.innerText)}
                >
                  {item.fname}
                </div>
              </td>
              <td>
                <div
                  className="row_data"
                  contentEditable="true"
                  onBlur={e => handleEdit(item.id, 'lname', e.target.innerText)}
                >
                  {item.lname}
                </div>
              </td>
              <td>
                <div
                  className="row_data"
                  contentEditable="true"
                  onBlur={e => handleEdit(item.id, 'email', e.target.innerText)}
                >
                  {item.email}
                </div>
              </td>
              <td>
                <span className="btn_save">
                  <button className="btn btn-link">Save</button>
                </span>
                |
                <span className="btn_cancel">
                  <button className="btn btn-link">Cancel</button>
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
    </div>
  );
};

export default EditableTable;