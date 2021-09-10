import React from 'react'
import ViewBase from '../ViewBase/view-base'
import PropertyDetail from '../../Components/PropertyDetail/PropertyDetail'

export default function ViewPropertyDetail() {
    return (
        <div>
            <ViewBase content={<PropertyDetail />} />
        </div>
    )
}
