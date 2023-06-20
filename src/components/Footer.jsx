import React from 'react'
import {Col, Row} from 'react-bootstrap'
import { BiCopyright } from 'react-icons/bi'
import { AiOutlineInstagram } from 'react-icons/ai'
import { BsFacebook } from 'react-icons/bs'
import '../index.css'


const Footer = () => {
  return (
    <>
    <footer className='container-fluid bg-black p-3 text-white mt-5 ' style={{height:'5rem'}}>
        
        
        <div className=' d-flex'> 
            
            <BsFacebook/>
                <AiOutlineInstagram className=' ms-2 t footer-icon' style={{fontSize:"20px"}}/>
            </div>
            
        
        <Col md='6'className='float-end'>
            <Row className=' float-end '>
            <span > <BiCopyright/>Copyright-2023</span>
            </Row>
        </Col>
        
    </footer>
    </>
  )
}

export default Footer