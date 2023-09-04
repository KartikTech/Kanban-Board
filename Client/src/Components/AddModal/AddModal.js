import axios from 'axios';
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function AddModal(props) {

    const [data,setData] = useState({
        title:'',
        description:'',
        status:''
    })

    useState(()=>{
        setData({...data,status:props.status})
    })

    const changeHandler = (e)=>{
        setData({...data,[e.target.id]:e.target.value})
    }

    const onSubmit = ()=>{
        axios.post(process.env.REACT_APP_API+'/api/task',data)
        .then(()=>{props.change();
          setData({title:'',description:'',status:''})})
        props.handleClose()
    }

  return (
    <Modal
      show={props.show}
      onHide={props.handleClose} 
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        {props.status}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
            <div className="mb-3">
                <label className="form-label">Title</label>
                <input type="text" className="form-control" placeholder="title" id="title" onChange={e=>changeHandler(e)} value={data.title}/>
                </div>
                <div className="mb-3">
                <label className="form-label">Description</label>
                <textarea className="form-control" rows="3" id="description" onChange={e=>changeHandler(e)} value={data.description}></textarea>
            </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={()=>{props.handleClose(),setData({title:'',description:'',status:''})}}>Close</Button>
        <Button variant='primary' onClick={()=>onSubmit()}>Add</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default AddModal