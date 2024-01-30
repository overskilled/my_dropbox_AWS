import React from 'react';
import './Home.css';
import { Container, Row, Col, Button } from 'react-bootstrap';

//components
import SearchBar from '../components/SearchBar';

const Home = () => {
    return (
        <Container className='body my-3'>
            <Row>
                <Col
                    className='col-lg-4 left-side'
                >
                    <div className="d-flex align-items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="blue" className="bi bi-dropbox" viewBox="0 0 16 16">
                            <path d="M8.01 4.555 4.005 7.11 8.01 9.665 4.005 12.22 0 9.651l4.005-2.555L0 4.555 4.005 2zm-4.026 8.487 4.006-2.555 4.005 2.555-4.005 2.555zm4.026-3.39 4.005-2.556L8.01 4.555 11.995 2 16 4.555 11.995 7.11 16 9.665l-4.005 2.555z" />
                        </svg>
                        <h2 className='p-2 m-0'>My Dropbox</h2>
                    </div>

                </Col>
                <Col
                    className='col-lg-8 right-side'
                >
                    <div className='p-2'>
                        <SearchBar />
                    </div>

                    <Row className='my-3'>
                        <Col xs={4} sm={4} md={4} lg={4}>
                            <Button className="btn1 d-flex flex-column align-items-start" id='button1'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2" />
                                </svg>
                                <span>Creer</span>
                            </Button>
                        </Col>
                        <Col xs={4} sm={4} md={4} lg={4}>
                            <Button className="btn1 d-flex flex-column align-items-start" id='button2'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-box-arrow-in-down" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M3.5 6a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 1 0-1h2A1.5 1.5 0 0 1 14 6.5v8a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5v-8A1.5 1.5 0 0 1 3.5 5h2a.5.5 0 0 1 0 1z" />
                                    <path fill-rule="evenodd" d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z" />
                                </svg>
                                <span>Importer</span>
                            </Button>
                        </Col>
                        <Col xs={4} sm={4} md={4} lg={4}>
                            <Button className="btn1 d-flex flex-column align-items-start" id='button2'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24   " fill="currentColor" class="bi bi-folder-plus" viewBox="0 0 16 16">
                                    <path d="m.5 3 .04.87a2 2 0 0 0-.342 1.311l.637 7A2 2 0 0 0 2.826 14H9v-1H2.826a1 1 0 0 1-.995-.91l-.637-7A1 1 0 0 1 2.19 4h11.62a1 1 0 0 1 .996 1.09L14.54 8h1.005l.256-2.819A2 2 0 0 0 13.81 3H9.828a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 6.172 1H2.5a2 2 0 0 0-2 2m5.672-1a1 1 0 0 1 .707.293L7.586 3H2.19q-.362.002-.683.12L1.5 2.98a1 1 0 0 1 1-.98z" />
                                    <path d="M13.5 9a.5.5 0 0 1 .5.5V11h1.5a.5.5 0 1 1 0 1H14v1.5a.5.5 0 1 1-1 0V12h-1.5a.5.5 0 0 1 0-1H13V9.5a.5.5 0 0 1 .5-.5" />
                                </svg>
                                <span>Créer un dossier</span>
                            </Button>
                        </Col>
                    </Row>

                    <br/>

                    <div>
                        <h2>Tous les fichiers</h2>
                        <br/>
                        <p>Nom </p>
                        <hr/>
                    </div>
                    


                </Col>
            </Row>
        </Container>
    )
}

export default Home;