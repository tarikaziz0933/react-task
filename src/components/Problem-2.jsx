import React from 'react';

const Problem2 = () => {

    return (

        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-2</h4>

                <div className="d-flex justify-content-center gap-3">
                    <button className="btn btn-lg btn-outline-primary" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" >All Contacts</button>
                    <button className="btn btn-lg btn-outline-warning" type="button" >US Contacts</button>
                </div>



                {/* <!-- Modal 1 --> */}
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Modal-1</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                ...
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary">Button A</button>
                                <button type="button" class="btn btn-secondary">Button B</button>
                                <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Button C</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Problem2;