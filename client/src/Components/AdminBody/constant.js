export function adminConstant(id, history) {
  const columnsUserList = [
    {
      field: "name",
      headerName: "Nombre",
      flex: 1,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "phone",
      headerName: "Telefono",
      flex: 1,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "whatsapp",
      headerName: "WhatsApp",
      flex: 1,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "isAdmin",
      headerName: "Admin",
      flex: 1,
      headerClassName: "super-app-theme--header",
    },
  ];

  const columnsPaymentList = [
    {
      field: "idPay",
      headerName: "N° Pago",
      flex: 1,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "User",
      headerName: "Usuario",
      flex: 1,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "Contract",
      headerName: "Contrato",
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


  const columnsPropertyList = [
    {
      field: "name",
      headerName: "Titulo",
      flex: 1.8,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "transaction",
      headerName: "Relación",
      flex: 0.8,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "address",
      headerName: "Dirección",
      flex: 1,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "type",
      headerName: "Tipo",
      flex: 1,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "price",
      headerName: "Precio",
      flex: 1,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "premium",
      headerName: "Destacado",
      flex: 1,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "status",
      headerName: "Estado",
      flex: 0.8,
      headerClassName: "super-app-theme--header",
    }
  ];

  const columnsContratList = [
    {
      field: "name",
      headerName: "Titulo",
      flex: 1,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "UserId",
      headerName: "Usuario",
      flex: 1,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "PropId",
      headerName: "Propiedad",
      flex: 1,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "startDate",
      headerName: "Inicio",
      flex: 1,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "endDate",
      headerName: "Fin",
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
      field: "paymentDate",
      headerName: "Pago",
      flex: 1,
      headerClassName: "super-app-theme--header",
    },
  ];

  const userReference = [
    { name: "Administrador", color: "super-app-theme--ocupado" }
  ];

  const propertyReference = [
    { name: "Activo", color: "super-app-theme--activo" },
    { name: "Destacado", color: "super-app-theme--destacado" },
    { name: "Ocupado", color: "super-app-theme--ocupado" },
    { name: "Eliminado", color: "super-app-theme--eliminado" },
  ];

  const contractReference = [
    { name: "Activo", color: "super-app-theme--activo" },
    { name: "Caducado", color: "super-app-theme--eliminado" },
  ];

  const paymentReference = [
    { name: "Pago", color: "super-app-theme--activo" },
    { name: "Liquidacion", color: "super-app-theme--eliminado" },
  ];

  return {
    columnsUserList,
    columnsPropertyList,
    columnsContratList,
    userReference,
    propertyReference,
    contractReference,
    columnsPaymentList, 
    paymentReference
  };
}
