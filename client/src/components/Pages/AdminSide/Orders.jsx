import React from 'react';

function AdminHome() {
  return (
    <>
      <div style={{zIndex: '-1'}} className="container my-20">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">sr.no</th>
              <th scope="col">Name</th>
              <th scope="col">contact No.</th>
              <th scope="col">Work</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Shreyash Mohan Kolhe</td>
              <td>789456135</td>
              <td>Pending</td>
              <td><button className="btn btn-primary">Complete</button></td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>Shreyash Mohan Kolhe</td>
              <td>789456135</td>
              <td>Pending</td>
              <td><button className="btn btn-primary">Complete</button></td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>Shreyash Mohan Kolhe</td>
              <td>789456135</td>
              <td>Pending</td>
              <td><button className="btn btn-primary">Complete</button></td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>Shreyash Mohan Kolhe</td>
              <td>789456135</td>
              <td>Pending</td>
              <td><button className="btn btn-primary">Complete</button></td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>Shreyash Mohan Kolhe</td>
              <td>789456135</td>
              <td>Pending</td>
              <td><button className="btn btn-primary">Complete</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default AdminHome;
