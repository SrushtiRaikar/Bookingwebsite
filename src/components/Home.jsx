import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { Button, Drawer, Radio, Space } from 'antd';
import { useState } from 'react';
import Table from 'react-bootstrap/Table';
import { Input } from 'antd';
import { DatePicker } from 'antd';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import { Container, Row, Col } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';



export default function Home() {
    //open drawer
    const [open, setOpen] = useState(false);
    const [placement, setPlacement] = useState('right');
    const showDrawer = () => {
        setOpen(true);
    };
    const onChangee = (e) => {
        setPlacement(e.target.value);
    };
    const onClose = () => {
        setOpen(false);
    };

    //datepicker
    const { RangePicker } = DatePicker;
    const onChange = (value, dateString) => {
        console.log('Selected Time: ', value);
        console.log('Formatted Selected Time: ', dateString);
    };
    const onOk = (value) => {
        console.log('onOk: ', value);
    };


    // cabin class and travellers
    // const form = document.querySelector('form');
    // form.addEventListener('submit', (event) => {
    //     event.preventDefault(); // prevent the form from submitting

    //     const cabinClass = document.getElementById('cabin-class').value;
    //     const numTravelers = document.getElementById('num-travelers').value;

    //     // do something with the selected values
    //     console.log(`Selected cabin class: ${cabinClass}`);
    //     console.log(`Selected number of travelers: ${numTravelers}`);
    // });

    return (
        <>
            <div >
                {/* <Carousel variant="dark">
                    <Carousel.Item>
                        <img
                            className=" c1 d-block w-100"
                            src="i1.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption>

                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className=" c2 d-block w-100"
                            src="i3.jpg"
                            alt="Second slide"
                        />
                        <Carousel.Caption>

                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className=" c3 d-block w-100"
                            src="i2.jpg"
                            alt="Third slide"
                        />
                        <Carousel.Caption>

                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel> */}

                <div className='first '>
                    <div><h1 className='one'>Explore the World !</h1></div>

                    <div className='btn  mb-4'>
                        <Space>
                            <Radio.Group value={placement} onChange={onChange}>
                                <Radio className='btnn' value="top">Return</Radio>
                                <Radio className='btnn' value="right">OneWay</Radio>
                                {/* <Radio value="bottom">bottom</Radio>
          <Radio value="left">left</Radio> */}
                            </Radio.Group>
                            <Button className='btn1' onClick={showDrawer}>
                                Open
                            </Button>
                        </Space>
                        <Drawer
                            title="Drawer with extra actions"
                            placement={placement}
                            width={500}
                            onClose={onClose}
                            open={open}
                            extra={
                                <Space>
                                    <Button onClick={onClose}>Cancel</Button>
                                    <Button type="primary" onClick={onClose}>
                                        OK
                                    </Button>
                                </Space>
                            }
                        >
                            <p>Some contents...</p>
                            <p>Some contents...</p>
                            <p>Some contents...</p>
                        </Drawer>
                    </div>

                    <div className='table mt-4'>
                        <Table striped bordered hover variant="dark">
                            <thead>
                                <tr>
                                    <th>From</th>
                                    <th>To</th>
                                    <th>Deapart</th>
                                    <th>Return</th>
                                    <th>Cabin class , Travellers</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><Input placeholder="Country , City or Airport" /></td>
                                    <td><Input placeholder="Country , City or Airport" /></td>
                                    <td><Space direction="vertical" size={12}>
                                        <DatePicker showTime onChange={onChange} onOk={onOk} />

                                    </Space></td>
                                    <td><Space direction="vertical" size={12}>
                                        <DatePicker showTime onChange={onChange} onOk={onOk} />

                                    </Space></td>


                                    <td style={{ color: 'white' }}>
                                        <Dropdown >
                                            <Dropdown.Toggle>Travellers , Economy</Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                {/* <DropdownItem> */}

                                                <form>
                                                    <label for="cabin-class">Cabin Class:</label>
                                                    <select id="cabin-class" name="cabin-class">
                                                        <option value="economy">Economy</option>
                                                        <option value="business">Business</option>
                                                        <option value="first-class">First Class</option>
                                                    </select>
                                                    <br></br>
                                                    <br></br>
                                                    <label for="num-travelers">Number of Travelers:</label>
                                                    <select id="num-travelers" name="num-travelers">
                                                        <option value="1">1</option>
                                                        <option value="2">2</option>
                                                        <option value="3">3</option>
                                                        <option value="4">4</option>
                                                        <option value="5">5</option>
                                                    </select>
                                                    <br></br>
                                                    <br></br>
                                                    <input type="submit" value="Submit" />
                                                </form>

                                                {/* </DropdownItem> */}
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>

                    <Button className='mb-5' id="b2" variant="dark">Search</Button>
                </div>




                <div className='mt-5 mb-4'>
                    <Container className='  mb-4' >
                        <Row className=' mb-4'>
                            <Col xs={3}>
                                <Card sm={3} style={{ width: '20rem' }} >
                                    <Card.Img src="Flights.png" style={{ width: '10rem' }} />
                                </Card>

                            </Col>
                            <Col xs={3}>
                                <Card sm={5} style={{ width: '20rem' }}>
                                    <Card.Img src="Cars.png" style={{ width: '10rem' }} />

                                </Card></Col>
                            <Col xs={3}>
                                <Card sm={5} style={{ width: '20rem' }}>

                                    <Card.Img src="Hotels.png" style={{ width: '10rem' }} />

                                </Card></Col>
                            <Col xs={3}>
                                <Card sm={5} style={{ width: '20rem' }}>
                                    <Card.Img src="Explore.png" style={{ width: '10rem' }} />
                                </Card></Col>
                        </Row>
                    </Container>
                </div>


                <div>
                    <div className="main-img">
                        <img className='rounded' src="main.webp" alt="image" style={{ width: '82rem', height: '2rpm' }} />
                        <div
                            style={{
                                position: "absolute",
                                top: "120%",
                                left: "30%",
                                transform: "translate(-50%, -50%)",
                            }}
                        >

                            <p style={{ color: "white", textAlign: "left", fontSize: "15px" }}>
                                <b>Can't decide where to go ?</b>
                            </p>
                            <div className="gradient-heading">
                                <h1 style={{ color: "white", textAlign: "left", fontSize: "90px" }}>
                                    Explore
                                </h1>
                            </div>
                            <div className="gradient-heading">
                                <h1 style={{ color: "white", textAlign: "left", fontSize: "90px" }}>
                                    Everywhere
                                </h1>
                            </div>


                            <button type="button" className="btn btn-lg btn-light mt-2" style={{ marginLeft: "2%" }}>
                                Learn more !
                            </button>
                        </div>
                    </div>
                </div>



                <div>
                    <h3 className=' mt-5'>Popular Right Now </h3>
                    <p className=' mb-4' id="p1">Other travellers are loving these destinations. Search flights, hotels, and car hire and join them on the adventure.</p>


                    <div className='mx-auto'>
                        <div className='mx-auto'>
                            <Container className=' mx-auto' >
                                <Row >
                                    <Col >
                                        <Card style={{ width: '350px' }}>
                                            {/* <Card.Body> */}
                                            <Row>
                                                {/* <Col class="col-4"> <Card.Img variant="top" className='i1' src="delhi.webp" /></Col> */}
                                                <Card.Img variant="top" className='i1' src="delhi.webp" />

                                                <Col class="col-8 ">DELHI
                                                    <Row>
                                                        <Col className='col-4 '><a href="#Flights" ><p>Flights</p></a></Col>
                                                        <Col className='col-4'><a href="#Flights" ><p>Cars</p></a></Col>
                                                        <Col className='col-4'><a href="#Flights" ><p>Hotels</p></a></Col>
                                                    </Row>
                                                </Col>
                                            </Row>
                                            {/* </Card.Body> */}
                                        </Card>

                                    </Col>

                                    <Col >
                                        <Card style={{ width: '350px' }}>
                                            {/* <Card.Body> */}
                                            <Row>
                                                {/* <Col class="col-4"> <Card.Img variant="top" className='i1' src="delhi.webp" /></Col> */}
                                                <Card.Img variant="top" className='i1' src="goa.webp" />

                                                <Col class="col-8">GOA
                                                    <Row>
                                                        <Col className='col-4'><a href="#Flights" ><p>Flights</p></a></Col>
                                                        <Col className='col-4'><a href="#Flights" ><p>Cars</p></a></Col>
                                                        <Col className='col-4'><a href="#Flights" ><p>Hotels</p></a></Col>
                                                    </Row>
                                                </Col>
                                            </Row>
                                            {/* </Card.Body> */}
                                        </Card>

                                    </Col>

                                    <Col >
                                        <Card style={{ width: '350px' }}>
                                            {/* <Card.Body> */}
                                            <Row>
                                                {/* <Col class="col-4"> <Card.Img variant="top" className='i1' src="delhi.webp" /></Col> */}
                                                <Card.Img variant="top" className='i1' src="mumbai.webp" />
                                                <Col class="col-8">MUMBAI
                                                    <Row>
                                                        <Col className='col-4'><a href="#Flights" ><p>Flights</p></a></Col>
                                                        <Col className='col-4'><a href="#Flights" ><p>Cars</p></a></Col>
                                                        <Col className='col-4'><a href="#Flights" ><p>Hotels</p></a></Col>
                                                    </Row>
                                                </Col>
                                            </Row>
                                            {/* </Card.Body> */}
                                        </Card>
                                    </Col>
                                </Row>
                            </Container>
                        </div>

                        <div className='mt-5 mb-4 mx-auto'>
                            <Container  >
                                <Row >
                                    <Col >
                                        <Card style={{ width: '350px' }}>
                                            {/* <Card.Body> */}
                                            <Row>
                                                {/* <Col class="col-4"> <Card.Img variant="top" className='i1' src="delhi.webp" /></Col> */}
                                                <Card.Img variant="top" className='i1' src="bangkok.webp" />
                                                <Col class="col-8">BANGKOK
                                                    <Row>
                                                        <Col className='col-4'><a href="#Flights" ><p>Flights</p></a></Col>
                                                        <Col className='col-4'><a href="#Flights" ><p>Cars</p></a></Col>
                                                        <Col className='col-4'><a href="#Flights" ><p>Hotels</p></a></Col>
                                                    </Row>
                                                </Col>
                                            </Row>
                                            {/* </Card.Body> */}
                                        </Card>
                                    </Col>
                                    <Col >
                                        <Card style={{ width: '350px' }}>
                                            {/* <Card.Body> */}
                                            <Row>
                                                {/* <Col class="col-4"> <Card.Img variant="top" className='i1' src="delhi.webp" /></Col> */}
                                                <Card.Img variant="top" className='i1' src="dubai.webp" />
                                                <Col class="col-8">DUBAI
                                                    <Row>
                                                        <Col className='col-4'><a href="#Flights" ><p>Flights</p></a></Col>
                                                        <Col className='col-4'><a href="#Flights" ><p>Cars</p></a></Col>
                                                        <Col className='col-4'><a href="#Flights" ><p>Hotels</p></a></Col>
                                                    </Row>
                                                </Col>
                                            </Row>
                                            {/* </Card.Body> */}
                                        </Card>
                                    </Col>
                                    <Col >
                                        <Card style={{ width: '350px' }}>
                                            {/* <Card.Body> */}
                                            <Row>
                                                {/* <Col class="col-4"> <Card.Img variant="top" className='i1' src="delhi.webp" /></Col> */}
                                                <Card.Img variant="top" className='i1' src="bengluru.webp" />
                                                <Col class="col-8">BENGKURU
                                                    <Row>
                                                        <Col className='col-4'><a href="#Flights" ><p>Flights</p></a></Col>
                                                        <Col className='col-4'><a href="#Flights" ><p>Cars</p></a></Col>
                                                        <Col className='col-4'><a href="#Flights" ><p>Hotels</p></a></Col>
                                                    </Row>
                                                </Col>
                                            </Row>
                                            {/* </Card.Body> */}
                                        </Card>
                                    </Col>
                                </Row>
                            </Container>
                        </div>

                        <div className='mt-5 mb-4 mx-auto'>
                            <Container>
                                <Row>
                                    <Col >
                                        <Card style={{ width: '350px' }}>
                                            {/* <Card.Body> */}
                                            <Row>
                                                {/* <Col class="col-4"> <Card.Img variant="top" className='i1' src="delhi.webp" /></Col> */}
                                                <Card.Img variant="top" className='i1' src="chennai.webp" />
                                                <Col class="col-8">CHENNAI
                                                    <Row>
                                                        <Col className='col-4'><a href="#Flights" ><p>Flights</p></a></Col>
                                                        <Col className='col-4'><a href="#Flights" ><p>Cars</p></a></Col>
                                                        <Col className='col-4'><a href="#Flights" ><p>Hotels</p></a></Col>
                                                    </Row>
                                                </Col>
                                            </Row>
                                            {/* </Card.Body> */}
                                        </Card>
                                    </Col>
                                    <Col >
                                        <Card style={{ width: '350px' }}>
                                            {/* <Card.Body> */}
                                            <Row>
                                                {/* <Col class="col-4"> <Card.Img variant="top" className='i1' src="delhi.webp" /></Col> */}
                                                <Card.Img variant="top" className='i1' src="kochi.jpg" />
                                                <Col class="col-8">KOCHI
                                                    <Row>
                                                        <Col className='col-4'><a href="#Flights" ><p>Flights</p></a></Col>
                                                        <Col className='col-4'><a href="#Flights" ><p>Cars</p></a></Col>
                                                        <Col className='col-4'><a href="#Flights" ><p>Hotels</p></a></Col>
                                                    </Row>
                                                </Col>
                                            </Row>
                                            {/* </Card.Body> */}
                                        </Card>
                                    </Col>
                                    <Col >
                                        <Card style={{ width: '350px' }}>
                                            {/* <Card.Body> */}
                                            <Row>
                                                {/* <Col class="col-4"> <Card.Img variant="top" className='i1' src="delhi.webp" /></Col> */}
                                                <Card.Img variant="top" className='i1' src="singapore.webp" />
                                                <Col mt-2 class="col-8">SINGAPORE
                                                    <Row>
                                                        <Col className='col-4'><a href="#Flights" ><p>Flights</p></a></Col>
                                                        <Col className='col-4'><a href="#Flights" ><p>Cars</p></a></Col>
                                                        <Col className='col-4'><a href="#Flights" ><p>Hotels</p></a></Col>
                                                    </Row>
                                                </Col>
                                            </Row>
                                            {/* </Card.Body> */}
                                        </Card>
                                    </Col>

                                </Row>
                            </Container>
                        </div>
                    </div>
                </div>

                <hr className="mx-auto " style={{ width: "50%" }} />


                <h4 className='p2 mt-5 mb-4' >Book cheap flights, hotels and car hire with Sightseer</h4>
                <div className='drop'>
                    <div className='mb-4 '>




                        <div className='mb-4'>
                            <Dropdown>
                                <Dropdown.Toggle variant='light'>
                                    <>Join 100 million savvy travellers as you compare flights, hotels and cars from hundreds of providers. Here’s how.</>
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <div className='droptext'>

                                        <div >
                                            <Dropdown.Item href="#/cheap flights"> <div ><p><h4>Search Everywhere. Go anywhere.</h4></p>
                                                <p>Fancy a trip but don’t mind where? Or perhaps you want to discover somewhere new.</p> <p><b>Search ‘Everywhere’</b> for the cheapest flight anywhere on any given day.</p></div></Dropdown.Item>
                                            <Dropdown.Item href="#/cheap flights"><div ><p><h4>Save money and time.</h4></p>
                                                <p> Whether it's the fastest route or the smartest stay, find it in a few taps.</p> <p>Then pick your preferred provider or hotel based on real traveller ratings.</p></div></Dropdown.Item>
                                            <div className='links'>
                                                <a href="#Explore flights deals" ><p>   Explore flights deals →</p></a>
                                                <a href="#Compare cheap hotels" ><p>   Compare cheap hotels →</p></a>
                                                <a href="#Compare cheap car hire" ><p>    Compare cheap car hire →</p></a>
                                            </div>
                                        </div>

                                        <div>
                                            <Dropdown.Item href="#/cheap flights"><p><h4>Find the cheapest day to fly.</h4></p>
                                                <p> If you have a destination in mind and want to find the cheapest flight. </p><p>choose  <b>‘Cheapest month’</b> when you search. Then find flights on the cheapest day.</p>
                                            </Dropdown.Item>
                                            <Dropdown.Item href="#/cheap flights"><p><h4>Find the cheapest day to fly.</h4></p>
                                                <p> If you have a destination in mind and want to find the cheapest flight.</p><p>choose  <b>‘Cheapest month’</b> when you search. Then find flights on the cheapest day.</p>
                                            </Dropdown.Item>
                                        </div>

                                    </div>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <Dropdown>
                            <Dropdown.Toggle variant="light">
                                <>Our International Flights</>
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <div className='droptext'>
                                    <div >
                                        <Dropdown.Item href="#/cheap flights">(GB) Cheap flight</Dropdown.Item>
                                        <Dropdown.Item href="#/cheap flights">(ID) Indonesia - Tiket Pesawat</Dropdown.Item>
                                    </div>

                                    <div>
                                        <Dropdown.Item href="#/cheap flights">(AU) Australia - Cheap flights</Dropdown.Item>
                                        <Dropdown.Item href="#/cheap flights">(MY) Malaysia - flights</Dropdown.Item>
                                    </div>

                                    <div>
                                        <Dropdown.Item href="#/cheap flights">(NZ) New Zealand - Cheap flights</Dropdown.Item>
                                        <Dropdown.Item href="#/cheap flights">(PH) Philippines - flights</Dropdown.Item>
                                    </div>
                                </div>
                            </Dropdown.Menu>
                        </Dropdown>

                    </div>

                </div>
            </div>



        </>

    )
}
