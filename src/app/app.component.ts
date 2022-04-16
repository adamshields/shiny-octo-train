import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  title = 'WAMPED';

  environmentName = '';
  environmentUrl = 'Debug API'

  constructor() {
    
    console.log(environment.production); // Logs false for default environment
    // this.environmentName = environment.environmentName;
    // this.environmentUrl = environment.apiUrl; 
  }

}
