import React from 'react'
import { connect } from 'react-redux';
import { fetchUser } from '../actions/index.js';


class UserHeader extends React.Component {

    componentDidMount() {
        // ! PROBLEM: When I replace 1 with this.props.userId it comes through as undefined
        // TODO: FIX LATER 

        console.log(this.props)
        const fixLater = this.props.userId === undefined ? 1 : this.props.userId

       this.props.fetchUser(fixLater)
    }


    render() {

        const user = this.props.users.find((user) => {
           return user.id === this.props.userId
        })

        if (!user) {return <div>Loading....</div>};





        return (
            <div className="header">{user.name}</div>
        )
    }
}

function mapStateToProps(state) {
    return {users: state.users}
}

export default connect(mapStateToProps, {fetchUser: fetchUser})(UserHeader);