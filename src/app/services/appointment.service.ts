import { Injectable } from '@angular/core';
import { Appointment } from '../models/appointment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  private appointments: Appointment[] = [];
  private idCounter = 1;

  getAppointments(): Appointment[] {
    return this.appointments;
  }

  addAppointment(appointment: Omit<Appointment, 'id'>): void {
    const newAppointment: Appointment = {
      id: this.idCounter++,
      ...appointment
    };
    this.appointments.push(newAppointment);
  }

  deleteAppointment(id: number): void {
    this.appointments = this.appointments.filter(a => a.id !== id);
  }
}
