import { BrowserRouter, Route ,Routes} from "react-router-dom";
import Dashboard from "./Dashboard";
import ProtectedRoute from "./ProtectedRoute";
import Login from "./Login";
function Admin() {
  return (
    <BrowserRouter>
{/*    
    <Routes>
  <Route exact path="/login" element={<Login />} />
  <Route exact
  path="/dashboard"
  element={
    <ProtectedRoute />
     
  }
/>
 </Routes>
      */}

      <Routes>
          <Route exact path='/dashboard' element={<ProtectedRoute/>}>
            <Route exact path='/dashboard' element={<Dashboard/>}/>
          </Route>
          <Route exact path='/login' element={<Login/>}/>
          </Routes>
    </BrowserRouter>
  )
}

export default Admin;