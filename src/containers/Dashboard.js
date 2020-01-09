import React from 'react'
import { Header } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { loginSuccess } from '../actions/index'
import Authorize from '../components/Authorize'

class Dashboard extends React.Component {
    // handleFetch = user => {
    //     if (user.error) {
    //         this.props.history.push('/login')
    //     } else {
    //         this.props.setUser(user)
    //     }
    // }
    
    // componentDidMount() {
    //     const token = localStorage.getItem('token')

    //     if (!token) {
    //         this.props.history.push('/login')
    //     } else {
    //         const reqObj = {
    //             method: 'GET',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //                 'Authorization': `Bearer ${token}`
    //             }
    //         }

    //         fetch('http://localhost:3000/current_user', reqObj)
    //         .then(resp => resp.json())
    //         // .then(user => user.error ? this.props.history.push('/login') : this.props.setUser(user))
    //         .then(user => this.handleFetch(user))
    //     }
    // }

    render() {
        return (
            <Header style={{marginTop: '1em', marginLeft: '1em'}} as="h1">Dashboard</Header>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setUser: user => dispatch(loginSuccess(user))
    }
}

export default connect(null, mapDispatchToProps)(Authorize(Dashboard))