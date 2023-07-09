import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherData } from './shared/weather.interface';
import { WeatherService } from './pages/weather/services/weather.service';
import { GeoLocationService } from './shared/services/geo-location.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public weather$!: Observable<WeatherData>;


  constructor(
    private readonly weatherService: WeatherService,
    private readonly getLocacionService: GeoLocationService 
  ){
    this.getLocation()
  }


  public onSearch(city:string):void {
    console.log(city);

    this.weather$=this.weatherService.getWeatherByName(city)
  }


  private async getLocation(): Promise<void> {
    try {
      const {coords} = await this.getLocacionService.getCurrentPosition();

      this.weather$ = this.weatherService.getWeatherByCoords(coords);

    } catch (error) {
      console.log(error);
    }
  }
}

