import React from 'react'
import Card from './Card'
import CurrentUser from './CurrentUser'

function User({ user }) {
    return (
        <>
            <Card>
                <CurrentUser user={user} />
            </Card>
        </>
    )
}

export default User