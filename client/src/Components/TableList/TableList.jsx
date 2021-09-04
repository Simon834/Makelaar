import React, { useState, useEffect } from 'react'
import { DataGrid } from '@material-ui/data-grid';

import { getAllUserApi } from '../../Functions/api/users'

export default function TableList({columns, rows}) {

      return (
        <div style={{ height: 500, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={10}
            />
        </div>
    )
}
