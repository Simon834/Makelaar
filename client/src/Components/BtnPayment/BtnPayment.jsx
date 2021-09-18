import React from "react";
import { Button } from "@material-ui/core";
import { linkPayment } from "../../Functions/api/payments";
import { makeStyles } from "@material-ui/styles";

const useStyle = makeStyles((theme) => ({
  button: {},
}));

export default function BtnPayment({ id, title, description, price }) {
  async function onClick(e) {
    e.preventDefault();
    let response = await linkPayment(id, title, description, price);
    return response;
  }

  const classes = useStyle();

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        type="submit"
        onClick={onClick}
        className={classes.button}
      >
        Pagar
      </Button>
    </div>
  );
}
