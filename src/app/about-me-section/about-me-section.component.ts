import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap/src';

@Component({
  selector: 'app-about-me-section',
  templateUrl: './about-me-section.component.html',
  styleUrls: ['./about-me-section.component.scss']
})
export class AboutMeSectionComponent implements OnInit {
  ngOnInit(): void {
    gsap.from(".about-me-popin", {
      opacity: 0,
      scale: 0.8,
      stagger: 0.1
    })
  }
}
