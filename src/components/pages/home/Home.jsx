import Chart from "../../chart/Chart";
import FeaturedInfo from "../../featuredinfo/Featuredinfo";
import WidgetLg from "../../widgetLg/WidgetLg";
import WidgetSm from "../../widgetSm/WidgetSm";
import "./home.css";
import { userData } from "../../../dummyData";

export default function Home(){
    return(
        <div className="home">
            <FeaturedInfo/>
            <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
            <div className="homeWidgets">
            <WidgetSm/>
            <WidgetLg/>
            
            </div>

        </div>
    )
}