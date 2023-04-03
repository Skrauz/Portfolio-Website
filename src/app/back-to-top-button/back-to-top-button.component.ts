import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';

@Component({
  selector: 'app-back-to-top-button',
  templateUrl: './back-to-top-button.component.html',
  styleUrls: ['./back-to-top-button.component.scss']
})
export class BackToTopButtonComponent implements OnInit {
  ngOnInit(): void {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".back-to-top", {
      scrollTrigger: {
        trigger: '.contact-section',
        // markers: true,
        start: 'top-=50px 50%',
        end: '+=200px',
        scrub: 1,
      },
      x: 200,
      duration: 0.5,
      opacity: 0,
    })
  }
}
