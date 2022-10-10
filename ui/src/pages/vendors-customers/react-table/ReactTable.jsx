import { useMemo } from "react";
import { IconContext } from "react-icons";
import { GoKebabVertical } from "react-icons/go";
import { useGlobalFilter, usePagination, useRowSelect, useSortBy, useTable } from "react-table";

import { Button, Col, FormGroup } from "reactstrap";

import {
  TableUtilitiesWrapper,
  IndeterminateCheckbox,
  PaginationReactTable,
  Sorter,
  GlobalFilter,
} from ".";

export const ReactTable = ({ data, columns, selectElement }) => {
  const memoizedData = useMemo(() => data, [data]);
  console.log("data", data);
  const memoizedColumns = useMemo(() => columns, [columns]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    rows,
    canPreviousPage,
    canNextPage,
    pageOptions,
    nextPage,
    previousPage,
    setPageSize,
    gotoPage,
    setGlobalFilter,
    selectedFlatRows,
    toggleAllRowsSelected,
    getToggleAllPageRowsSelectedProps,
    state: { pageIndex, pageSize, globalFilter },
  } = useTable(
    {
      columns: memoizedColumns,
      data: memoizedData,
      initialState: {
        hiddenColumns: ["id"],
      },
    },
    useGlobalFilter,
    useSortBy,
    usePagination,
    useRowSelect,
    hooks => {
      if (selectElement) {
        hooks.visibleColumns.push(columns => [
          {
            id: "selection",
            Header: () => {
              return (
                <div>
                  <IndeterminateCheckbox {...getToggleAllPageRowsSelectedProps()} />
                </div>
              );
            },
            Cell: ({ row }) => {
              return (
                <div>
                  <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
                </div>
              );
            },
          },
          ...columns,
        ]);
      }
    }
  );

  return (
    <>
      {/* <Row> */}
      {/* className="react-table-filter d-flex justify-content-between align-items-center" */}
      <Col md="2" className="react-table-filter d-inline">
        <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
        {selectElement && (
          <TableUtilitiesWrapper
            selectedFlatRows={selectedFlatRows}
            toggleAllRowsSelected={() => toggleAllRowsSelected(false)}
          >
            {selectElement}
          </TableUtilitiesWrapper>
        )}
      </Col>
      {/* <Col md="1"></Col> */}
      <Col md="" className="d-inline align-self-end">
        <FormGroup className="mt-2 d-inline">
          <IconContext.Provider md="" value={{ color: "676C6D", size: "20px", padding: "" }}>
            <GoKebabVertical className="p-1 border border-grey rounded" role="button" />
          </IconContext.Provider>
          <Button
            className="d-inline ml-2 btn btn-primary rounded-pill btn-sm h-50"
            style={{ width: "6rem" }}
            color="primary"
            // onClick={onCreateNewCustomer}
          >
            + Customer
          </Button>
        </FormGroup>
      </Col>
      {/* </Row> */}
      <table {...getTableProps()} className="react-table w-100">
        <thead className="react-table-thead">
          {
            // Loop over the header rows
            headerGroups.map((headerGroup, i) => (
              // Apply the header row props
              <tr {...headerGroup.getHeaderGroupProps()} key={i} className="react-table-tr">
                {
                  // Loop over the headers in each row
                  headerGroup.headers.map((column, i) => {
                    return (
                      // Apply the header cell props
                      <th
                        {...column.getHeaderProps(column.getSortByToggleProps())}
                        key={i}
                        className="react-table-th h-50 text-capitalize"
                        style={{ background: "#F0F1F7", color: "#595C5D" }}
                      >
                        {
                          // Render the header
                          column.render("Header")
                        }
                        <Sorter column={column} />
                      </th>
                    );
                  })
                }
              </tr>
            ))
          }
        </thead>

        {/* Apply the table body props */}
        <tbody {...getTableBodyProps()} className="react-table-tbody">
          {selectElement && (
            <div className="react-table-all-checkbox">
              <IndeterminateCheckbox {...getToggleAllPageRowsSelectedProps()} />
            </div>
          )}
          {
            // Loop over the table rows
            page.map(row => {
              // Prepare the row for display
              prepareRow(row);
              return (
                // Apply the row props
                <tr {...row.getRowProps()} className="react-table-tr">
                  {
                    // Loop over the rows cells
                    row.cells.map(cell => {
                      // Apply the cell props
                      return (
                        <td
                          data-label={cell.column.Header}
                          {...cell.getCellProps()}
                          className="react-table-td"
                        >
                          {
                            // Render the cell contents
                            cell.render("Cell")
                          }
                        </td>
                      );
                    })
                  }
                </tr>
              );
            })
          }
        </tbody>
      </table>
      <PaginationReactTable
        canPreviousPage={canPreviousPage}
        canNextPage={canNextPage}
        pageOptions={pageOptions}
        nextPage={nextPage}
        previousPage={previousPage}
        setPageSize={setPageSize}
        pageIndex={pageIndex}
        pageSize={pageSize}
        gotoPage={gotoPage}
        rows={rows}
      />
    </>
  );
};
