import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppointmentService } from '../../services/appointment.service';

@Component({
  selector: 'app-appointment-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './appointment-form.component.html',
  styleUrls: ['./appointment-form.component.css']
})
export class AppointmentFormComponent {
  name = '';
  date = '';
  time = '';
  description = '';

  constructor(private appointmentService: AppointmentService) {}

  addAppointment() {
    if (this.name && this.date && this.time && this.description) {
      this.appointmentService.addAppointment({
        name: this.name,
        date: this.date,
        time: this.time,
        description: this.description
      });

      // Reset form
      this.name = '';
      this.date = '';
      this.time = '';
      this.description = '';
    }
  }
}
