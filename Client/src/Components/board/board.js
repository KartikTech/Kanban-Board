import React, { useState } from 'react'
import Card from '../card/card'
import './board.css'
import AddModal from '../AddModal/AddModal'

function Board(props) {

  const [show,setShow]=useState(false)

  const handleClose = ()=>{
    setShow(false)
  }

  const handleShow = ()=>{
      setShow(true)
  }

  return (
    <div className='m-auto col-12 px-5 px-md-3' style={{maxHeight:"100%"}}>
        <div className='mb-2'>
            <p className='d-inline fw-bold'>{props.title}<span className='badge rounded-pill bg-secondary ms-3'>{props.data.length>0 && props.data.length}</span></p><a className='button' onClick={()=>handleShow()}><i style={{cursor:'pointer'}} className="bi bi-plus-circle float-end me-1"></i></a>
        </div>
        <div style={{backgroundColor:props.color, height:"75vh", overflowY:"scroll"}} className='p-2 border-bottom rounded no-scrollbar container-fluid' onDragEnter={()=>props.handleDragEnter(props.title)}>
          <div className='row'>
            {props.data.length>0 && props.data.map((cards)=><Card key={cards._id} id={cards._id} title={cards.title} desc={cards.description} status={cards.status} change={props.change} handleDragEnd={props.handleDragEnd} handleDragEnter={props.handleDragEnter}/>)}
          </div>
        </div>
        <AddModal status={props.title} show={show} handleClose={handleClose} change={props.change}/>
    </div>
  )
}

export default Board