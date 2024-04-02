import { Link } from "react-router-dom"
export default function Lost(){

    return(
        <div>
            <h1 style={{textAlign:`center`}}>
                Oops!, Page Not Found <br />
                click <Link style={{color:"blue"}} to={"/"}>Home</Link> to return to HomePage
            </h1>
        </div>
    )
}

