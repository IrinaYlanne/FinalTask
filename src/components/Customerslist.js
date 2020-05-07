import React, {useState, useEffect} from 'react';
import ReactTable from 'react-table-v6'
import 'react-table-v6/react-table.css'



export default function Customerslist(props) {
const [customers, setCustomers]=useState([]);

useEffect(()=>{
    getCustomers();
},
[])

const getCustomers = () => {
    fetch('https://customerrest.herokuapp.com/api/customers')
    .then(response => response.json())
    .then(data => setCustomers(data.content))
    .catch(err => console.error(err))
}
const columns =[
    {
    Header: 'Firstname',
    accessor: 'firstname'
    },
    {
        Header: 'Lastname',
        accessor: 'lastname'
        },

        {
            Header: 'Streetaddress',
            accessor: 'streetaddress'
            },
            {
                Header: 'Postcode',
                accessor: 'postcode'
                },
                {
                    Header: 'City',
                    accessor: 'city'
                    },
                    {
                        Header: 'Email',
                        accessor: 'email'
                        }
    ]
return(
    <div>

<ReactTable defaultPageSize={10} filterable ={true} data={customers} columns={columns} />
    </div>
);
}