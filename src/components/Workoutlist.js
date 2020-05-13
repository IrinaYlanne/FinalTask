import React, {useState, useEffect} from 'react';
import ReactTable from 'react-table-v6'
import 'react-table-v6/react-table.css'
import moment from 'moment'
import Button from '@material-ui/core/Button';




export default function Workoutlist(props) {
const [trainings, setTrainings]=useState([]);
const [open, setOpen] = useState(false);
const [msg, setMsg] = useState('');


useEffect(()=>{
    getTrainings();
},
[])



const getTrainings = () => {
    fetch('https://customerrest.herokuapp.com/gettrainings')
    .then(response => response.json())
    .then(data => setTrainings(data))
     .catch(err => console.error(err))
    }


    const deleteTraining = (link) => {
console.log(link);

if (window.confirm('Are you sure?')) {
fetch(`https://customerrest.herokuapp.com/api/trainings/${link}`, {method:'DELETE'})


    .then(_ => getTrainings())
    .then(_ => {
        setMsg('Training deleted')
        
        setOpen(true);
    })
    .catch(err => console.error(err))
}      

        
    }




const columns =[
    {
    Header: 'Date',
    accessor: 'date',
    Cell: row => moment(row.value).format('DD.MM.YYYY HH:MM')
    
    },
        {
            Header: 'Activity',
            accessor: 'activity', 
            },
            {
                Header: 'Duration',
                accessor: 'duration'
                },
            {
                Header: 'Customer lastname',
                accessor: 'customer.lastname'
                },
                {
                    Header: 'Customer firstname',
                    accessor: 'customer.firstname'
                    },
                    {accessor:'id',
                    filterable: false,
                    minWidth: 60,
                    Cell: row => (<Button color="secondary" size="small" onClick={() => deleteTraining(row.original.id)}>Delete</Button>)
                    }
        
    ]

return(
    <div>
<ReactTable   defaultPageSize={10} filterable ={true} data={trainings}  columns={columns} />
    </div>
);
}