import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './auth/login'
import Register from './auth/register'
import Home from './pages/home'

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />

        {/* <Route path='*' element={<NotFound />} /> */}
      </Routes>
    </Suspense>
  )
}

export default App
