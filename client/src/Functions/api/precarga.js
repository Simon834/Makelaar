import inmuebles from "../../inmuebles.json"
import user from "../../users.json"
import contrat from "../../contract.json"
import { addNewProperty } from "./property"
import { registerUser } from "./users"
import { addContract } from "./contract"

export async function preload(){
    await Promise.all(propertyPreload())
    await Promise.all(userPreload())
    await Promise.all(contratPreload())

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

