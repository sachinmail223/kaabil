import React from "react";
import JobPost from "../../components/JobPost/JobPost";
import PostedJobs from '../../components/PostedJobs/PostedJobs'


const JobPostPage = () => {
  return (
    <div className="row h-75 d-flex justify-content-between">
      <PostedJobs />
      <JobPost />
    </div>
  );
};

export default JobPostPage;
