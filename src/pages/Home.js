import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Concard from '../components/Concard'
import { Col, Container, Row } from 'react-bootstrap'

function Home() {
    const [contacts, setcontacts] = useState([])
    const fetchData = async () => {
        const result = await axios.get('/db.json')
        setcontacts(result.data.contacts);
        console.log("home", result);
    }
    useEffect(() => {
        fetchData()
    }, [])
    console.log(contacts);
    return (

        <>
            <Container>
            <h1 style={{ fontFamily: 'bold', textAlign: 'center' }}>Find Your Favorite Person's Contact</h1>
<p>  You've come to the right place. In this contact web app, you can easily search for and find the contact information of your most cherished individuals. Whether it's a friend, family member, or a special someone, our app makes it simple to access their details.</p>

<p>Simply use the search feature to look up their name or phone number, and you'll have their contact information at your fingertips. Stay connected with your favorite people and never lose track of their contact details again.</p>


                <Row className='mt-5'>
                    <Col>
                        <h1 style={{ textAlign: 'center' }}></h1>
                    </Col>


                </Row>

                <Row>

                    {
                        contacts.map(i => (

                            <Col className='ps-3 mt-3 p-2 ' lg={3} md={4} sm={6}>
                                <Concard item={i}></Concard>

                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </>
    )
}

export default Home