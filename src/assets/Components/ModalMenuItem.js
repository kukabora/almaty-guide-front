import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function MyVerticallyCenteredModal({ selectedItem, ...props }) {
    return (
        <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body>
                <div className="modalAD">
                    <div className="modalBox">
                        <img src={selectedItem.image_url} alt={selectedItem.food_item} width="300px" />

                        <h4>{selectedItem.food_item}</h4>
                        <p>{selectedItem.price} tg</p>
                        <div className="modalDesc">
                            <p>{selectedItem.description}</p>
                        </div>
                        {/* Add the other elements inside modal, and replace static data with selectedItem's data */}
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
}

const ModalMenuItem = ({ menuItems }) => {
    const [modalShow, setModalShow] = useState(false);
    const [selectedMenuItem, setSelectedMenuItem] = useState(null);

    const handleModalShow = (menuItem) => {
        setSelectedMenuItem(menuItem);
        setModalShow(true);
    };

    return (
        <div>
            <div className="foodpage-boxes">
                {menuItems.map((menuItem) => (
                    <div className="foodpage-box" key={menuItem.menu_id}>
                        <div className="foodpage-box-img">
                            <img src={menuItem.image_url} alt={menuItem.food_item} width="300px" />
                        </div>
                        <div className="foodpage-box-text">
                            <div className="foodpage-box-title">
                                <p>{menuItem.food_item}</p>
                            </div>
                            <div className="foodpage-box-cost">
                                <p>{menuItem.price} tg</p>
                            </div>
                        </div>
                        <div className="foodpage-box-btn">
                            <div className="minus">
                                <button>-</button>
                            </div>
                            <div className="count">
                                <span>0</span>
                            </div>
                            <div className="plus">
                                <Button
                                    style={{ padding: '2px' }}
                                    variant="primary"
                                    onClick={() => handleModalShow(menuItem)}
                                >
                                    +
                                </Button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {selectedMenuItem && (
                <MyVerticallyCenteredModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    selectedItem={selectedMenuItem}
                />
            )}
        </div>
    );
};

export default ModalMenuItem;
