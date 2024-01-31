import React from 'react';
import { Row, Col } from 'react-bootstrap';
import "./SearchBar.css";
import { FaSearch } from 'react-icons/fa'; 

function SearchBar() {
    return (
        <Row xs={1} md={2}>
            <Col >
                <form action="#" method="GET" class="form">
                    <div className='input-group w-100'>
                        <input
                            type="text"
                            className="form-control mr-2"
                            placeholder="Search"
                        />
                        <div className='input-group-append'>
                            <button className="btn bg-primary mr-2" type="button">
                                <FaSearch className="search-icon" />

                            </button>
                        </div>
                    </div>
                </form>
            </Col>
        </Row>

    );
}

export default SearchBar;