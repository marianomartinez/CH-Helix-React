import React from 'react';

function UserForm({ buyer, userNameChange, userPhoneChange, userEmailChange }) {

    return <>
        <div className="container text-center">
            <h3>Buyer's details</h3>
            <form>
                <div className="form-group col-4 text-center"><input className="form-control" type="text" placeholder={buyer.userName} onInput={userNameChange} /></div>
                <div className="form-group col-4 text-center"><input className="form-control" type="text" placeholder={buyer.userPhone} onInput={userPhoneChange} /></div>
                <div className="form-group col-4 text-center"><input className="form-control" type="email" placeholder={buyer.userEmail} onInput={userEmailChange} /></div>
            </form>
        </div>
    </>
};

export default UserForm;