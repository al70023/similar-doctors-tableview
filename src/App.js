import React from "react";
import { useTable, useFilters } from 'react-table' 

function App() {

  const data = React.useMemo(() =>
    [
      {
        name: 'Kim Parrish',
        location: '4420 Valley Street, Garnerville, NY 10923',
        specialty: '07/11/2020',
        rating: '87349585892118',
      }
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
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default App;
