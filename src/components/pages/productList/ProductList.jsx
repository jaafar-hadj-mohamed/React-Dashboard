import "./productList.css";
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from "@mui/icons-material";
import { productRows } from "../../../dummyData";
import { Link } from "react-router-dom";
import { Fragment, useState } from "react";

export default function ProductList(){
    const [data, setData]=useState(productRows);
    const handleDelete =(id)=>{
        setData(data.filter((item)=> item.id !== id));
    };
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'product', headerName: 'Product', width: 130, renderCell:(params)=>{
            return(
                <div className="productListItem">
                    <img className="productListImg" src={params.row.img} alt=""  />
                    {params.row.name}
                </div>
            )
        } },
        { field: 'stock', headerName: 'Stock', width: 200 },
        { field: 'status', headerName: 'Status', width: 200 },
        { field: 'price', headerName: 'Price', width: 200 },
        { field: 'action', headerName: 'Action', width: 130,
      renderCell:(params)=>{
          return(
              <Fragment>
                  <Link to={"/product/" +params.row.id}>
                  <button className="productListEdit">Edit</button>
                  </Link>
                  <DeleteOutline className="productListDelete" onClick={()=>handleDelete(params.row.id)} />
              </Fragment>
          )
      } },
        
        
      ];
    return(
        <div className="productList">
            <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
        </div>
    )
}