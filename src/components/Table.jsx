import React, { useEffect, useRef } from 'react';
import DataTable from 'datatables.net';

const ExampleTable = () => {
  const tableRef = useRef(null);

  useEffect(() => {
    const table = DataTable(tableRef.current, {
      initComplete: function () {
        this.api().columns().every(function () {
          let column = this;
          let title = column.footer().textContent;

          // Create input element
          let input = document.createElement('input');
          input.placeholder = title;
          column.footer().replaceChildren(input);

          // Event listener for user input
          input.addEventListener('keyup', () => {
            if (column.search() !== input.value) {
              column.search(input.value).draw();
            }
          });
        });
      }
    });

    return () => {
      // Clean up DataTable when component unmounts
      table.destroy();
    };
  }, []);

  return (
    <table id="example" className="display" style={{ width: '100%' }} ref={tableRef}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Position</th>
          <th>Office</th>
          <th>Age</th>
          <th>Start date</th>
          <th>Salary</th>
        </tr>
      </thead>
      <tfoot>
        <tr>
          <th>Name</th>
          <th>Position</th>
          <th>Office</th>
          <th>Age</th>
          <th>Start date</th>
          <th>Salary</th>
        </tr>
      </tfoot>
    </table>
  );
};

export default ExampleTable;
