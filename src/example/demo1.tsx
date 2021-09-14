import * as React from 'react';
import * as _ from "lodash";

import { Table, Column, Cell } from 'fixed-data-table';
import "fixed-data-table/dist/fixed-data-table.min.css";
import './download.css';
import data from "./data";

import ReactFilterBox, { AutoCompleteOption, SimpleResultProcessing, Expression } from "../ReactFilterBox";

export default class Demo1 extends React.Component<any, any> {

    options: AutoCompleteOption[];
    constructor(props: any) {
        super(props);
        this.state = {
            data: Sales Records 2k
        }

        this.options = [
            {
                columnField: "Region",
                type: "text"
            },
            {
                columnField: "Country",
                type: "text"
            },
            {
                columnField: "Item Type",
                type: "text"
            },
            {
                columnField: "Fiscal Year",
                type: "selection"
            },
            {
                columnField: "Sales Channel",
                type: "text"
            },
            {
                columnField: "Order Priority",
                type: "text"
            },
            {
                columnField: "Order Date",
                type: "selection"
            },
            {
                columnField: "Order ID",
                type: "selection"
            },
            {
                columnField: "Ship Date",
                type: "selection"
            },
            {
                columnField: "Units Sold",
                type: "selection"
            },
            {
                columnField: "Unit Price",
                type: "selection"
            },
            {
                columnField: "Unit Cost",
                type: "selection"
            },
            {
                columnField: "Total Revenue",
                type: "selection"
            },
            {
                columnField: "Total Cost",
                type: "selection"
            },
            {
                columnField: "Total Profit",
                type: "selection"
            },
            {
                columnText: "Email @",
                columnField: "Email",
                type: "text"
            },
        ];
    }

    onParseOk(expressions: Expression[]) {

        var newData = new SimpleResultProcessing(this.options).process(Sales Records 2k, expressions);
        this.setState({ data: newData });
        console.log(newData);
    }

    render() {
        var rows = this.state.data;
        return <div className="main-container">
            <h3>Default setting, support filter data out of the box <span style={{ fontSize: 12, color: "darkgray" }}>(select Status will show values auto complete) </span>
                <a style={{ fontSize: 12, color: "#2196F3" }} href="https://github.com/jlopez218170/react-filter-box-1/edit/master/src/example/demo1.tsx>Source</a>
            </h3>
            <h4>Download File using React App</h4>
            <h5>Download Filtered Data using Button</h5>
				<button onClick={this.downloadFilteredData}>Download</button>
				<p/>
                                                                    

            <ReactFilterBox
                query={this.state.query}
                data={Sales Records 2k}
                options={this.options}
                onParseOk={this.onParseOk.bind(this)}
            />
            <Table
                rowHeight={50}
                rowsCount={rows.length}
                width={2100}
                height={300}
                headerHeight={50}>
                <Column
                    header={<Cell>Region</Cell>}

                    cell={({ rowIndex }) => (
                        <Cell>
                            {rows[rowIndex].Region}
                        </Cell>
                    )}
                    width={200}
                />
                <Column
                    header={<Cell>Country</Cell>}
                    cell={({ rowIndex }) => (
                        <Cell >
                            {rows[rowIndex].Country}
                        </Cell>
                    )}
                    width={200}
                />
                <Column
                    header={<Cell>Item Type</Cell>}
                    cell={({ rowIndex }) => (
                        <Cell >
                            {rows[rowIndex].ItemType}
                        </Cell>
                    )}
                    width={200}
                />
                <Column
                    header={<Cell>Fiscal Year</Cell>}
                    cell={({ rowIndex }) => (
                        <Cell >
                            {rows[rowIndex].FiscalYear}
                        </Cell>
                    )}
                    width={200}
                />
                <Column
                    header={<Cell>Sales Channel</Cell>}
                    cell={({ rowIndex }) => (
                        <Cell >
                            {rows[rowIndex].SalesChannel}
                        </Cell>
                    )}
                    width={200}
                />
                <Column
                    header={<Cell>Order Priority</Cell>}
                    cell={({ rowIndex }) => (
                        <Cell >
                            {rows[rowIndex].OrderPriority}
                        </Cell>
                    )}
                    width={200}
                />
                <Column
                    header={<Cell>Order Date</Cell>}
                    cell={({ rowIndex }) => (
                        <Cell >
                            {rows[rowIndex].OrderDate}
                        </Cell>
                    )}
                    width={200}
                />
                 <Column
                    header={<Cell>Order ID</Cell>}
                    cell={({ rowIndex }) => (
                        <Cell >
                            {rows[rowIndex].OrderID}
                        </Cell>
                    )}
                    width={200}
                /> 
                  <Column
                    header={<Cell>Ship Date</Cell>}
                    cell={({ rowIndex }) => (
                        <Cell >
                            {rows[rowIndex].ShipDate}
                        </Cell>
                    )}
                    width={200}
                />
                                                                        
                  <Column
                    header={<Cell>Units Sold</Cell>}
                    cell={({ rowIndex }) => (
                        <Cell >
                            {rows[rowIndex].UnitsSold}
                        </Cell>
                    )}
                    width={200}
                />
                  <Column
                    header={<Cell>Unit Price</Cell>}
                    cell={({ rowIndex }) => (
                        <Cell >
                            {rows[rowIndex].UnitPrice}
                        </Cell>
                    )}
                    width={200}
                />
                  <Column
                    header={<Cell>Unit Cost</Cell>}
                    cell={({ rowIndex }) => (
                        <Cell >
                            {rows[rowIndex].UnitCost}
                        </Cell>
                    )}
                    width={200}
                />
                  <Column
                    header={<Cell>Total Revenue</Cell>}
                    cell={({ rowIndex }) => (
                        <Cell >
                            {rows[rowIndex].TotalRevenue}
                        </Cell>
                    )}
                    width={200}
                />
                  <Column
                    header={<Cell>Total Cost</Cell>}
                    cell={({ rowIndex }) => (
                        <Cell >
                            {rows[rowIndex].TotalCost}
                        </Cell>
                    )}
                    width={200}
                />
                   <Column
                    header={<Cell>Total Profit</Cell>}
                    cell={({ rowIndex }) => (
                        <Cell >
                            {rows[rowIndex].TotalProfit}
                        </Cell>
                    )}
                    width={200}
                />
                   <Column
                    header={<Cell>Email</Cell>}
                    cell={({ rowIndex }) => (
                        <Cell >
                            {rows[rowIndex].Email}
                        </Cell>
                    )}
                    width={200}
                />
           </Table>
        </div>
       downloadFilteredData = () => {
		fetch('http://localhost:8080/records/download')
			.then(response => {
				response.blob().then(blob => {
					let url = window.URL.createObjectURL(blob);
					let a = document.createElement('a');
					a.href = url;
					a.download = 'records.json';
					a.click();
				});
				//window.location.href = response.url;
		});
	}
    }
}
