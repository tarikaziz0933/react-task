import React, { useEffect, useState } from 'react';
import axios from 'axios';


const Problem2 = () => {

    const [contacts, setContacts] = useState([]);
    const [usContacts, setUsContacts] = useState([]);
    const [showEvenOnly, setShowEvenOnly] = useState(false);

    console.log(showEvenOnly);

    const toggleEvenFilter = () => {
        setShowEvenOnly(!showEvenOnly);
    };


    const getAllContact = () => {
        // Fetch data from the API when the modal is opened
        axios.get('https://contact.mediusware.com/api/contacts/')
            .then((response) => {
                setContacts(response.data.results);
                setUsContacts(response.data.results.filter((us) => us.country.name == "United States"))
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    };


    useEffect(() => {
        getAllContact();
    }, [showEvenOnly]);



    return (

        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className="text-center text-uppercase mb-5">Problem-2</h4>

                <div className="d-flex justify-content-center gap-3">
                    <button
                        className="btn btn-lg btn-outline-primary"
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target="#modalA"
                        onClick={() => getAllContact()}
                    >
                        All Contacts
                    </button>
                    <button
                        className="btn btn-lg btn-outline-warning"
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target="#modalB"
                        onClick={() => getAllContact()}
                    >
                        US Contacts
                    </button>
                </div>

                {/* Modal A */}
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

                {/* Modal B */}
                <div className="modal fade" id="modalB" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Modal-B</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                {/* Add content for Modal B here */}
                                <p>US Contact</p>
                                {/* {usContacts
                                    .filter((contact) => (!showEvenOnly || contact.id % 2 === 0)) // Filter even IDs when "Only Even" is checked
                                    .map((contact) => (
                                        <li key={contact.id}>{contact.country.name} - {contact.phone}</li>
                                    ))} */}


                                {!showEvenOnly ? <>


                                    {usContacts.map((contact) => (
                                        <li key={contact.id}>{contact.country.name} - {contact.phone}</li>
                                    ))}
                                </> :
                                    <>
                                        {usContacts.filter((contact) => (contact.id % 2 === 0)) // Filter even IDs when "Only Even" is checked
                                            .map((contact) => (
                                                <li key={contact.id}>{contact.country.name} - {contact.phone}</li>
                                            ))}
                                    </>}
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
                                <button type="button" className="btn"
                                    style={{ backgroundColor: "#FF7F50", color: "white" }}
                                    data-bs-toggle="modal"
                                    data-bs-target="#modalB"
                                    data-bs-dismiss="modal"
                                    onClick={() => getAllContact()}
                                >Button B</button>
                                <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Modal Button C</button>
                            </div>
                            <div className="modal-footer">
                                <div className="form-check">
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
                </div>


                {/* Modal C */}
                <div className="modal fade" id="modalC" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Modal-C</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                {/* Add content for Modal B here */}
                                <p>US Contact</p>
                                {/* {usContacts
                                    .filter((contact) => (!showEvenOnly || contact.id % 2 === 0)) // Filter even IDs when "Only Even" is checked
                                    .map((contact) => (
                                        <li key={contact.id}>{contact.country.name} - {contact.phone}</li>
                                    ))} */}


                                {!showEvenOnly ? <>
                                    {usContacts.map((contact) => (
                                        <li key={contact.id}>{contact.country.name} - {contact.phone}</li>
                                    ))}
                                </> :
                                    <>
                                        {usContacts.filter((contact) => (contact.id % 2 === 0)) // Filter even IDs when "Only Even" is checked
                                            .map((contact) => (
                                                <li key={contact.id}>{contact.country.name} - {contact.phone}</li>
                                            ))}
                                    </>}
                            </div>

                            <div className="modal-footer">
                                <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Problem2;