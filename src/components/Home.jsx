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

                <div className='first'>
                    <div><h1 className='one'>Explore the World !</h1></div>

                    <div className='btn mb-4'>
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

                    <div className='table'>
                        <Table striped bordered hover variant="dark">
                            <thead>
                                <tr>
                                    <th>From</th>
                                    <th>To</th>
                                    <th>Deapart</th>
                                    <th>Return</th>
                                    <th>Cabin class and Travellers</th>
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
                                    <td></td>
                                </tr>

                            </tbody>
                        </Table>
                    </div>

                    <Button className='mb-5' id="b2" variant="dark">Search</Button>
                </div>




                <div className='mt-5 mb-4'>
                    <Container className=' mt-5 mb-4' >
                        <Row className='mt-5 mb-4'>
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


                            <button type="button" className="btn btn-lg btn-light">
                                Learn more !
                            </button>
                        </div>
                    </div>
                </div>



                <div className='popular mt-5 mb-4'>
                    <h3>Popular Right Now </h3>
                    <p id="p1">Other travellers are loving these destinations. Search flights, hotels, and car hire and join them on the adventure.</p>


                    {/* <div classname="card mb-3" style="max-width: 540px;">
                        <div classname="row no-gutters">
                            <div classname="col-md-4">
                                <img src="kochi.webp" class="card-img" />
                            </div>
                            <div classname="col-md-8">
                                <div classname="card-body">
                                    <h5 classname="card-title">Card title</h5>
                                    <p classname="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p classname="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                    </div> */}


                    <div class="container">
                        <div class="div1">
                            <div className='image-container'>
                                <img className='im1' src="delhi.webp" ></img>

                            </div>
                            <div className='text-container'>

                            </div>


                        </div>

                        <div class="div2">
                            <div className='image-container'>
                                <img className='im1' src="goa.webp" ></img>
                            </div>
                        </div>
                        <div class="div3">
                            <div className='image-container'>
                                <img className='im1' src="mumbai.webp" ></img>
                            </div>
                        </div>


                    </div>


                    <div class="container mt-4">
                        <div class="div1">
                            <div className='image-container'>
                                <img className='im1' src="bangkok.webp" ></img>
                            </div>
                        </div>

                        <div class="div2">
                            <div className='image-container'>
                                <img className='im1' src="dubai.webp" ></img>
                            </div>
                        </div>
                        <div class="div3">
                            <div className='image-container'>
                                <img className='im1' src="bengluru.webp" ></img>
                            </div>
                        </div>


                    </div>


                    <div class="container mt-4 mb-5">
                        <div class="div1">
                            <div className='image-container'>
                                <img className='im1' src="chennai.webp" ></img>
                            </div>
                        </div>

                        <div class="div2">
                            <div className='image-container'>
                                <img className='im1' src="kochi.webp" ></img>
                            </div>
                        </div>
                        <div class="div3">
                            <div className='image-container'>
                                <img className='im1' src="singapore.webp" ></img>
                            </div>
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
