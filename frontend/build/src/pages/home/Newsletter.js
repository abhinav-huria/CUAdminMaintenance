import React from "react";
import Title from "../../common/components/home/title";
import { getNews } from "../admin/getPDF";
export default function Newsletter() {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    getNews()
      .then((res) => {
        setData(res.data);
        console.log(res);
      })
      .catch((err) => {
        console.log("error");
      });
    }, []);


  return (
    <>
      <Title title="Newsletters" />
   <ul>
{data.map(item => (
  <li><a href={item.url}>{item.name}</a></li>
))}
   </ul>
    </>
  );
}
