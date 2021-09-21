export function contractEditConstant(id, history) {
  const columnsPaymentList = [
    {
      field: "idPay",
      headerName: "N° Pago",
      flex: 1,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "amount",
      headerName: "Monto",
      flex: 1,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "status",
      headerName: "Estado",
      flex: 1,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "date",
      headerName: "Fecha",
      flex: 1,
      headerClassName: "super-app-theme--header",
    }

  ];

  const paymentReference = [
    { name: "Pago", color: "super-app-theme--activo" },
    { name: "Liquidacion", color: "super-app-theme--eliminado" },
  ];

  return {
    columnsPaymentList,
    paymentReference

  };
}
