import React from "react";
import { useTable, useFilters } from 'react-table' 
import TableCell from '@mui/material/TableCell';

function App() {

  const data = React.useMemo(() =>
    [
      {
        name: 'Ola Adams',
        location: 'Scott and White Clinic',
        specialty: 'Internal Medicine',
        rating: '4.8',
      },
      {
        name: 'Rochelle Adams',
        location: 'Scott and White Clinic',
        specialty: 'Nurse Practitioner',
        rating: '4.6',
      },
      {
        name: 'Sachin Agarwal',
        location: 'Scott and White Clinic',
        specialty: 'Medical Oncology',
        rating: '4.9',
      },
      {
        name: 'Grace M. Akinyi-Joseph',
        location: 'Scott and White Clinic',
        specialty: 'Hematology/Oncology',
        rating: '4.7',
      },
      {
        name: 'Eric N. Alford',
        location: 'Scott and White Clinic',
        specialty: 'Family Practice',
        rating: '4.9',
      },
      {
        name: 'Katherine E. Alford',
        location: 'Scott and White Clinic',
        specialty: 'Internal Medicine',
        rating: '4.4',
      },
      {
        name: 'Brian T. Abbey',
        location: 'Brazos Valley Foot Care PA',
        specialty: 'Podiatry',
        rating: '4.7',
      },
      {
        name: 'Creed W. Abell, MD',
        location: 'Bryan Radiology Associates',
        specialty: 'Diagnostic Radiology',
        rating: '4.8',
      },
      {
        name: 'Kwame Ofori Affram',
        location: 'St. Joseph Regional Health Center',
        specialty: 'Internal Medicine',
        rating: '4.8',
      },
      {
        name: 'Julie N. Albert, DPM',
        location: 'Brazos Valley Foot Care PA',
        specialty: 'Podiatry',
        rating: '4.9',
      },
      {
        name: 'Amina N. Alikhan',
        location: 'Scott and White Clinic',
        specialty: 'Internal Medicine',
        rating: '4.5',
      },
      {
        name: 'Mir Z. Alikhan, MD',
        location: 'Bryan Radiology Associates',
        specialty: 'Diagnostic Radiology',
        rating: '4.3',
      },
      {
        name: 'Amanda Allen',
        location: 'Regional Employee Assistance Program Inc.',
        specialty: 'Nurse Practitioner',
        rating: '4.8',
      },
      {
        name: 'Russell B. Bacak, MD',
        location: 'St. Joseph Regional Health Center',
        specialty: 'Family Practice',
        rating: '4.9',
      },
      {
        name: 'Samuel F. Barker',
        location: 'Scott and White Clinic',
        specialty: 'Family Practice',
        rating: '4.9',
      },
      {
        name: 'Ashley Gwen Barnes',
        location: 'Scott and White Clinic',
        specialty: 'Nurse Practitioner',
        rating: '4.9',
      },
      {
        name: 'Justin B. Barrow, MD',
        location: 'Scott and White Clinic',
        specialty: 'Family Practice',
        rating: '4.7',
      },
      {
        name: 'Jeremiah E. Bast',
        location: 'Regional Employee Assistance Program Inc.',
        specialty: 'Nurse Practitioner',
        rating: '4.6',
      },
      {
        name: 'Marcus Allen Baxter',
        location: 'Scott and White Clinic',
        specialty: 'Podiatry',
        rating: '5.0',
      },
      {
        name: 'Svijetlana Begovic',
        location: 'Scott and White Clinic',
        specialty: 'Internal Medicine',
        rating: '5.0',
      },
      {
        name: 'Jaime C. Benton, MD',
        location: 'Scott and White Clinic',
        specialty: 'Family Practice',
        rating: '4.4',
      },
      {
        name: 'Charis Durham',
        location: 'Kumud S. Tripathy and Associates',
        specialty: 'Medical Oncology',
        rating: '4.8',
      },
      {
        name: 'Erin E. Fleener, MD',
        location: 'Kumud S. Tripathy and Associates',
        specialty: 'Medical Oncology',
        rating: '4.9',
      },
      {
        name: 'Howard Dai',
        location: 'Scott and White Clinic',
        specialty: 'Diagnostic Radiology',
        rating: '4.7',
      },
      {
        name: 'Alex Dalke',
        location: 'Scott and White Clinic',
        specialty: 'Diagnostic Radiology',
        rating: '4.6',
      },


    ],
    []
  )

  const columns = React.useMemo(
    () => [
      {
        Header: ' ',
        columns: [
          {
            Header: 'Name',
            accessor: 'name',
          },
          {
            Header: 'Location',
            accessor: 'location',
          },
          {
            Header: 'Specialty',
            accessor: 'specialty',
          },
          {
            Header: 'Rating',
            accessor: 'rating',
          },
        ],
      },
    ],
    []
  )

  const defaultColumn = React.useMemo(
    () => ({
      Filter: TextFilter,
    }),
    []
   )

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable(
    {
      columns,
      data,
      defaultColumn
    },
    useFilters
  )

  function TextFilter({
    column: { filterValue, preFilteredRows, setFilter },
   }) {
    const count = preFilteredRows.length
   
    return (
      <input
        value={filterValue || ''}
        onChange={e => {
          setFilter(e.target.value || undefined)
        }}
        placeholder={`Browse ${count} records...`}
      />
    )
   }

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}
                style={{
                  borderBottom: 'solid 3px black',
                  background: 'white',
                  color: 'black',
                  fontWeight: 'bold',
                }}
              >
                {column.render('Header')}
                <div>{column.canFilter ? column.render('Filter') : null}</div>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <TableCell {...cell.getCellProps()}>{cell.render('Cell')}</TableCell>
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default App;
