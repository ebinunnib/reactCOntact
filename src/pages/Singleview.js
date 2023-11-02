import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { useParams } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Singleview() {
    // State
    const [AllData, setData] = useState([]);
    const [singleData, setSingleData] = useState(null);

    // Create an object for useParams
    const { mob } = useParams();

    const fetchAllData = async () => {
        try {
            const result = await axios.get('/db.json');
            // Update the state with fetched data
            setData(result.data.contacts);
            console.log(AllData);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    useEffect(() => {
        // Fetch data when the component mounts
        fetchAllData();
    }, []); // Pass an empty dependency array to run this effect only once

    // Now, you can handle the data and update "singleData" separately when AllData changes
    useEffect(() => {
        if (AllData.length > 0) {
            console.log("hggh");
            const foundData = AllData.find(item => item.mobile === mob);
            console.log("foundData:", foundData);
            console.log("mobile:", mob);
            if (foundData) {
                setSingleData(foundData);
            }
        }
    }, [AllData, mob]);


    return (
        <div className='p-1'>
            <Row >

                <Col className='d-flex justify-content-center'>
                    {singleData ? (
                        <ListGroup className='p-1 bg-white'>
                            <ListGroup.Item>
                                <img className='p-1' style={{ width: '300px', height: '300px', marginTop: '75px' }} src={singleData.profile} alt="profile Image" />
                            </ListGroup.Item>
                            <ListGroup.Item style={{ width: '', height: '' }}> Name: {singleData.name}</ListGroup.Item>
                            <ListGroup.Item>Email: {singleData.email}</ListGroup.Item>
                            <ListGroup.Item>Phone: {singleData.mobile}</ListGroup.Item>
                            <ListGroup.Item>Location: {singleData.location}</ListGroup.Item>
                        </ListGroup>
                    ) : (
                        <p>Contact not found.</p>
                    )}
                </Col>

            </Row>
        </div>
    )
}

export default Singleview;
