import { Component, OnInit } from '@angular/core';
import {active_course} from './../../assets/js/slider'

@Component({
  selector: 'app-fact',
  templateUrl: './fact.component.html',
  styleUrls: ['./fact.component.css']
})
export class FactComponent implements OnInit {

  constructor() { }
  
  ngOnInit(): void {
    active_course()
  }

}
