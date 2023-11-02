import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Concard({item}) {
  return (

        <div >
          <Link to={`/view/${item.mobile}`} style={{textDecoration:'none',  }}>
          <Card className='container p-2' style={{ width: '15rem'}}>
            <Card.Img style={{height:'15rem', }} variant="top" src={item.profile} />
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>{item.mobile}</Card.Text>
              <Card.Text>{item.location}</Card.Text>

            </Card.Body>
          </Card>
          </Link>
        </div>
  )
}

export default Concard