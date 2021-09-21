import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Autocomplete from "@material-ui/lab/Autocomplete";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import { makeStyles } from "@material-ui/core";
import { setPayment } from "../../Functions/api/payments";
import Swal from "sweetalert2";

const useStyle = makeStyles((theme) => ({
  formControl: {
    marginTop: theme.spacing(2),
  },
  textField: {
    marginTop: theme.spacing(2),
  },
}));

export default function NewPayment({ contList, update }) {
  const [open, setOpen] = useState(false);
  const [contract, setContract]= useState([])
  const classes = useStyle();

  useEffect(() => {
    
    const activeContract=contList?.filter(c=>c.status==="activo")

    setContract(activeContract)

    return () => {
      setContract([])
    }
  }, [contList.length])

  console.log("userList", contList);

  const iniState = {
    idPay: "",
    status: "",
    userEmail: "",
    amount: null,
    ContractId: null,
    user: "",
    date: "",
  };

  const [dataPaymen, setDataPayment] = useState(iniState);

  function handleChange(event) {
    setDataPayment({
      ...dataPaymen,
      [event.target.name]: event.target.value,
    });
  }

  function handleContrat(option, value) {
     setDataPayment({
      ...dataPaymen,
      ContractId: value?.id,
      userEmail: value?.User.email,
      user: value?.User.name,
      amount: value?.amount*1,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    let dataSubmit=dataPaymen

    if (dataSubmit.status === "Liquidación"){
        dataSubmit={...dataSubmit,amount:dataSubmit.amount*(-1)}
    }else{
        dataSubmit={...dataSubmit,amount:dataSubmit.amount*(1)}
    }

    const res = await setPayment(dataSubmit);
    if (res) {
      Swal.fire({
        icon: "success",
        title: "Listo..!",
        text: "Se registró un nuevo pago!",
        confirmButtonColor: "#4c3c90",
        customClass: {
          container: "my-swal",
        },
      });
      update()
      handleClose();
    } else {
      Swal.fire({
        icon: "error",
        title: "Lo sentimos!",
        text: "Hubo un error al registrar el pago",
        confirmButtonColor: "#4c3c90",
        customClass: {
          container: "my-swal",
        },
      });
    }
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setDataPayment(iniState);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Registrar un pago o liquidación
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <form onSubmit={handleSubmit}>
          <DialogTitle id="form-dialog-title">
            Registrar pago o liquidación
          </DialogTitle>
          <DialogContent>
            <TextField
              value={dataPaymen.idPay}
              name="idPay"
              id="name"
              label="Referencia"
              onChange={handleChange}
              fullWidth
              variant="outlined"
              className={classes.textField}
              required
            />
            <FormControl
              variant="outlined"
              fullWidth
              className={classes.formControl}
              required
            >
              <InputLabel id="status-selector">Concepto</InputLabel>
              <Select
                labelId="demo-simple-select-filled-label"
                id="status-selector"
                label="Concepto"
                name="status"
                value={dataPaymen.status}
                onChange={handleChange}
                variant="outlined"
                fullWidth
              >
                <MenuItem value={"Liquidación"}>Liquidación</MenuItem>
                <MenuItem value={"Pago"}>Pago</MenuItem>
              </Select>
            </FormControl>
            <FormControl
              variant="outlined"
              fullWidth
              className={classes.formControl}
              required
            >
              <Autocomplete
                label="Usuario"
                name="status"
                id="combo-box-demo"
                options={contract}
                getOptionLabel={(option) => option.Property.name}
                onChange={handleContrat}
                renderInput={(params) => (
                  <TextField {...params} label="Inmueble" variant="outlined" />
                )}
              />{" "}
            </FormControl>
            <TextField
              value={dataPaymen.user}
              name="name"
              id="name"
              label="Nombre usuario"
              fullWidth
              variant="outlined"
              disabled
              className={classes.textField}
              required
            />
            <TextField
              value={dataPaymen.userEmail}
              name="Email"
              id="Email"
              label="Email usuario"
              fullWidth
              variant="outlined"
              disabled
              className={classes.textField}
              required
            />
            <TextField
              value={dataPaymen.amount}
              type="number"
              name="amount"
              id="amount"
              label="Monto"
              fullWidth
              variant="outlined"
              onChange={handleChange}
              className={classes.textField}
              required
            />
            <TextField
              value={dataPaymen.date}
              type="date"
              name="date"
              id="amount"
              fullWidth
              variant="outlined"
              onChange={handleChange}
              className={classes.textField}
              defaultValue="2017-05-24"
              required
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button color="primary" type="submit">
              Registrar
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}
