import React from "react";
import Introduction from "./Introduction";
import Gallery from "./Gallery";
import Newsletter from "./Newsletter";
import Support from "./Support";
import Policies from "./Policies";
import Team from "./Team";
import Sustainability from "./Sustainability";
import Login from "../admin/Login";
import ProtectedRoute from "../admin/ProtectedRoute";
import Dashboard from "../admin/Dashboard";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../../common/components/home/home";
import Header from "../../common/components/header/header";

export default function Layout() {
  return (
    <>
      <Router>
      <Routes>
      <Route exact path='/dashboard' element={<ProtectedRoute/>}>
            <Route exact path='/dashboard' element={<Dashboard/>}/>
          </Route>
          <Route exact path='/login' element={<Login/>}/>
      </Routes>
        <Header />
        <Home />
        <div id="latest" class="flex h-full ">
          <div class="flex-1 flex flex-col overflow-hidden">
            <div class="xl:flex h-full">
              <main class="flex flex-col w-full bg-white overflow-x-hidden overflow-y-auto mb-14 scrollbar-hide">
                <div class="flex w-full mx-auto px-6 py-8 scrollbar-hide">
                  <div class="flex flex-col w-full h-full text-gray-900 text-xl scrollbar-hide">
                    <Routes>
                      <Route exact path="/about" element={<Introduction />} />
                      <Route exact path="/support" element={<Support />} />
                      <Route
                        exact
                        path="/sustainability"
                        element={<Sustainability />}
                      />
                      <Route
                        exact
                        path="/newsletters"
                        element={<Newsletter />}
                      />
                      <Route exact path="/gallery" element={<Gallery />} />
                      <Route exact path="/policies" element={<Policies />} />
                      <Route exact path="/team" element={<Team />} />
                     
                    </Routes>
                  </div>
                </div>
              </main>

              <nav class="sticky xl:w-96  bg-red-600 sm:w-0 xs:w-0 invisible xl:visible">
                <div>{/* side bar items here */}</div>
              </nav>
            </div>
          </div>
        </div>
      </Router>
    </>
  );
}
