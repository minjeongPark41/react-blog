import { Link } from "react-router-dom";

const Register = props =>{

    return <div>
        <p>행복해지자</p>
            
        <div className="border-top pt-3">
            <small className="text-muted">
                Already Have An Account? <Link className="ml-2" to="/login">Sign In</Link>
            </small>
        </div>
    </div>


} 

export default Register; 