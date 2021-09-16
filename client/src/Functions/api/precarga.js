import inmuebles from "../../inmuebles.json"
import user from "../../users.json"
import contrat from "../../contract.json"
import { addNewProperty } from "./property"
import { registerUser } from "./users"
import { addContract } from "./contract"

export async function preload(){
    if(window.confirm("Desea iniciar la precarga?")){
   
    await Promise.all(propertyPreload());
    await Promise.all(contratPreload());
    await Promise.all(userPreload());
    window.alert("Precarga finalizada")}
}

export function propertyPreload(){
   return inmuebles.map(async (p) =>{
        const prop = await addNewProperty(p)
        return prop
    })

}

export function userPreload(){
    return user.map(async (u) =>{
        await registerUser(u)
    })
}

export function contratPreload(){
    return contrat.map(async (c) =>{
        await addContract(c)
    })
}

