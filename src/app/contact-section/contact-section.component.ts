import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';

@Component({
  selector: 'app-contact-section',
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.scss']
})
export class ContactSectionComponent implements OnInit {
  ngOnInit(): void {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".contact-header-popin", {
      scrollTrigger: {
        trigger: '.contact-header-popin',
        // markers: true,
        start: 'top-=200px 50%',
        end: '+=100px',
        scrub: 0.5,
      },
      opacity: 0,
      scale: 0.8,
    });

    gsap.from(".contact-form", {
      scrollTrigger: {
        trigger: '.contact-section',
        // markers: true,
        start: 'top-=100px 50%',
        end: '+=120px',
        scrub: 0.5,
      },
      opacity: 0,
    })
  }
}
