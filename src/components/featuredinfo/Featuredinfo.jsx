import "./featuredinfo.css";
import {ArrowDownward,ArrowUpward} from '@mui/icons-material';

export default function FeaturedInfo(){
    return(
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitle">Revenue</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2,415</span>
                    <span className="featuredMoneyRate">-11.4 
                    <ArrowDownward className="featuredIcon negative"/></span>
                </div>
                <span className="featuredSub">Copared to last month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">sales</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$4,415</span>
                    <span className="featuredMoneyRate">+2.8
                     <ArrowUpward className="featuredIcon "/></span>
                </div>
                <span className="featuredSub">Copared to last month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">cost</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$1,415</span>
                    <span className="featuredMoneyRate">-1.2 
                    <ArrowDownward className="featuredIcon negative"/></span>
                </div>
                <span className="featuredSub">Copared to last month</span>
            </div>
        </div>
    )
}