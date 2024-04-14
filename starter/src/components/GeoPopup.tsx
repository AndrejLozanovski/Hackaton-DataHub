'use client'

import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react'; 
import './ComponentsStyle/geoPopup.css'; 

const GeoPopup = () => {
    const [showModal, setShowModal] = useState(false);

    const handleCloseModal = () => setShowModal(false);
    const handleShowModal = () => setShowModal(true);

    return (
        <>
            <button className="btn btn-success" onClick={handleShowModal}>Најди во близина</button>
            {showModal && <div className="backdropGeo" onClick={handleCloseModal}></div>}
            {showModal && (
                <div className='modal-container'>
                    <div className='modal-background' onClick={handleCloseModal}></div>
                    <div className='modal'>
                        <div className="modal-dialog modal-lg">
                            <div className="modal-content">
                                <div className="header pt-3 d-flex justify-content-between">
                                    <div className="col-6">
                                        <h3 className='modalHeader'>Купи во близина</h3>
                                    </div> 
                                    <button type="button" className="close btn btn-text-orange" onClick={handleCloseModal} aria-label="Close">
                                        <i className="fa-solid fa-xmark fa-2xl"></i>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <div className="d-flex align-items-center justify-content-between mb-3">
                                        <div className="col-6">
                                            <p className="m-0 geoPara">Достапно на 9 локации ширум Скопје</p>
                                        </div>
                                        <form>
                                            <input type="text" placeholder="Напиши адреса" className="form-control" />
                                        </form>
                                    </div>

                                    <div style={{ height: '300px', width: '100%', borderRadius: '8px', overflow: 'hidden' }}>
                                        <GoogleMapReact
                                            defaultCenter={{ lat: 41.9973, lng: 21.4279 }} 
                                            defaultZoom={11} 
                                        >
                                        </GoogleMapReact>
                                    </div>
                                    <div className="d-flex pt-2">
                                        <i className="fa-solid fa-location-dot pt-1"></i>
                                        <p className='geoPara'>Користи ја моменталната локација</p>
                                    </div>
                                </div>
                                <div className="modalfooter px-2 py-3">
                                    <button className="btn btn-geo w-100" onClick={handleCloseModal}>Пребарај</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default GeoPopup;