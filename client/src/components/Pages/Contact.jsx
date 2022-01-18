import React from 'react'

export default function Contact() {
    return (
        <>
            <div className="container my-5">
                <div class="row">
                    <div class="col-md-4">
                        <div class="card shadow-sm rounded-2xl">
                            <div class="card-body">
                                <h6 class="card-title">Phone</h6>
                                <p class="card-text">+91987456123</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card shadow-sm rounded-2xl">
                            <div class="card-body">
                                <h6 class="card-title">Email</h6>
                                <p class="card-text">shreyashkolhe2001@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card shadow-sm rounded-2xl">
                            <div class="card-body">
                                <h6 class="card-title">Address</h6>
                                <p class="card-text">pune, kanchanwadi</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container shadow-sm mt-5 w-50 ">
                    <div class="row g-3">
                        
                        <div class="col-md-12">
                            <input type="text" class="form-control" placeholder="name@example.com" />
                        </div>
                    </div>
                    <div class="mb-3 mt-4">
                        <textarea class="form-control" rows="4"></textarea>
                    </div>
                    <button className="btn btn-primary">submit</button>
                </div>
            </div>
        </>
    )
}
