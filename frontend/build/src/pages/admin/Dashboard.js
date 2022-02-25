import React from "react";
import axios, { post } from "axios";
import getpdf from "./getPDF";
import {
  getCeleb,
  getClean,
  getCommon,
  getDFF,
  getFacilities,
  getGallary,
  getHouse,
  getInven,
  getMaintain,
  getNews,
  getPantries,
  getPolicies,
  getSanit,
  getSpace,
  getSus,
  getWaste,
  getWater,
} from "./getPDF";
const category = [
  "Celebrations",
  "Cleanliness",
  "CommonVenues",
  "DemandForFurniture",
  "Facilities",
  "Gallery",
  "Housekeeping",
  "Inventory",
  "Maintenance",
  "Newsletters",
  "Pantries",
  "Policies",
  "Sanitisation",
  "SpaceAllotment",
  "SustainibilityReport",
  "WasteManagement",
  "WaterManagement",
];
const Dashboard = () => {
  const [data, setData] = React.useState([]);

  // const [title, setTitle] = React.useState("")
  // const [file, setFile] = React.useState("")
  // const [fileName, setFileName] = React.useState({file:"",title:""})

  // const handleFile = (e) => {
  //   setFile(e.target.files[0]);
  // }

  // const handleTitle = (e) => {
  //   setTitle(e.target.value);
  // }

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  // //   let updatedValue = {};
  // //  updatedValue = {file: file, title: title};
  // //  setFileName(updatedValue);
  // //   console.log(updatedValue);
  //   const formData = new FormData();
  //   formData.append("myFile", file);
  //   formData.append("title", title);
  //   const config = {
  //     headers: {
  //         'content-type': 'multipart/form-data'
  //     }
  // }
  //   axios.post("http://localhost:3001/api/uploadFile",formData,config).then(res => {
  //     console.log(res.data);
  //     window.location.reload();
  // });
  // }

const del= "http://localhost:3001/api/deleteFile";
let delLink;
  React.useEffect(() => {
    // getpdf()
    //   .then((res) => {
    //     setData(res.data);
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log("error");
    //   });

setData([]);

    getCeleb()
      .then((res) => {
        setData((data) => [...data, res.data]);
      })
      .catch((err) => {
        console.log("error1");
      });
    getClean()
      .then((res) => {
        setData((data) => [...data, res.data]);
      })
      .catch((err) => {
        console.log("error2");
      });
    getCommon()
      .then((res) => {
        setData((data) => [...data, res.data]);
      })
      .catch((err) => {
        console.log("error3");
      });
    getDFF()
      .then((res) => {
        setData((data) => [...data, res.data]);
      })
      .catch((err) => {
        console.log("error4");
      });
    getFacilities()
      .then((res) => {
        setData((data) => [...data, res.data]);
      })
      .catch((err) => {
        console.log("error5");
      });
    getGallary()
      .then((res) => {
        setData((data) => [...data, res.data]);
      })
      .catch((err) => {
        console.log("error6");
      });
    getHouse()
      .then((res) => {
        setData((data) => [...data, res.data]);
      })
      .catch((err) => {
        console.log("error7");
      });
    getInven()
      .then((res) => {
        setData((data) => [...data, res.data]);
      })
      .catch((err) => {
        console.log("error8");
      });
    getMaintain()
      .then((res) => {
        setData((data) => [...data, res.data]);
      })
      .catch((err) => {
        console.log("error9");
      });
    getNews()
      .then((res) => {
        setData((data) => [...data, res.data]);
      })
      .catch((err) => {
        console.log("error10");
      });
    getPantries()
      .then((res) => {
        setData((data) => [...data, res.data]);
      })
      .catch((err) => {
        console.log("error11");
      });
    getPolicies()
      .then((res) => {
        setData((data) => [...data, res.data]);
      })
      .catch((err) => {
        console.log("error12");
      });
    getSanit()
      .then((res) => {
        setData((data) => [...data, res.data]);
      })
      .catch((err) => {
        console.log("error13");
      });
    getSpace()
      .then((res) => {
        setData((data) => [...data, res.data]);
      })
      .catch((err) => {
        console.log("error14");
      });
    getSus()
      .then((res) => {
        setData((data) => [...data, res.data]);
      })
      .catch((err) => {
        console.log("error15");
      });
    getWaste()
      .then((res) => {
        setData((data) => [...data, res.data]);
      })
      .catch((err) => {
        console.log("error16");
      });
    getWater()
      .then((res) => {
        setData((data) => [...data, res.data]);
      })
      .catch((err) => {
        console.log("error17");
      });

     
  }, []);

 let count=0;
  const handleLogout = () => {
    localStorage.clear();
    window.location.pathname = "/login";
  };
  return (
    <div className="maindiv">
      <div className="grid gap-8 grid-cols-3">
        <div>
          {" "}
          <h1 className="text-red-600 text-4xl font-bold text-left ml-10 my-4">
            Dashboard
          </h1>
   
          
             
         
        </div>
        <div className="col-span-2 justify-self-end pr-10">
          <button
            className="font-bold bg-red-600 text-white m-auto rounded-md p-2 ml-9 my-4"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
      <hr></hr>
      <div className="uploaddiv" className="ml-10 m-10">
        <form
          action="http://localhost:3001/api/uploadFile"
          encType="multipart/form-data"
          method="post"
        >
          <div className="grid gap-4 grid-cols-3">
            <div className="font-bold border border-2 border-solid border-red-600 p-2 rounded-md text-center">
              <label for="category" className="pr-4">
                Category:
              </label>
              <select name="category" id="category">
                {category.map((cat) => (
                  <option value={cat}>{cat}</option>
                ))}
              </select>
            </div>
            <div className="font-bold border border-2 border-solid border-red-600 p-2 rounded-md ">
              <input
                type="file"
                className="admin__input"
                id="myFile"
                name="myFile"
              />
            </div>
            {/* <input type="text" name="title" placeholder="Enter Title"/> */}
            <div className="font-bold border border-2 border-solid border-red-600 p-2 rounded-md text-red-600 text-center bg-white">
              <input
                className="admin__submit"
                type="submit"
                className="font-bold bg-white"
              />
            </div>
          </div>
        </form>
      </div>

      <div className="pdfdiv" className="ml-10 m-10">
        <table className="rounded-t-lg  w-full text-gray-800">
          <thead>
            <tr className="text-center text-black border divide-x divide-black border-black">
              <th className="px-4 py-3">S.NO</th>
              <th className="break-all px-4 py-3">File Name</th>
              <th className="break-all px-4 py-3">Category</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
           
          
              {data.map((item,index,arr) => (
            item.map(d => (
              delLink=`http://localhost:3001/api/deleteFile/${d.Category}/${d.name}`,

              <tr className="border divide-x divide-black border-black">
                <td className=" break-words  xs:overflow-ellipsis px-4 py-3">
                  
                  {++count}
                  
                </td>
                <td className=" break-all px-4 py-3">
                  <a href={d.url} target="_blank" rel="noreferrer">
                    {d.name}
                  </a>
                </td>
                <td className=" break-all px-4 py-3">
                  {d.Category}
                  {/* <a href={d.url} target="_blank" rel="noreferrer"></a> */}
                </td>
                <td className="break-all px-4 py-3"><a href={delLink}>Delete</a></td>
              </tr>
            ))))}
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
//  {/* <form onSubmit={handleSubmit} > */}
