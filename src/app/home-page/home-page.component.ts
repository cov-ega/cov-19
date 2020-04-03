import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  public lottieConfig: Object;
  private anim: any;
  private animationSpeed: number = 1;

  constructor() { }

  ngOnInit() {
    this.lottieConfig = {
      path: 'https://assets1.lottiefiles.com/packages/lf20_LCtDAM.json',
      renderer: 'canvas',
      autoplay: true,
      loop: true
    };
  }


  handleAnimation(anim: any) {
    this.anim = anim;
  }

}
