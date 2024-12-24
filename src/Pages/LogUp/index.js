import { CardDataUser } from "../../Components/CardDataUser";
import './index.css'

function LogUp() {
    return(
        <div className="page-log-up">
            <CardDataUser router={'/log-in'} nameButton={'Register'}></CardDataUser>
        </div>
    )
}
export {LogUp}