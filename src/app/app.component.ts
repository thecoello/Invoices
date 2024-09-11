import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ClientComponent } from "./components/client/client.component";
import { DashboardComponent } from "./dashboard/dashboard.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DashboardComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  {
  
  title = 'invoices';

}
