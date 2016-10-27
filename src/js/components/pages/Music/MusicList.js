import React from "react";
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';


export default class MusicList extends React.Component {
    constructor() {
        super();
        this.state = {
        };
    }


// http://allenfang.github.io/react-bootstrap-table/advance.html

    render() {
        // products will be presented by ReactBsTable
        let products = [
            {
                id: 1,
                name: "Product1",
                price: 120
            },{
                id: 2,
                name: "Product2",
                price: 80
            },{
                id: 3,
                name: "Product3",
                price: 207
            },{
                id: 4,
                name: "Product4",
                price: 100
            },{
                id: 5,
                name: "Product5",
                price: 150
            },{
                id: 6,
                name: "Product1",
                price: 160
            }
        ];

        let cellEditProp = {
            mode: "click",
            blurToSave: true
        };

// validator function pass the user input value and should return true|false.
        function jobNameValidator(value){
            if(!value){
                return 'Job Name is required!'
            }else if(value.length<10){
                return 'Product Name length must great 10 char'
            }
            return true;
        }

        function mySortFunc(a, b, order){   //order is desc or asc
            return a.count - b.count;
        }

        return (
            <div>
                <LinkContainer  to="music_add">
                    <Button bsSize="large" bsStyle="primary">Add</Button>
                </LinkContainer>
                <LinkContainer to="music_get">
                    <Button bsSize="large" bsStyle="primary">Get</Button>
                </LinkContainer>
                <BootstrapTable data={products} cellEdit={cellEditProp} striped={true} hover={true}>
                    <TableHeaderColumn isKey={true} dataField="id" dataSort={true} sortFunc={mySortFunc}>Product ID</TableHeaderColumn>
                    <TableHeaderColumn dataField="name" editable={{type:'textarea', validator:jobNameValidator}} dataSort={true}  sortFunc={mySortFunc}>Product Name</TableHeaderColumn>
                    <TableHeaderColumn dataField="price" dataSort={true} sortFunc={mySortFunc}>Product Price</TableHeaderColumn>
                </BootstrapTable>


            </div>
        )
    }

}

