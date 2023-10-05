import React from 'react';

const ModalA = ({ contacts, getAllContact, toggleEvenFilter, showEvenOnly }) => {
    return (
        <div className="modal fade" id="modalA" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Modal-A</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <p>All Contact</p>
                        <div data-bs-toggle="modal"
                            data-bs-target="#modalC"
                            onClick={() => getAllContact()}
                            data-bs-dismiss="modal">


                            {!showEvenOnly ? <>
                                {contacts.map((contact) => (
                                    <li key={contact.id}>{contact.country.name} - {contact.phone}</li>
                                ))}
                            </> :
                                <>
                                    {contacts.filter((contact) => (contact.id % 2 === 0)) // Filter even IDs when "Only Even" is checked
                                        .map((contact) => (
                                            <li key={contact.id}>{contact.country.name} - {contact.phone}</li>
                                        ))}
                                </>}
                        </div>

                    </div>
                    <div className='d-flex justify-content-around'>
                        <button
                            style={{ backgroundColor: "#46139F", color: "white" }}
                            type="button"
                            className="btn"
                            data-bs-toggle="modal"
                            data-bs-target="#modalA"
                            data-bs-dismiss="modal"
                            onClick={() => getAllContact()}
                        >
                            Button A
                        </button>
                        <button type="button" className="btn btn-secondary"
                            style={{ backgroundColor: "#FF7F50", color: "white" }}
                            data-bs-toggle="modal"
                            data-bs-target="#modalB"
                            data-bs-dismiss="modal"
                            onClick={() => getAllContact()}
                        >Button B</button>
                        <button style={{ backgroundColor: "white", border: "1px solid #46139f" }} type="button" className="btn" data-bs-dismiss="modal">Modal Button C</button>
                    </div>
                    <div className="modal-footer">
                        <input
                            className="form-check-input mt-0"
                            type="checkbox"
                            value={showEvenOnly}
                            id="onlyEvenCheckbox"
                            onChange={toggleEvenFilter}
                            onClick={() => getAllContact()}
                        />
                        <label className="form-check-label" htmlFor="onlyEvenCheckbox">
                            Only Even
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalA;