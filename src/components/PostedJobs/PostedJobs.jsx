import styles from "./PostedJobs.module.css";
import { useContext, useEffect } from "react";
import AuthApi from "../../AuthApi";
const PostedJobs = () => {
  
  const context = useContext(AuthApi);
  useEffect(() => {
   
  }, [context.allpost])

  return (
    <div className={`col-4 h-100  mt-4 pt-2 pb-2 ${styles.postedJobs}`}>
      <div className="row d-flex h-100 overflow-auto justify-content-center pt-5 ">
        {context?.postedJobs?.map((job) => {
          return (
            <div key={job.id} className={`col-10 m-2 ${styles.job}`}>
              <div>
                <h3>{job.title}</h3>
              </div>
              <div>
                <span>{job.schedule_type}</span>
                <span className="m-2 ">{`${job.min_salary} - ${job.max_salary} `}</span>
                <span>
                  {`${job.allow_wfh ? "Work from home" : "Work from office"}`}{" "}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PostedJobs;
