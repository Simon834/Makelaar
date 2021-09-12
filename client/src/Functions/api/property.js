import axios from "axios";
require("dotenv").config();
const BACK_SERVER =
  process.env.REACT_APP_BACK_SERVER || "http://localhost:3010";

export async function addNewProperty(property){
    try{
        const newProperty = await axios.post(`${BACK_SERVER}/property/addProperty`, property);
        return newProperty.data;

    }catch(err){
        return err.newProperty.status;
    }
}
export async function allProperties() {
  try {
    const allProperties = await axios.get(
      `${BACK_SERVER}/property/allProperties`
    );
    // const allPropertiesSort= allProperties.data.sort((a,b)=>{
      
    //   if(a.Contract && !b.Contract ){
    //     return 1
    //   }
    //   return -1
    // })
    
    return allProperties.data;
  } catch (err) {
    throw err;
  }
}

export async function propertyById(id) {
  try {
    const allProperties = await axios.get(
      `${BACK_SERVER}/property/${id}`
    );
    return allProperties.data;
  } catch (err) {
    throw err;
  }
}

export async function editProperty(property) {
  console.log("asdasdas", property);
  try {
    const editProperty = await axios.put(
      `${BACK_SERVER}/property/editproperty`,
      property
    );
    return editProperty.data;
  } catch (err) {
    throw err;
  }
}
