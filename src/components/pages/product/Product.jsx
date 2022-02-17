import { Link } from "react-router-dom";
import Chart from "../../chart/Chart";
import {productData} from "../../../dummyData";
import "./product.css";
import { Publish } from "@mui/icons-material";

export default function Product(){
    return(
        <div className="product">
            <div className="productTitleContainer">
                <h1 className="productTitle">Product</h1>
                <Link to="/newProduct">
                    <button className="productAddButton">Create</button>
                </Link>
            </div>
            <div className="productTop">
                <div className="productTopLeft">
                    <Chart data={productData} dataKey="Sales" title="Sales Performance"/>
                </div>
                <div className="productTopRight">
                    <div className="productInfoTop">
                        <img src="../../../images/airpods.jpg" alt="" className="productInfoImg" />
                        <span className="productName">Apple Airpods</span>
                    </div>
                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <span className="ProductInfoKey">id:</span>
                            <span className="productInfoValue">123</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="ProductInfoKey">Sales:</span>
                            <span className="productInfoValue">123</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="ProductInfoKey">Active:</span>
                            <span className="productInfoValue">123</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="ProductInfoKey">In Stock:</span>
                            <span className="productInfoValue">no</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="producBottom">
                <form  className="productForm">
                    <div className="productFormLeft">
                        <label htmlFor="">Product Name</label>
                        <input type="text" placeholder="Apple Airpod" />
                        <label htmlFor="">In Stock</label>
                        <select name="inStock" id="idStock">
                            <option value="yes">yes</option>
                            <option value="yes">no</option>
                        </select>
                        <label htmlFor="">Active</label>
                        <select name="inStock" id="idStock">
                            <option value="yes">yes</option>
                            <option value="yes">no</option>
                        </select>
                    </div>
                    <div className="productFormRight">
                        <div className="productUpload">
                            <img src="../../../images/airpods.jpg" alt="" className="productUploadImg" />
                            <label htmlFor="file">
                                <Publish/>
                            </label>
                            <input type="file" id="file" style={{display:"none"}} />
                        </div>
                        <button className="productButton">Update</button>
                    </div>
                </form>
            </div>
        </div>
    )
}