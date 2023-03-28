import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';

@Component({
  selector: 'app-portfolio-section',
  templateUrl: './portfolio-section.component.html',
  styleUrls: ['./portfolio-section.component.scss'],
})
export class PortfolioSectionComponent implements OnInit {
  ngOnInit(): void {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from('.item1', {
      x: "-100%",
      duration: 1,
      scrollTrigger: {
        trigger: '.item1',
        markers: true,
        start: 'top 50%',
        end: '+=300px',
        scrub: 1,
      },
    });
  }
}
