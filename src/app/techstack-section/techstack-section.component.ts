import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';

@Component({
  selector: 'app-techstack-section',
  templateUrl: './techstack-section.component.html',
  styleUrls: ['./techstack-section.component.scss']
})
export class TechstackSectionComponent implements OnInit {
  ngOnInit(): void {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".item", {
      scrollTrigger: {
        trigger: '.techstack__tech-grid',
        markers: true,
        start: 'top-=100px 50%',
        end: '+=300px',
        scrub: 1,
      },
      y: 30,
      duration: 0.5,
      opacity: 0,
      scale: 1.2,
      ease: 'back',
      stagger: 0.1,
    })
  }
}
