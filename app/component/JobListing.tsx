"use client";
import React, { useEffect, useState } from "react";
import { z } from "zod";
import Job from "./Job";
import axios from "axios";

const jobSchema = z.object({
  id: z.number(),
  company: z.string(),
  logo: z.string(),
  new: z.boolean(),
  featured: z.boolean(),
  position: z.string(),
  role: z.string(),
  level: z.string(),
  postedAt: z.string(),
  contract: z.string(),
  location: z.string(),
  languages: z.array(z.string()),
  tools: z.array(z.string()),
});

export type Work = z.infer<typeof jobSchema>;

const JobListing = () => {
  const [jobs, setJobs] = useState<Work[]>([]);
  const [filters, setFilters] = useState<string[]>([]);

  const clearFilter = () => {
    setFilters([]);
  };

  const removeFilter = (filter: string) => {
    setFilters(filters.filter((f) => f !== filter));
  };

  const filterJobs = (jobs: Work[], filters: string[]) => {
    if (filters.length === 0) return jobs; 

    return jobs.filter((job) => {
      const matchesLevel = filters.includes(job.level);
      const matchesRole = filters.includes(job.role);
      const matchesLanguages = job.languages.some((lang) => filters.includes(lang));
      const matchesTools = job.tools.some((tool) => filters.includes(tool));

      return matchesLevel || matchesRole || matchesLanguages || matchesTools;
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get("/api/Jobs")
        .then((res) => setJobs(res.data))
        .catch((err) => console.error("Error fetching jobs:", err));
    };
    fetchData();
  }, []);

  const filteredJobs = filterJobs(jobs, filters); 

  return (
    <div className="jobListing">
      {filters.length > 0 && (
        <div className="flex flex-row bg-white p-2 px-5 rounded-lg">
          <div className="jobFilter">
            {filters.map((filter, index) => (
              <div key={index} className="flex flex-row flex-wrap">
                <div className="filter">{filter}</div>
                <button onClick={() => removeFilter(filter)} className="xButton">X</button>
              </div>
            ))}
          </div>
          <button onClick={clearFilter}>Clear</button>
        </div>
      )}
      {filteredJobs.map((job) => (
        <Job filters={filters} setFilters={setFilters} key={job.id} job={job} />
      ))}
    </div>
  );
};

export default JobListing;
