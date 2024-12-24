import { Link } from "react-router-dom"
import { CardDataUser } from "../../Components/CardDataUser"
import './index.css'

function LogIn() {
    return(
        <div className="page-login">
            <section>
                <CardDataUser router={'/'} nameButton={'Login'}></CardDataUser>
                <div className="container-log-up">
                    <p>si no tienes cuenta</p>
                    <Link to={'/log-up'} className="button-log-up"><button>Log up</button></Link>
                </div>
            </section>
        </div>
    )
}

export {LogIn}