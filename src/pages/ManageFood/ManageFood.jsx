// import React, { useContext, useEffect, useState } from 'react';
import React from 'react';
import { useTable } from 'react-table';
import fakeData from "../../MOCK_DATA.json";
import './ManageFood.css';
// import { AuthContext } from '../../Provider/AuthProvider';

const ManageFood = () => {
//     const {user} = useContext(AuthContext);
//     const [foods,setFoods] = useState([]);

// useEffect(()=>{
//     fetch(`http://localhost:5000/createFood?email=${user?.email}`)
//     .then(res=>res.json())
//     .then(data=>setFoods(data))
// },[])

const data = React.useMemo(() => fakeData, []);
  const columns = React.useMemo(
    () => [
      
      {
        Header: "First Name",
        accessor: "first_name",
      },
      {
        Header: "Last Name",
        accessor: "last_name",
      },
      {
        Header: "Email",
        accessor: "email",
      },
      {
        Header: "Gender",
        accessor: "gender",
      },
      {
        Header: "University",
        accessor: "university",
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

    return (
        <div className="my-12">
        <table id='customers' {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()}> {cell.render("Cell")} </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
};

export default ManageFood;