import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements } from "react-router-dom";
import Home from "./pages/Home"
import MainLayout from "./layouts/MainLayout";
import Jobs from "./pages/Jobs"
import NotFoundPage from "./pages/NotFoundPage";
import JobPage, { JobLoader } from "./pages/JobPage";
import AddJob from "./pages/AddJob";
import EditJobPage from "./pages/EditJobPage";

//rafce
const App = () => {

  const addJob = async (newJob) => {
    console.log(newJob);
    try {
      await fetch('api/jobs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', },
        body: JSON.stringify(newJob)
      });
      return;

    } catch (error) {
      console.error("Error is happening when submitting the form " + error);
    }
  }

  const deleteJob = async (jobId) => {
    try {
      await fetch(`/api/jobs/${jobId}`, {
        method: 'DELETE',
      });
      return;
    } catch (error) {
      console.error("Error is happening when deleting the form " + error);
    }
  }
  const updateJob = async (job) => {
    // console.log(newJob);
    try {
      await fetch(`/api/jobs/${job.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', },
        body: JSON.stringify(job)
      });
      return;

    } catch (error) {
      console.error("Error is happening when submitting the form " + error);
    }
  }

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path="/jobs" element={<Jobs />} />
      <Route path="/add_job" element={<AddJob addJobSubmit={addJob} />} />
      <Route path="/job-edit/:id" element={<EditJobPage updateJob={updateJob} />} loader={JobLoader} />
      <Route path="/jobs/:id" element={<JobPage deleteJob={deleteJob} />} loader={JobLoader} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>));
  return (
    <RouterProvider router={router} />
  )
}

export default App