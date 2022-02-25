import axios from "axios";

export const getCeleb = async () => {
  const result = await axios(
    'http://localhost:3001/celebrations',
  );
  
  return result;
};

export const getClean = async () => {
  const result = await axios(
    'http://localhost:3001/cleanliness',
  );

  return result;
};

export const getCommon = async () => {
  const result = await axios(
    'http://localhost:3001/commonvenues',
  );
  
  return result;
};
export const getDFF = async () => {
  const result = await axios(
    'http://localhost:3001/demandforfurniture',
  );
  
  return result;
};
export const getFacilities = async () => {
  const result = await axios(
    'http://localhost:3001/facilities',
  );
  
  return result;
};
export const getGallary = async () => {
  const result = await axios(
    'http://localhost:3001/gallary',
  );
  
  return result;
};
export const getHouse = async () => {
  const result = await axios(
    'http://localhost:3001/housekeeping',
  );
  
  return result;
};
export const getInven = async () => {
  const result = await axios(
    'http://localhost:3001/inventory',
  );
  
  return result;
};
export const getMaintain = async () => {
  const result = await axios(
    'http://localhost:3001/maintainance',
  );
  
  return result;
};
export const getNews = async () => {
  const result = await axios(
    'http://localhost:3001/newsletters',
  );
  
  return result;
};
export const getPantries = async () => {
  const result = await axios(
    'http://localhost:3001/pantries',
  );
  
  return result;
};
export const getPolicies = async () => {
  const result = await axios(
    'http://localhost:3001/policies',
  );
  
  return result;
};
export const getSanit = async () => {
  const result = await axios(
    'http://localhost:3001/sanitisation',
  );
  
  return result;
};
export const getSpace = async () => {
  const result = await axios(
    'http://localhost:3001/space',
  );
  
  return result;
};
export const getSus = async () => {
  const result = await axios(
    'http://localhost:3001/sustainability',
  );
  
  return result;
};
export const getWaste = async () => {
  const result = await axios(
    'http://localhost:3001/wastemanagement',
  );
  
  return result;
};

export const getWater = async () => {
  const result = await axios(
    'http://localhost:3001/watermanagement',
  );
  
  return result;
};
export default async function getpdf() {
  const result = await axios(
    'http://localhost:3001/demo'
  );

  return result;
}

