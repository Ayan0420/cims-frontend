// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router";
import App from './App.tsx'
import Dashboard from './pages/Dashboard.tsx';
import Jobs from './pages/Jobs.tsx';
import Login from './pages/Login.tsx';
import { AuthProvider } from './AuthContext.tsx';
import { Toaster } from 'react-hot-toast';
import AddJob from './pages/AddJob.tsx';
import JobDetails from './pages/JobDetails.tsx';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Toaster
      position="top-right"
      reverseOrder={false}
    />
    <AuthProvider>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Dashboard />}/>
          <Route path='/jobs' element={<Jobs />} />
          <Route path='/jobs/:id' element={<JobDetails />}/> 
          <Route path='/create-job' element={<AddJob />}/>
        </Route>
        <Route path='/login' element={<Login />}/>
      </Routes>
    </AuthProvider>
  </BrowserRouter>,
)
