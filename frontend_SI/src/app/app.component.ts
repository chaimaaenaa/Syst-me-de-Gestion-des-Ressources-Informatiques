import { Component } from '@angular/core';
import {faFacebook, faTwitter, faInstagram, IconDefinition, faLinkedin} from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend_SI';
  faFacebook = faFacebook;
  faTwitter = faTwitter;
  faInstagram = faInstagram;
  faLinkedin : IconDefinition =faLinkedin;
}
