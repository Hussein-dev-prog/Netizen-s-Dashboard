import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';
import { Route, Link, Routes, useParams } from 'react-router-dom';
import axios from 'axios';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function ClientDetails() {
  const [client, setClient] = React.useState({});
  const params = useParams();
  const id = params.id;
  const [projects, setProjects] = React.useState({});

  const fetchData = async () =>{
    // const clientres = await axios.get('http://localhost:8000/api/user/' + id, { headers: { 'Authorization': 'Bearer ' + '1|08JCKKGqY1kGe72HCZA3MfgqBiUJ7gK5yLnPzYsj' } })
    // const clientdata = clientres.data.data;
    // setClient(clientdata);
    // const projectsres =  await axios.get('http://localhost:8000/api/project/all', { params: { user_id:id }, headers: { 'Authorization': 'Bearer ' + '1|08JCKKGqY1kGe72HCZA3MfgqBiUJ7gK5yLnPzYsj' } })
    // const projectdata = projectsres.data.data[0][0];
    // console.log(projectdata)
    // setProjects(projectdata);
    const [clientres, projectsres] = await Promise.all([
      axios.get('http://localhost:8000/api/user/' + id, { headers: { 'Authorization': 'Bearer ' + '1|08JCKKGqY1kGe72HCZA3MfgqBiUJ7gK5yLnPzYsj' } }),
      axios.get('http://localhost:8000/api/project/all', { params: { user_id:id }, headers: { 'Authorization': 'Bearer ' + '1|08JCKKGqY1kGe72HCZA3MfgqBiUJ7gK5yLnPzYsj' } })
    ]);
        const clientdata = clientres.data.data;
    setClient(clientdata);
    const projectdata = projectsres.data.data[0][0];
    console.log(projectdata)
    setProjects(projectdata);
  }
  useEffect(() => {
    fetchData();

  }, [id])

  return (
    <div>
      <>
        <Typography variant="h5" ><span style={{ fontWeight: 'bold' }}>Full Name:</span> {client.first_name}</Typography>
        <Typography variant="h5" ><span style={{ fontWeight: 'bold' }}>Email :</span>{client.email}</Typography>
        <Typography variant="h5" ><span style={{ fontWeight: 'bold' }}>Phone Number :</span>{client.phone? client.phone:'No Phone Number'}</Typography>
      </>
      {!projects?''
     
      :
      <Accordion sx={{ backgroundColor: '#DD1176', color: 'white', marginTop: '20px' }} >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>Title:<>&nbsp;</>{projects.title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
        Description:<>&nbsp;</>{projects.description}
        </Typography>
        <Typography>
        Status:<>&nbsp;</>{projects.status}
        </Typography>
        {projects.files}
      </AccordionDetails>
    </Accordion>
}
    </div>
  )
}

