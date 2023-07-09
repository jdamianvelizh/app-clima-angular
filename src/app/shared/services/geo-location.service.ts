import { Injectable } from "@angular/core";
import { AnySrvRecord } from "dns";

@Injectable({ providedIn: 'root' })
export class GeoLocationService{

    public getCurrentPosition(): Promise <any>{
        return new Promise((resolve, reject)=>{
        const options = {
            enableHighAccuracy: true,
            setTimeout: 5000,
            maximumAge: 0
        }
        navigator.geolocation.getCurrentPosition(resolve, reject, options)
     })
    }
}