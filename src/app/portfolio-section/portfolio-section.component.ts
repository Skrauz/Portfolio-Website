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
      x: "-150%",
      duration: 1,
      scrollTrigger: {
        trigger: '.item1',
        // markers: true,
        start: 'top-=120px 50%',
        end: '+=270px',
        scrub: 1,
      },
    });

    gsap.from('.item2', {
      x: "150%",
      duration: 1,
      scrollTrigger: {
        trigger: '.item2',
        // markers: true,
        start: 'top-=120px 50%',
        end: '+=270px',
        scrub: 1,
      },
    });

    gsap.from(".portfolio-header-popin", {
      scrollTrigger: {
        trigger: '.portfolio',
        // markers: true,
        start: 'top-=150px 50%',
        end: '+=100px',
        scrub: 0.5,
      },
      opacity: 0,
      scale: 0.8,
    })

    gsap.from(".portfolio-footer", {
      scrollTrigger: {
        trigger: '.portfolio-footer',
        // markers: true,
        start: 'top-=200px 50%',
        end: '+=100px',
        scrub: 0.5,
      },
      opacity: 0,
      scale: 0.8,
    })
  }
}
