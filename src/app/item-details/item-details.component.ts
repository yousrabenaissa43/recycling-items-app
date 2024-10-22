import { Component, Input } from '@angular/core';
import { RecyclableItem } from '../RecyclableItem.model'; // Adjust path as needed
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-item-details',
  standalone: true,
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css'],
  imports: [CommonModule]
})
export class ItemDetailsComponent {
  @Input() recyclableItem: RecyclableItem | null = null; // Input to receive item details

  constructor() {}

  closeModal() {
    // Emit an event to close the modal from the parent component
    this.recyclableItem = null; // Or handle modal visibility another way
  }
}
