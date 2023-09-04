import React, { useState } from 'react'
import "bootstrap-icons/font/bootstrap-icons.css";
import axios from 'axios';
import EditModal from '../EditModal/EditModal';

function Card(props) {

  const onDelete = (_id)=>{
    axios.post(process.env.REACT_APP_API+'/api/task/delete/'+_id)
    .then(()=>{
      props.change()
    })
  }

  const [show,setShow]=useState(false)

  const handleClose = ()=>{
    setShow(false)
  }

  const handleShow = ()=>{
      setShow(true)
  }

  return (
    <div className='col-12'>
      <div className="card m-auto mb-2" draggable onDragEnd={()=>props.handleDragEnd(props.id)} onDragEnter={()=>props.handleDragEnter(props.status)}>
          <div className="card-body" style={{cursor:'move'}}>
              <h5 className="card-title">{props.title}</h5>
              <p className="card-text">{props.desc}</p>
              <a className="button card-link" style={{cursor:'pointer'}} onClick={()=>handleShow()}><i class="bi bi-pencil-fill"></i></a>
              <a className="button card-link" style={{cursor:'pointer'}} onClick={()=>onDelete(props.id)}><i class="bi bi-trash text-danger"></i></a>
          </div>
          <EditModal title={props.title} status={props.status} description={props.desc} id={props.id} show={show} handleClose={handleClose} change={props.change}/>
      </div>
    </div>
  )
}

export default Card