
import React from 'react'
import 'semantic-ui-css/semantic.min.css';
import { withRouter } from 'react-router-dom'
import NavLogin from './NavLogin'
import NavSignup from './NavSignup'
import NavDefault from './NavDefault'

const Navbar = (props) => {
    console.log(props.history.location.pathname)

    const renderNav = () => {
        switch (props.history.location.pathname) {
            case '/login':
                return <NavLogin />
            case '/signup':
                return <NavSignup />
            default:
                return <NavDefault />

                
        }
    }

    return (
        <div>
            {renderNav()}
        </div>
    )
}

export default withRouter(Navbar)

