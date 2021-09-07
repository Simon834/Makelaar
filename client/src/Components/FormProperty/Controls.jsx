import { useState } from "react";

const resetValues = {
    name: "",
    // available: true,
    area: "",
    rooms: "",
    bathrooms: "",
    type: "",
    city: "",
    neighborhood: "",
    province: "",
    street: "",
    streetNumber: "",
    cp: "",
    description: "",
    // firstImg: "",
    // photos: [],
    // status: "",
    transaction: ""
};

export function Controls() {
    const [property, setProperty] = useState(resetValues);

    const [errors, setErrors]= useState({});

    const[check, setCheck] = useState(false)

    function validate (values = property){

        let error= {...errors} 

        if("name" in values) error.name = values.name ? "": "Este campo es requerido"
        if(values.name){
        error.name= /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(values.name) ? "": "El nombre no es valido"
        }

        if("area" in values) error.available = values.area ? "": "Este campo es requerido"
        if(values.area){ //Regex numero real
            error.area =  /^[+-]?\d+([,.]\d+)?$/.test(values.area)?"": "El numero de area no es valido"
        }

        if("rooms" in values) error.values = values.rooms ? "": "Este campo es requerido"
        if(values.rooms){error.rooms = /^[+-]?[0-9]+$/.test(values.rooms)?"": "El numero de habitaciones debe ser un numero entero"}

        if("bathrooms" in values) error.values = values.bathrooms ? "": "Este campo es requerido"
        if(values.bathrooms){error.bathrooms = /^[+-]?[0-9]+$/.test(values.bathrooms)?"": "El numero de baños debe ser un numero entero"}

        if("type" in values) error.values = values.type ? "": "Este campo es requerido"
    

        if("city" in values) error.values = values.city ? "": "Este campo es requerido"
        if(values.city){
            error.city= /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(values.city) ? "": "El nombre de ciudad no es valido"
            }

        if("neighborhood" in values) error.values = values.neighborhood ? "": "Este campo es requerido"
        if(values.neighborhood){
            error.neighborhood= /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(values.neighborhood) ? "": "El nombre del barrio no es valido"
            }

        if("province" in values) error.values = values.province ? "": "Este campo es requerido"
        if(values.province){
            error.province= /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(values.province) ? "": "El nombre de la provincia no es valido"
            }

        if("street" in values) error.values = values.street ? "": "Este campo es requerido"
        if(values.street){
            error.street= /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(values.street) ? "": "El nombre de la calle no es valido"
            }

        if("streetNumber" in values) error.values = values.streetNumber ? "": "Este campo es requerido"
        if(values.streetNumber){error.streetNumber = /^[+-]?[0-9]+$/.test(values.streetNumber)?"": "El numero de la calle debe ser un numero entero"}

        if("cp" in values) error.values = values.cp ? "": "Este campo es requerido"
        if(values.cp){error.cp = /^[+-]?[0-9]+$/.test(values.cp)?"": "El codigo postal debe ser un numero entero"}

        // if("status" in values) error.values = values.status ? "": "Este campo es requerido"
           
        if("transaction" in values) error.values = values.transaction ? "": "Este campo es requerido"


        setErrors({ ...error});

    };

    function handleChange(e){
        setProperty({
            ...property,
            [e.target.name]: e.target.value 
        });
        validate({[e.target.name]: e.target.value })
    };

    function handleCheck(e){
        console.log("EVENTO",e)
        setProperty({
            ...property,
            [e.target.name]: e.target.value
        });
        setCheck(!check)
    }
    function formValid(values = property){
        const isValid = 
         values.name  && values.area && values.rooms && values.bathrooms && values.type && values.city && values.neighborhood && values.street && values.streetNumber && values.province && values.cp  && values.transaction &&
        
        Object.values(errors).every((e)=> e === "");

        
        return isValid;
    };

    async function handleSubmit(e){
        e.preventDefault();
        const isValid = Object.values(errors). every((e)=> e === "") && formValid();

        if(isValid){
            // const registeredProperty = //ruta para registrar propiedad
            alert("es valido")
        }

        alert("se agrego una propiedad")
        // alert(
        //     `La propiedad ${nombre de la propiedad} a sido registrada con exito`
        //   );

        setProperty(resetValues);
        setCheck(!check)
    }

    
    return{
        property,
        check,
        errors,
        handleChange,
        handleCheck,
        handleSubmit,
        formValid,

    }
}