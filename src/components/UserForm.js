import React from 'react';

function UserForm({ userNameChange, userPhoneChange, userEmailChange, userEmailConfirmChange }) {

    return (
        <div className="container mt-5">
            <h3 className="text-center d-flex justify-content-center">Buyer's details</h3>
            <form className="row col-12 d-flex justify-content-center">
                <div className="form-group col-12 text-center"><input className="form-control" type="text" placeholder="Name" onInput={userNameChange} /></div>
                <div className="form-group col-12 text-center"><input className="form-control" type="text" placeholder="Phone" onInput={userPhoneChange} /></div>
                <div className="form-group col-12 text-center"><input className="form-control" type="email" placeholder="Email" onInput={userEmailChange} /></div>
                <div className="form-group col-12 text-center"><input className="form-control" type="email" placeholder="Confirm Email" onInput={userEmailConfirmChange} /></div>
            </form>
        </div>
    )
};

export default UserForm;