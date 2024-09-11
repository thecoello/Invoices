import { AfterViewInit, Component, OnInit } from '@angular/core';
import gsap, { Expo } from 'gsap';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent  {

  loaded:boolean = false

  constructor(){}

  active(event:any){
    const target = event.target as HTMLElement
    gsap.to('#tabActive',1,{x: target.offsetLeft + 'px', ease: Expo.easeOut})
  }

}