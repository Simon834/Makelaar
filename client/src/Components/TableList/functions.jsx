export function RowClassName(params) {
  if (params.row.endDate) {
    if (params.row.status === "pendiente") {
      return `super-app-theme--ocupado`;
    } else if (params.row.status === "modificado") {
      return `super-app-theme--ocupado`;
    } else if (params.row.status === "rechazado") {
      return `super-app-theme--eliminado`;
    } else if (params.row.status === "activo") {
      return `super-app-theme--activo`;
    } else if (params.row.status === "vencido") {
      return `super-app-theme--eliminado`;
    }
  }

  if (params.row.isAdmin === "Si") {
    return `super-app-theme--ocupado`;
  }

  if (params.row.status === "Pago") {
    return `super-app-theme--activo`;
  }
  if (params.row.status === "Liquidación") {
    return `super-app-theme--eliminado`;
  }

  if (params.row.Contract?.id && params.row.status === "activo") {
    return `super-app-theme--ocupado`;
  } else if (params.row.premium && params.row.status === "activo") {
    return `super-app-theme--destacado`;
  } else if (params.row.status) {
    return `super-app-theme--${params.row.status}`;
  } else {
    return `super-app-theme--white`;
  }
}

export function rowData(rows, user) {
  console.log("rows", rows);
  const newrow = rows?.map((e) => {
    let newrow = e;
    //Tabla de usuarios
    if (e.isAdmin) newrow = { ...newrow, isAdmin: "Si" };
    if (!e.isAdmin) newrow = { ...newrow, isAdmin: "No" };

    //Tabla de contratos
    if (e.User) newrow = { ...newrow, UserId: e.User.name };
    if (e.Property) newrow = { ...newrow, PropId: e.Property.name };

    if (e.Payments?.length > 0) {
      const resValue = e.Payments?.reduce((acc, val) => {
        if (acc.amount) {
          return acc.amount + parseInt(val.amount);
        } else {
          return acc + parseInt(val.amount);
        }
      });

      newrow = {
        ...newrow,
        rest: isNaN(resValue)
          ? `$0`
          : `$ ${new Intl.NumberFormat().format(resValue)}`,
      };
    }

    //Tabla de propiedades
    if (e.premium) newrow = { ...newrow, premium: "Destacado" };
    if (!e.premium) newrow = { ...newrow, premium: "" };

    //Tabla de pagos
    if (e.Contract?.name)
      newrow = {
        ...newrow,
        Contract: e.Contract.name,
        ContractId: e.Contract.id,
      };

    if (e.status === "approved") newrow = { ...newrow, status: "Pago" };
    if (e.date)
      newrow = { ...newrow, date: new Date(e.date).toLocaleDateString() };
    if (e.amount)
      newrow = {
        ...newrow,
        amount: `$ ${new Intl.NumberFormat().format(Math.abs(e.amount))}`,
      };

    return newrow;
  });
  return newrow;
}

export function CellClassName(params) {
  if (params.field === "rest" && params.value?.slice(1) * 1 < 0) {
    return "super-app-theme--negativenumber";
  }
}
