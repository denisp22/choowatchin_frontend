import React from 'react'
import pic from '../theater.jpg'
import { Header } from 'semantic-ui-react'
import '../NoScroll.css'
import SignupForm from '../components/SignupForm'
const sectionStyle = {
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundImage: `url(${pic})`,
    height: '100vh',
    width: '200vh'
}


class Signup extends React.Component {
    render() {
        return (
            <div style={ sectionStyle } >
                {/* <Header as='h1'>ChooWatchin</Header> */}
                <SignupForm />
            </div>
        )
    }
}

export default Signup