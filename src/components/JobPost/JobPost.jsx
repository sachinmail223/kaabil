import React from "react";
import { useState } from "react";
import styles from "./JobPost.module.css"
import axios from 'axios'


const JobPost = () => {
  const [title, settitle] = useState("");
  const [schedule_type, setschedule_type] = useState("");
  const [active, setactive] = useState(true);
  const [shift_type, setshift_type] = useState("");
  const [allow_wfh, setallow_wfh] = useState(true);
  const [min_salary, setmin_salary] = useState(+0);
  const [max_salary, setmax_salary] = useState(+0);
  const [experience_type, setexperience_type] = useState("");
  const [open_count, setopen_count] = useState(+0);
  const [work_days, setwork_days] = useState("fw==");
  const [work_start_time, setwork_start_time] = useState(+0);
  const [work_end_time, setwork_end_time] = useState(+0);

  const postHandeler = () => {
    const inputBody = {
      "title":title,
      "schedule_type":schedule_type,
      "active":active,
      "shift_type":shift_type,
      "allow_wfh":allow_wfh,
      "min_salary":min_salary,
      "max_salary":max_salary,
      "experience_type":experience_type,
      "open_count":open_count,
      "work_days":work_days ,
      "work_start_time":work_start_time,
      "work_end_time":work_end_time
      // "title": "Clerk",
      // "schedule_type": "part-time",
      // "active": true,
      // "shift_type": "day",
      // "allow_wfh": true,
      // "min_salary": 0,
      // "max_salary": 0,
      // "experience_type": "experienced",
      // "open_count": 0,
      // "work_days": "fw==",
      // "work_start_time": 0,
      // "work_end_time": 0
    };
    console.log(inputBody);
    const config = {
      headers: {
        'Content-Type':'application/json',
        'Accept':'application/json'
      },
      withCredentials: true}
    
    axios
      .post("https://kbl.thatwebsite.xyz/api/v1/job",inputBody,config)
      .then((response) => {
        console.log(response.data);

      }); 
  };
  return (
    <div className="col-7 d-flex justify-content-center align-items-center p-5  h-100 bg-light mt-5">
        {/* <!-- Login Form --> */}
        <form
          action=""
          className={`w-100 h-100  d-flex justify-content-center align-items-center ${styles.form}`}
        >
          <div className="w-50">
            <div className=" d-flex justify-content-center align-items-center">
              <h5 className="modal-title">Post Jobs</h5>
            </div>
            <div className="modal-body ">
              <div className="mb-1">
                <input
                  type="text"
                  name="title"
                  className="form-control"
                  id="title"
                  placeholder="Enter title"
                  onChange={(e) => {
                    settitle(e.target.value);
                  }}
                />
              </div>
              <div className="mb-1">
              <input type="radio" id="schedule_type" name="schedule_type" value="full-time" onClick={(e)=>{setschedule_type(e.target.value)}}/>
  <label for="html">Full-Time</label>
              <input type="radio" className="ms-5" id="schedule_type" name="schedule_type" value="part-time" onClick={(e)=>{setschedule_type(e.target.value)}}/>
  <label for="html">Part-Time</label>
            
              
              <div className="mb-1">
                <input
                  type="number"
                  name="min_salary"
                  className="form-control"
                  id="min_salary"
                  placeholder="Enter Min salary"
                  onChange={(e) => {
                    setmin_salary(+e.target.value);
                  }}
                />
              </div>

              <div className="mb-1">
                <input
                  type="number"
                  name="max_salary"
                  className="form-control"
                  id="max_salary"
                  placeholder="Enter Max salary"
                  onChange={(e) => {
                    setmax_salary(+e.target.value);
                  }}
                />
              </div>
               <input type="radio" id="setexperience_type" name="experience_type" value="experienced" onClick={(e)=>{setexperience_type(e.target.value)}}/>
  <label for="html">Experienced</label>
              <input type="radio" className="ms-5" id="setexperience_type" name="experience_type" value="fresher" onClick={(e)=>{setexperience_type(e.target.value)}}/>
  <label for="html">Freshere</label>
              
              </div>
              <div className="mb-1">
                <input
                  type="number"
                  name="open_count"
                  className="form-control"
                  id="open_count"
                  placeholder="Totle Opening"
                  onChange={(e) => {
                    setopen_count(+e.target.value);
                  }}
                />
              </div>
              {/* <div className="mb-1">
                <input
                  type="text"
                  name="work_days"
                  className="form-control"
                  id="work_days"
                  placeholder="Work_days"
                  onChange={(e) => {
                    setwork_days(e.target.value);
                  }}
                />
              </div> */}
              <div className="mb-1">
                <input
                  type="number"
                  name="work_start_time"
                  className="form-control"
                  id="work_start_time"
                  placeholder="work start time"
                  onChange={(e) => {
                    setwork_start_time(+e.target.value);
                  }}
                />
              </div>
              <div className="mb-1">
                <input
                  type="number"
                  name="work_end_time"
                  className="form-control"
                  id="work_end_time"
                  placeholder="work end time"
                  onChange={(e) => {
                    setwork_end_time(+e.target.value);
                  }}
                />
              </div>
              <input type="radio" id="shift_type" name="shift_type" value="day" onClick={(e)=>{setshift_type(e.target.value)}}/>
  <label for="html">Day</label>
              <input className="ms-5" type="radio" id="shift_type" name="shift_type" value="night" onClick={(e)=>{setshift_type(e.target.value)}}/>
  <label for="html">Night</label>
              
            </div>
            <div className=" pt-4  d-flex justify-content-center">
              <button
                type="button"
                className="btn btn-success mx-auto w-50"
                onClick={postHandeler}
              >
                Post
              </button>
            </div>
          </div>
        </form>
      </div>
  );
};

export default JobPost;
