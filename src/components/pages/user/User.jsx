import { CalendarToday, LocationSearching, MailOutline, PhoneAndroid, Publish } from "@mui/icons-material";
import { Link } from "react-router-dom";
import "./user.css";


export default function User(){
    return(
        <div className="user">
            <div className="userTitleContainer">
                <h1 className="userTitlee">Edit User</h1>
                <Link to="/newUser">
                <button className="userAddButton">Create</button>
                </Link>
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img src="../../../images/avatar6.jpg" className="userShowImg" alt="" />
                        <div className="userShowTopTitle">
                            <span className="userShowUsername">Anna</span>
                            <span className="userShowUserTitle">Software enginer</span>
                        </div>
                    </div>
                    <div className="userShowBottom">
                        <span className="userShowTitle">Account Details</span>
                        <div className="userShowInfo">
                            <CalendarToday className="userShowIcon" />
                            <span className="userShowInfoTitle">anna99</span>
                        </div>
                        <div className="userShowInfo">
                            <CalendarToday className="userShowIcon" />
                            <span className="userShowInfoTitle">10.12.1999</span>
                        </div>
                        
                        <span className="userShowTitle">Contact Details</span>
                        <div className="userShowInfo">
                            <PhoneAndroid className="userShowIcon" />
                            <span className="userShowInfoTitle">+1 123 456 67</span>
                        </div>
                        
                        <div className="userShowInfo">
                            <MailOutline className="userShowIcon" />
                            <span className="userShowInfoTitle">anna@gmail.com</span>
                        </div>
                        <div className="userShowInfo">
                            <LocationSearching className="userShowIcon" />
                            <span className="userShowInfoTitle">New York | USA</span>
                        </div>
                    </div>
                </div>
                <div className="userUpdate">
                    <div className="userUpdateTitle">Edit</div>
                    <form  className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label >Username</label>
                                <input type="text" placeholder="anna99" className="userUpdateInput" />
                            </div>
                            <div className="userUpdateItem">
                                <label >Full Name</label>
                                <input type="text" placeholder="Anna" className="userUpdateInput" />
                            </div>
                            <div className="userUpdateItem">
                                <label >Email</label>
                                <input type="text" placeholder="anna@gmail.com" className="userUpdateInput" />
                            </div>
                            <div className="userUpdateItem">
                                <label >Phone</label>
                                <input type="text" placeholder="+1 123 456 67" className="userUpdateInput" />
                            </div>
                            <div className="userUpdateItem">
                                <label >Address</label>
                                <input type="text" placeholder="New York | USA" className="userUpdateInput" />
                            </div>
                        </div>
                        <div className="userUpdateRight">
                            <div className="userUpdateUpload">
                                <img src="../../../images/avatar6.jpg" alt="" className="userUpdateImg" />
                                <label htmlFor="file"><Publish className="userUpdateIcon"/></label>
                                <input type="file" id="file" style={{display:"none"}} />
                            </div>
                            <button className="userUpdateButton">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}