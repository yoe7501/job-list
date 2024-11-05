import React from "react";
import { Work } from "./JobListing";
import "../styles/styles.css";
import Button from "./Button";

interface Props {
  job: Work;
  filters: string[];
  setFilters: React.Dispatch<React.SetStateAction<string[]>>;

}
const Job = ({ job, filters, setFilters }: Props) => {
  return (
    <div className="jobCard">
      <img className="logoImage" src={job.logo} alt="logo image" />
      <div className="textInfo">
      <header className="header">
        <p className="text-DesaturatedDarkCyan">{job.company}</p>
        {job.new ? <div className="new bg-DesaturatedDarkCyan">New!</div> : ""}
        {job.featured ? <div className="new bg-VeryDarkGrayishCyan">FEATURED</div> : ""}
      </header>
      <p className="position ">{job.position}</p>
      <div className="footer">
        {job.postedAt}
        {job.contract}
        {job.location}
      </div>
      </div>
      <div className="buttonBox">
        <Button filters={filters} setFilters={setFilters} >{job.role}</Button>
        <Button filters={filters} setFilters={setFilters} >{job.level}</Button>
        {job.languages.map((language, index) => (
          <Button filters={filters} setFilters={setFilters} key={index}>{language}</Button>
        ))}
        {job.tools.map((tool, index) => (
          <Button filters={filters} setFilters={setFilters} key={index} >{tool}</Button>
        ))}
      </div>
    </div>
  );
};

export default Job;
