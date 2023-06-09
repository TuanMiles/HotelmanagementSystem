import { useEffect, useState } from 'react';
import { useTable } from 'react-table';
import Table from '../../Table';
import { useMemo } from 'react';
import { RoomsTypeColumns } from './RoomsTypeColumns';


export default function RoomsTypeTable() {

  
  const [RoomsTypeData, setData] = useState([]);

  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("userAuth"))
    let userid = user.ID;
    const getRoomsType = async () => {
      try{
      const response = await fetch(`http://localhost:5000/roomstype?userId=${userid}`);
      const jsonData = await response.json(); 
      console.log(jsonData);
      setData(jsonData);
      } catch (error){
        console.error("Error fetching data:", error);
      }
    }
    getRoomsType()
  },[])

  // const getCustomer = () => {
  //   axios.get("http://localhost:5000/customers").then((response) =>{
  //     console.log(response.data)
  //     // setData(response.data);
  //   })
  // }

  // getCustomer();

  const data = useMemo(() => RoomsTypeData);
  const columns = useMemo(() => RoomsTypeColumns);

  const tableInstance = useTable({ columns, data });

  return (
    <Table tableInstance={tableInstance} />
  );
};



{/* <Modal data={row.original} updateData={setData} />  */ }