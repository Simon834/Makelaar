import React from "react";
import { useParams } from "react-router";
import { useHistory } from "react-router";

import {
  Grid,
  makeStyles,
  Container,
  Box,
  Typography,
  Icon,
  Card,
} from "@material-ui/core";

import CardIcon from "./Card/CardIcon";
import CardHeader from "./Card/CardHeader";
import CardFooter from "./Card/CardFooter";
import ApartmentIcon from "@material-ui/icons/Apartment";
import GridItem from "./Grid/GridItem";
import GridContainer from "./Grid/GridContainer";
import PersonIcon from "@material-ui/icons/Person";
import DescriptionIcon from "@material-ui/icons/Description";
import HomeWorkIcon from "@material-ui/icons/HomeWork";

import PieChart from "./Chart/PieChart";
import BarChart from "./Chart/BarChart";
import TableList from "../TableList/TableList";

import { dashConstant } from "./constant";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function Dashboard({inmNum, userNum, contNum, inmTot, userList, prpList, contList}) {
  const classes = useStyles();
  const pieChart={
    series:[inmNum,inmTot-inmNum],
    labels:["Disponibles","Ocupadas"]
  }
  const { id } = useParams();
  const history = useHistory();
  const { columnsUserList, columnsPropertyList, columnsContratList } =
  dashConstant(id, history);

  return (
    <div>
      <GridContainer>
        <GridItem item xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="warning" stats icon>
              <CardIcon color="warning">
              <Icon>
                  <ApartmentIcon />
              </Icon>
              </CardIcon>
              <p className={classes.cardCategory}>Inmuebles <br/> disponibles</p>
              <h1 className={classes.cardTitle}>
                {inmNum}
              </h1>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  Ver inmuebles
                </a>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem item xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="success" stats icon>
              <CardIcon color="success">
                <Icon>
                  <PersonIcon />
                </Icon>
              </CardIcon>
              <p className={classes.cardCategory}>Usuarios <br/> registrados</p>
              <h1 className={classes.cardTitle}>
                {userNum}
              </h1>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  Ver usuarios
                </a>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem item xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="danger" stats icon>
              <CardIcon color="danger">
                <Icon>
                  <DescriptionIcon />
                </Icon>
              </CardIcon>
              <p className={classes.cardCategory}>Contratos <br/> vigentes</p>
              <h1 className={classes.cardTitle}>
              {contNum} 
              </h1>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  Ver contratos
                </a>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem item xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
                <Icon>
                  <HomeWorkIcon />
                </Icon>
              </CardIcon>
              <p className={classes.cardCategory}>Total <br/> inmuebles</p>
              <h1 className={classes.cardTitle}>
              {inmTot} 
              </h1>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  Ver inmuebles
                </a>
              </div>
            </CardFooter>
          </Card>
        </GridItem>

        <Grid item xs={12} md={6} lg={8}>
            <BarChart series={pieChart.series} labels={pieChart.labels}/>
        </Grid>

        <Grid item xs={12} md={6} lg={4}>
          <PieChart series={pieChart.series} labels={pieChart.labels}/>
        </Grid>

        <Grid item xs={12} md={6} lg={8}>
        <h2>Propiedades</h2>
        <TableList columns={columnsPropertyList} rows={prpList} />
        </Grid>

        <Grid item xs={12} md={6} lg={4}>
        <h2>Contratos</h2>
        <TableList columns={columnsContratList} rows={contList} />
        </Grid>
      </GridContainer>
    </div>
  );
}
