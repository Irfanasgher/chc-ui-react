import React, { Component, Fragment } from 'react'
import {Table} from "rsuite";
import './table.scss';
import SearchButton from "./SearchInput";
const { Pagination } = Table;
export default class ReactTable extends Component {
    constructor(props) {
        super(props)

    }
    render() {
     const   {
            activePage,
                displayLength,
                total,
                onChangePage,
                onChangeLength,
                data,
                loading,
         handleFilterChange
        } = this.props
            return (
          <Fragment>
              <SearchButton
              handleFilterChange={handleFilterChange}
          />

              <Table autoHeight={true}
                     data={data}
                     bordered
                     cellBordered
                     virtualized={false}
                     hover={true}
                     loading={loading}
              >
                  {this.props.children}
              </Table>
              <Pagination
                  lengthMenu={[
                      {
                          value: 10,
                          label: 10
                      },
                      {
                          value: 20,
                          label: 20
                      }
                  ]}
                  activePage={activePage}
                  displayLength={displayLength}
                  total={total}
                  onChangePage={onChangePage}
                  onChangeLength={onChangeLength}
              />
          </Fragment>
            )
    }
}