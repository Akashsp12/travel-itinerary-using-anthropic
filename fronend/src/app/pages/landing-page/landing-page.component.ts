import { Component } from '@angular/core';
import { FormComponent } from '../../components/form/form.component';
import { SplitterModule } from 'primeng/splitter';
import { NgStyle } from '@angular/common';
import { ConnectApiService } from '../../service/connect-api.service';
import { HttpClient, } from '@angular/common/http';
import { ResponsePageComponent } from '../../components/response-page/response-page.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [FormComponent, SplitterModule, NgStyle, ResponsePageComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
  providers: [ConnectApiService,]
})
export class LandingPageComponent {
  response: any;
  loader: boolean = false
  showImage: boolean = true

  constructor(private openAi: ConnectApiService) {

  }


  postData(data: any) {
    this.showImage = false
    this.loader = true

    this.openAi.getRepsonse(data).subscribe(async (res: any) => {
      this.loader = false
      this.response = await res.response.content[0].text;

    })
  }




}
