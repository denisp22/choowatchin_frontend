import React from 'react'
import { Grid, Image, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { addLeader, removeLeader } from '../actions/index'
import { url } from '../urls.js'

function UserCard(props) {
    const followFetch = (postOrDelete) => {
        const fetchObj = {
            method: `${postOrDelete}`,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ leader_id: props.friend.id, follower_id: props.user.id})
        }
        
        if (postOrDelete === 'POST') {
            fetch(`${url}/follows`, fetchObj)
            .then(resp => resp.json())
            .then(leader => {
                props.addLeader(leader)
                // next line adds this person to the 
                // state in parent component
                props.addFriend(leader)
            })
        } else {
            // fetch delete needs to go to a follow id
            // or maybe create a custom route to delete based off leader and follower ids
            fetch(`${url}/follows/1`, fetchObj)
            .then(resp => resp.json())
            .then(data => {
                props.removeLeader(data.leader_id)
                props.removeFriend(data.leader_id)
            })
        }
    }
    
    const renderFollowingButton = () => {
        return (
            <Button onClick={() => followFetch('DELETE')} animated>
                <Button.Content visible>Following</Button.Content>
                <Button.Content hidden>Unfollow</Button.Content>
            </Button>
        )
    }

    const renderFollowButton = () => {
        return (
            <Button onClick={() => followFetch('POST')}>
                <Button.Content>Follow</Button.Content>
            </Button>
        )
    }

    const renderButton = () => {
        console.log('in renderButton');
        return props.leaders.find(leader => leader.id === props.friend.id) ? renderFollowingButton() : renderFollowButton();
    }
    
    return (
         <Grid columns={2}>
            <Grid.Column width={7}>
                <h4>{props.friend.full_name}</h4>
                <a href={'/profile/' + props.friend.id}>@{props.friend.username}</a>
            </Grid.Column>
            <Grid.Column width={6}>
                <Image src={props.friend.avatar} wrapped size="tiny"/>
                 {/* conditionally render button depending on if user follows this user  */}
                 {props.user ? renderButton() : null}
            </Grid.Column>
        </Grid>
    )
}

const mapStateToProps = state => {
    return {
        leaders: state.leaders,
        user: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addLeader: leader => dispatch(addLeader(leader)),
        removeLeader: leader_id => dispatch(removeLeader(leader_id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserCard)