import React from "react";
import { Button } from "@material-ui/core";
import { linkPayment } from "../../Functions/api/payments";

export default function BtnPayment({ id, title, description, price }) {
  async function onClick(e) {
    e.preventDefault();
    let response = await linkPayment(id, title, description, price);
    return response;
  }

  return (
    <div style={{ width: "100%" }}>
      <Button
        variant="contained"
        color="primary"
        type="submit"
        onClick={onClick}
        style={{ width: "100%" }}
      >
        Pagar
      </Button>
    </div>
  );
}
