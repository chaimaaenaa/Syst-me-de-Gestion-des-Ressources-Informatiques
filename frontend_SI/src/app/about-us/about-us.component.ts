import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  teamMembers = [
    { name: 'Alice Doe', position: 'Project Manager', photo: 'assets/team/alice.jpg' },
    { name: 'John Smith', position: 'Lead Developer', photo: 'assets/team/john.jpg' },
    { name: 'Jane Brown', position: 'UI/UX Designer', photo: 'assets/team/jane.jpg' },
    // Add more team members as needed
  ];

  currentSlide = 0;

  ngOnInit(): void {
    this.startSlider();
  }

  startSlider(): void {
    setInterval(() => {
      this.currentSlide = (this.currentSlide + 1) % this.teamMembers.length;
      const slider = document.querySelector('.image-slider') as HTMLElement;
      slider.style.transform = `translateX(-${this.currentSlide * 100}%)`;
    }, 3000);
  }
}
