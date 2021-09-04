import React from 'react'
import FormContraseña from '../../Components/FormContraseña/FormContraseña'
import ViewBase from '../ViewBase/view-base'

export default function ViewResetPassword() {
    return (
        <div>
            <ViewBase content={<FormContraseña />} />
        </div>
    )
}
