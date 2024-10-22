import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LayoutService } from 'src/app/_injectible-services/layout.service';

@Component({
  selector: 'rm-more-rack-servers',
  templateUrl: './more.component.html',
  styleUrls: ['./more.component.scss', '../rack-servers.component.scss']
})
export class MoreComponent {

  searchFormGroup!: FormGroup;

  constructor(
    private layoutService: LayoutService
  ) {
    this.searchFormGroup = new FormGroup({
      query: new FormControl('', [Validators.required])
    });
  }

  search() {
  }

  openContactUs() {
    this.layoutService.setContactUsVisible(true);
  }

}
