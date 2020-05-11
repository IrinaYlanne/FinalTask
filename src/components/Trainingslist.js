import React, {useState, useEffect} from 'react';
import ReactTable from 'react-table-v6'
import 'react-table-v6/react-table.css'
import moment from 'moment'



export default function Trainingslist(props) {
const [trainings, setTrainings]=useState([]);


useEffect(()=>{
    getTrainings();
},
[])



const getTrainings = () => {
    fetch('https://customerrest.herokuapp.com/api/trainings')
    .then(response => response.json())
    .then(data => setTrainings(data.content))
    .catch(err => console.error(err))
}

const columns =[
    {
    Header: 'Date',
    accessor: 'date',
    Cell: row => moment(row.value).format('DD.MM.YYYY HH:MM')
    
    },
    {
        Header: 'Duration',
        accessor: 'duration'
        },

        {
            Header: 'Activity',
            accessor: 'activity'
            }
        
    ]

return(
    <div>
<ReactTable   defaultPageSize={10} filterable ={true} data={trainings}  columns={columns} />
    </div>
);
}