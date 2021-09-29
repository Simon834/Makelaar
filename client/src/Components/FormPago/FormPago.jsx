import React from "react";
export default function FormPago({ productos, data }) {
  React.useEffect(() => {
    const script = document.createElement("script");
    const attr_data_preference = document.createAttribute("data-preference-id");

    attr_data_preference.value = data.id;

    script.src =
      "https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js";
    script.setAttributeNode(attr_data_preference);

    document.getElementById("form1").appendChild(script);
  }, [data]);

  return (
    <form id="form-checkout">
      <input type="text" name="cardNumber" id="form-checkout__cardNumber" />
      <input
        type="text"
        name="cardExpirationMonth"
        id="form-checkout__cardExpirationMonth"
        value=""
      />
      <input
        type="text"
        name="cardExpirationYear"
        id="form-checkout__cardExpirationYear"
        value=""
      />
      <input
        type="text"
        name="cardholderName"
        id="form-checkout__cardholderName"
        value=""
      />
      <input
        type="email"
        name="cardholderEmail"
        id="form-checkout__cardholderEmail"
        value=""
      />
      <input
        type="text"
        name="securityCode"
        id="form-checkout__securityCode"
        value=""
      />
      <select name="issuer" id="form-checkout__issuer"></select>
      <select
        name="identificationType"
        id="form-checkout__identificationType"
      ></select>
      <input
        type="text"
        name="identificationNumber"
        id="form-checkout__identificationNumber"
        value=""
      />
      <select name="installments" id="form-checkout__installments"></select>
      <button type="submit" id="form-checkout__submit">
        Pagar
      </button>
      <progress value="0" class="progress-bar">
        Cargando...
      </progress>
    </form>
  );
}
