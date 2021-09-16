import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { useHistory } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        height: "100%",
        margin:0
       },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
        fontSize:20,
        "& .MuiTab-root": {
            fontSize: "1.1rem"
        },
        "& .MuiTab-wrapper": {
            alignItems: "end"
        },
        "& .MuiTabs-flexContainer": {
            alignItems: "end"
        }
    },
}));

export default function MenuPanelList({ list, routeAction }) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const history = useHistory()

    function routeHandle(rute) {
        history.push(`${routeAction}${rute}`)
    }

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <Tabs
                orientation="vertical"
                value={value}
                onChange={handleChange}
                className={classes.tabs}
                TabIndicatorProps={{style: {background:'#4C3C90'}}}
            >
                {list?.map(item => (
                    <Tab onClick={() => routeHandle(item.rute)} label={item.title} className={classes.tab}/>
                ))}


            </Tabs>
        </div>
    );
}