import React from 'react'
import { CardContent, Typography, Card } from '@material-ui/core';
import {makeStyles} from "@material-ui/core/styles";

export const ExampleComponent = ({ text }) => {
  return <div >Component: {text}</div>
}

const useStyles= makeStyles(()=>({
    root:{
        textAlign: "center",
        backgroundColor: 'rgba(100,100,200,1)' 
    },
    title:{
        fontSize: 20,
        fontColor: 'rgba(240,240,240,1)'
    },
    detail:{
        fontSize: 18,
        color: 'rgba(210,210,210,1)'
    }

}));

export const Carta = ({title, detail}) => {
    const classes = useStyles();
    return(
        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.title}>{title}</Typography>
                <Typography className={classes.detail}>{detail}</Typography>
            </CardContent>
        </Card>
    );
}