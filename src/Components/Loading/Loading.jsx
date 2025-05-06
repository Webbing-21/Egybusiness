import React from 'react'
import { Spinner } from 'react-bootstrap'

function LoadingPage() {
  return (
    <main style={{width: '100vw', height: '100vh', position: 'fixed', top: "54px", left: '0',zIndex: '4545015145', backgroundColor: '', display: 'flex', justifyContent:'center', alignItems: 'center'}}>
      <div style={{backgroundColor: '#fff', padding: '15px', borderRadius: "10px"}}>
        <Spinner  animation="border" size='lg' variant="warning" />
      </div>
    </main>
  )
}

export default LoadingPage