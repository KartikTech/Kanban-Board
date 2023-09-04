import React, { useEffect, useState } from 'react'
import Board from '../board/board'
import axios from 'axios'

function Board_container() {
  
  const [todo, setTodo] = useState([])
  const [doing, setDoing] = useState([])
  const [done,setDone] = useState([])
  const [ch,setCh] = useState(1)
  const [dragStatus,setDragStatus] = useState('')
  const [isLoading,setIsLoading] = useState(true)

  useEffect(()=>{
    axios.get(process.env.REACT_APP_API+'/api/task')
    .then(res=>{
      const td = res.data.filter(item=>item.status==="To Do")
      setTodo(td)
      const d = res.data.filter(item=>item.status==="Doing")
      setDoing(d)
      const dn = res.data.filter(item=>item.status==="Done")
      setDone(dn)
      setIsLoading(false)
    })
  },[ch])

  const change = ()=>{
    setCh(pr=>pr+1)
  }

  const handleDragEnter = (status)=>{
    setDragStatus(status)
  }

  const handleDragEnd = (cid)=>{
    axios.post(process.env.REACT_APP_API+"/api/task/status",{id:cid,status:dragStatus})
    .then(()=>{
      change()
    })
  }

  return (
    <div className='container-fluid'>
      {isLoading ? <div className='d-flex justify-content-center'>
        <button class="btn btn-lg btn-primary position-absolute" style={{marginTop:'20%'}} type="button" disabled>
          <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
          <span class="visually-hidden">Loading...</span>
          <span className='ms-2'>Loading</span>
        </button>
        <strong>Note:</strong>&nbsp;Loading may take time for the first time you open because it's hosted on free server.
      </div> :
      <div className='row'>
        <div className='col-12 col-md-4 mb-3 mt-3'>
            <Board title="To Do" color="#f5b8bc" data={todo} change={change} handleDragEnd={handleDragEnd} handleDragEnter={handleDragEnter}/>
        </div>
        <div className='col-12 col-md-4 mb-3 mt-3'>
            <Board title="Doing" color="#fad9a5" data={doing} change={change} handleDragEnd={handleDragEnd} handleDragEnter={handleDragEnter}/>
        </div>
        <div className='col-12 col-md-4 mb-3 mt-3'>
            <Board title="Done" color="#b1f2c2" data={done} change={change} handleDragEnd={handleDragEnd} handleDragEnter={handleDragEnter}/>
        </div>
        <p className='col-12 text-center mt-3 mb-3'>Developed by <strong>Kartikey Srivastava</strong></p>
      </div>}
    </div>
  )
}

export default Board_container