import { Component, EventEmitter, Output, output } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { NgFor } from '@angular/common';
import { MultiSelectModule } from 'primeng/multiselect';
import { InputNumberModule } from 'primeng/inputnumber';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
@Component({
  selector: 'app-form',
  standalone: true,
  imports: [InputTextModule, FormsModule, ButtonModule, NgFor, MultiSelectModule, InputNumberModule, ReactiveFormsModule, ToastModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
  providers: [MessageService]
})
export class FormComponent {
  form: any;

  @Output() formSubmitted: EventEmitter<any> = new EventEmitter<any>();

  constructor(private fb: FormBuilder, private messageService: MessageService) {

  }
  selectedCities: any

  areaOfInterest = [
    { name: "Beaches", "description": "Relax on pristine shores and soak up the sun." },
    { name: "National Parks", "description": "Hike through stunning landscapes and encounter diverse wildlife." },
    { "name": "Mountains", "description": "Challenge yourself with trekking adventures and breathtaking views." },
    { "name": "Waterfalls", "description": "Witness the power and beauty of cascading waters." },
    { "name": "Historical Sites", "description": "Explore ancient ruins, monuments, and museums." },
    { "name": "Art & Architecture", "description": "Immerse yourself in artistic expressions and architectural wonders." },
    { "name": "Festivals & Events", "description": "Experience vibrant cultural celebrations and traditions." },
    { "name": "Religious Sites", "description": "Visit sacred places and learn about different faiths." },
    { "name": "Theme Parks & Amusement Centers", "description": "Enjoy thrilling rides, shows, and family-friendly fun." },
    { "name": "Sporting Events", "description": "Catch a game or participate in a competition." },
    { "name": "Live Performances", "description": "Watch theater productions, concerts, or dance shows." },
    { "name": "Nightlife", "description": "Experience the city's vibrant bars and clubs." }
  ]
  ngOnInit(): void {
    this.form = this.fb.group({
      from: ['', Validators.required], // Define validation rules if needed
      destination: ['', Validators.required],
      areaOfInterest: [[], Validators.required], // You may need to adjust this based on your requirements
      budget: [0, [Validators.required, this.minimumBudgetValidator]]
    });
  }

  minimumBudgetValidator(control: any) {
    const value = control.value;
    if (value < 500) {
      return { 'minimumBudget': true };
    }
    return null;
  }

  loading: boolean = false;

  load() {

    // Implement your form submission logic here
    if (this.form.valid) {
      this.loading = true;
      // Example: Simulate form submission after 2 seconds

      this.formSubmitted.emit(this.form.value);
      console.log(this.form.value); // Log form values
      this.loading = false;

    } else {
      this.messageService.add({ severity: 'error', summary: 'Success', detail: 'Message Content' });
    }
  }
}
