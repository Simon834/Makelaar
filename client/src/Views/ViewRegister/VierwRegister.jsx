import React from 'react'
import UserRegistrationForm from '../../Components/UserRegistrationForm/UserRegistrationFrom'
import ViewBase from '../ViewBase/view-base'

export default function VierwRegister() {
    return (
        <div>
            <ViewBase content={<UserRegistrationForm isAdmin={false} />} />
        </div>
    )
}
