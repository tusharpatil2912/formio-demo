import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-in-out-form',
  templateUrl: './in-out-form.component.html',
  styleUrls: ['./in-out-form.component.scss']
})
export class InOutFormComponent {
  @ViewChild('json') jsonElement?: ElementRef;
  public form: Object = {
    components: []
  };
  public myForm: Object = {
    components: []
  };

  onChange(event: any) {
    this.jsonElement.nativeElement.innerHTML = '';
    this.jsonElement.nativeElement.appendChild(document.createTextNode(JSON.stringify(event.form, null, 4)));
    this.myForm = event.form;
  }
}
