import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-not-found',
  templateUrl: './error-not-found.component.html',
  styleUrls: ['./error-not-found.component.scss']
})
export class ErrorNotFoundComponent implements OnInit {
  public lottieConfig: Object;
  private anim: any;
  private animationSpeed: number = 0.5;

  constructor() { }

  ngOnInit() {
    this.lottieConfig = {
      path: 'https://assets10.lottiefiles.com/datafiles/OzG1c5GtuAvq10U/data.json',
      renderer: 'canvas',
      autoplay: true,
      loop: true
    };
  }


  handleAnimation(anim: any) {
    this.anim = anim;
  }

  stop() {
    this.anim.stop();
  }

  play() {
    this.anim.play();
  }

  pause() {
    this.anim.pause();
  }

  setSpeed(speed: number) {
    this.animationSpeed = speed;
    this.anim.setSpeed(speed);
  }


}
