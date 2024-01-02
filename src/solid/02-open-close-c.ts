//import axios from "axios";

export class HttpClient{

 async get(URL:string)
 {
   const resp = await fetch(URL);
   const data = await resp.json()

   return {data ,status:resp.status}
 }
}