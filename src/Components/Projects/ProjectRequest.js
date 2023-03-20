import * as React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { DataGrid } from '@mui/x-data-grid';

export default function ProjectRequest() {
  const [request, setRequest] = React.useState([]);
  useEffect(() => {
    axios.get('http://localhost:8000/api/project/all', { params: { status: 'pending', }, headers: { 'Authorization': 'Bearer ' + '1|08JCKKGqY1kGe72HCZA3MfgqBiUJ7gK5yLnPzYsj' } })
      .then(res => {
        const data = res.data.data;
        console.log(data[0]);
        setRequest(data);
        // setUser(data.user_id)
        // console.log(request);

      })

  }, [])


  const columns = [
    { field: 'id', headerName: 'ID', width: 400 },
    {
      field: 'title',
      headerName: 'Title',
      width: 400,
      editable: false,
    },
    {
      field: 'type',
      headerName: 'Type',
      width: 400,
      editable: false,
    }
  ];

  const rows = request;

// console.log(user);
  return (

    <div style={{ height: 580, width: '100%' }}>
      <DataGrid
      rows={rows}
      columns={columns}
      pageSize={9}
      rowsPerPageOptions={[9]}
      // checkboxSelection
    />
    </div>
  )
}
