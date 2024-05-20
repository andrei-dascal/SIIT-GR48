import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HighlightDirective } from './directives/highlight.directive';
import { DefaultImagePipe } from './pipes/default-image.pipe';
import { DatePipe } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { Language } from './models/language.model';
import { ToggleComponent } from './components/menu/shared/toggle/toggle.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HighlightDirective, DefaultImagePipe, DatePipe, MenuComponent, ToggleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // public mainColor: string = 'red';
  // public secondaryColor: string = 'green';

  // public mainImageSrc: string = 'https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg';
  // public fallbackImageSrc: string = 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D';

  // public birthday: Date = new Date(1989, 9, 27);

  public languageSelected: Language = Language.Romanian;

  changeLanguage() {
    if (this.languageSelected === Language.Romanian)
      this.languageSelected = Language.English;
    else
      this.languageSelected = Language.Romanian;
  }
}
