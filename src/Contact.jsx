import React, { useState } from "react";

function Contact() {
  const [data,setdata]=useState({
    fullname:"",
    phone:"",
    email:"",
    msg:"",
  });
 
  const InputEvent=(event)=>{
     const {name,value}=event.target;
     setdata((preVal)=>{
       return{
         ... preVal,
        [name]:value
       }
     })
  }

  const formSubmit =(e)=>{
   e.preventDefault();
   alert(`your name is ${data.fullname} and your phone no is ${data.phone} ...data has been submitted`);
  }
  return (
    <>
      <div className="my-5 text-center text-capitalize">
        <h1>Contact Us</h1>
      </div>

      <div className="container contact_div mb-5">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Full name
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="fullname"
                  value={data.fullname}
                  onChange={InputEvent}
                  id="exampleFormControlInput1"
                  placeholder="Enter your name"
                />
              </div>

              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Phone number
                </label>
                <input
                  type="phone"
                  className="form-control"
                  name="phone"
                  value={data.phone}
                  onChange={InputEvent}
                  id="exampleFormControlInput1"
                  placeholder="+91"
                />
              </div>

              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={data.email}
                  onChange={InputEvent}
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                />
              </div>

              <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="msg"
                  value={data.msg}
                  onChange={InputEvent}
                ></textarea>
              </div>

              <div class="col-12">
                <button class="btn btn-outline-primary" type="submit">
                  Submit form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
