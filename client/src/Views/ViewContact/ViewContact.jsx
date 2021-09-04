import React from 'react'
import Contact from '../../Components/Contact/Contact'
import ViewBase from '../ViewBase/view-base'

export default function ViewContact() {
    return (
        <div>
            <ViewBase content={<Contact />} />
        </div>
    )
}
