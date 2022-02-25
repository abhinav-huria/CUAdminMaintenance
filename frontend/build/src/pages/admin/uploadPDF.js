import axios from "axios";

const uploadPDF = async () => {
  const result = await axios.post(
    'http://localhost:3001/demo',
  );
  
  return result;
};

export default uploadPDF;