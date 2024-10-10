import { useEffect, useState } from "react";
import JobList from "./JobList";
import Spinner from "./Spinner";
// eslint-disable-next-line react/prop-types
const JobListings = ({ isHome }) => {
    const api_url = isHome ? '/api/jobs?_limit=3' : '/api/jobs';
    const [jobs, setJobs] = useState();
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const getJobs = async () => {
            try {
                const res = await fetch(api_url);
                const data = await res.json();
                setJobs(data);
            }
            catch (error) {
                console.error(error);
            } finally {
                setIsLoading(false);
            }
        }
        getJobs();
    }, [api_url]);

    return (
        <section className="bg-blue-50 px-4 py-10">
            <div className="container-xl lg:container m-auto">
                <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
                    Browse Jobs
                </h2>
                {isLoading ? (
                    <Spinner loading={isLoading} />
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {jobs.map((job) => <JobList job={job} key={job.id} />)}
                    </div>
                )}
            </div>
        </section>
    )
}

export default JobListings