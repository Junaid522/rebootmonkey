// import { Component, OnInit } from '@angular/core';
// import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { NzUploadChangeParam } from 'ng-zorro-antd/upload';
// import { UtilsService } from 'src/app/injectible-services/utils.service';
// import { environment } from 'src/environments/environment';

// @Component({
//   selector: 'rm-we-are-looking-for-you',
//   templateUrl: './we-are-looking-for-you.component.html',
//   styleUrls: ['./we-are-looking-for-you.component.scss']
// })
// export class WeAreLookingForYouComponent implements OnInit {
//   environment = environment;

//   form!: FormGroup;

//   constructor(
//     private utilsService: UtilsService
//   ) {
//     this.form = new FormGroup({
//       company: new FormControl('', [Validators.required]),
//       name: new FormControl('', [Validators.required]),
//       address: new FormControl('', [Validators.required]),
//       postcode: new FormControl('', [Validators.required]),
//       city: new FormControl('', [Validators.required]),
//       phone: new FormControl('', [Validators.required]),
//       email: new FormControl('', [Validators.required, Validators.email]),
//       linkedin: new FormControl('', [Validators.required]),
//       talk: new FormControl('', [Validators.required]),
//     });
//   }

//   ngOnInit(): void {
//     this.utilsService.changeTitle('Reboot Monkey | Were looking for you!');
//     this.utilsService.addMetaTag('og:type', 'website');
//     this.utilsService.addMetaTag('og:title', 'Reboot Monkey | Were looking for you!');
//     this.utilsService.addMetaTag('og:description', 'We need an experienced and skilled hand with custom IT projects.');
//     this.utilsService.addMetaTag('description', 'We need an experienced and skilled hand with custom IT projects.');
//     this.utilsService.addMetaTag('twitter:image', '/assets/social-banner.webp');
//     this.utilsService.addMetaTag('og:image', '/assets/social-banner.webp');
//     this.utilsService.addMetaTag('og:site_name', environment.siteName);
//     this.utilsService.addMetaTag('twitter:title', 'Reboot Monkey | Were looking for you!');
//     this.utilsService.addCanonicalLink();
//   }

//   handleChange( info : NzUploadChangeParam): void {
//     console.log(info.file);
//     const status = info.file.status;
//     if (status !== 'uploading') {
//       console.log(info.file);
//     }
//     if (status === 'done') {
//       console.log(`${info.file.name} file uploaded successfully.`);
//       console.log(info);
//     } else if (status === 'error') {
//       console.log(`${info.file.name} file upload failed.`);
//     }
//   }

//   submit(data: any) {
//     console.log(data);
//   }

// }
