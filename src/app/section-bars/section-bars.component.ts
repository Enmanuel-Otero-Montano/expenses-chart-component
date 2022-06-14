import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import data from '../../assets/data.json';

@Component({
  selector: 'app-section-bars',
  templateUrl: './section-bars.component.html',
  styleUrls: ['./section-bars.component.css']
})
export class SectionBarsComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
  }

  days = data

}
