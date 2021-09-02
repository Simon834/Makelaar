import React from 'react'
import { useHistory } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';

export default function MenuPanelList({ list, routeAction }) {

    /*
    list=[{
        title:titulo de la sección,
        rute:ruta de la sección
        }
        ejemplo:
        ,
        title:"Mis contratos",
        rute:"/contrato"
        }]


    routeAction="/ruta general de la sección"
    ejemplo: 
    routeAction="/user"

    */

    const history = useHistory()

    console.log(list)
    function routeHandle(rute) {
        history.push(`${routeAction}${rute}`)
    }

    return (
        <div >
            <Paper >
                <MenuList>
                    {list?.map(item => (
                        <MenuItem onClick={()=>routeHandle(item.rute)}>{item.title}</MenuItem>
                    ))}
                </MenuList>
            </Paper>
        </div>
    )
}
