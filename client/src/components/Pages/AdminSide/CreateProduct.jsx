import React from 'react';
import ('../../styling/CreateProduct.css')

function AdminAbout() {
  return (
    <>
      <div className="register container p-2 rounded-2xl border-2 shadow-sm my-24">
        <form method='POST' className="row g-3">
          <div className="col-md-7">
            <label className="form-label"> Name</label>
            <input type="text" className="form-control" name="name" placeholder='Enter Name...' />
          </div>
          <div class="col-md-5">
            <label for="inputState" class="form-label">Categories</label>
            <select id="inputState" class="form-select">
              <option selected>Choose...</option>
              <option>Birthday Banner</option>
              <option>Wedding Card</option>
              <option>Festivel Banner</option>
              <option>Logo Design</option>
              <option>Invitation Card</option>
              <option>Menu Card</option>
              <option>Visiting Card</option>
              <option>Business Card</option>
              <option>Election Card</option>
            </select>
          </div>
          <div class="col-md-6 flex">
            <span class="input-group-text">Discount Price</span>
            <input type="number" class="form-control"/>
          </div>
          <div class="col-md-6 flex">
            <span class="input-group-text">Original Price</span>
            <input type="number" class="form-control"/>
          </div>
          <div class="mb-3 col-md-6">
            <label for="formFile" class="form-label">Upload Image 1</label>
            <input class="form-control" type="file" id="formFile" />
          </div>
          <div class="mb-3 col-md-6">
            <label for="formFile" class="form-label">Upload Image 2</label>
            <input class="form-control" type="file" id="formFile" />
          </div>
          <div class="form-floating">
            <textarea style={{ height: '100px' }} class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" ></textarea>
            <label for="floatingTextarea2">Enter Description here....</label>
          </div>

          <div className="col-12">
            <button className="btn btn-primary">SignUp</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default AdminAbout;
