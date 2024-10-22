import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms'; 
import { RecyclableItem } from '../RecyclableItem.model'; 
import { RecyclableItemDto } from '../RecyclableItemDto.model'; 
import { RecyclableItemService } from '../recyclable-item.service'; // Corrected import path
import { ItemDetailsComponent } from '../item-details/item-details.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [CommonModule, ItemDetailsComponent, ReactiveFormsModule,HttpClientModule]

})
export class HomeComponent implements OnInit {
  items: RecyclableItem[] = [];
  selectedItem: RecyclableItem | null = null; 
  addItemForm: FormGroup; 

  constructor(
    private formBuilder: FormBuilder,
    private recyclableItemService: RecyclableItemService 
  ) {
    this.addItemForm = this.formBuilder.group({
      itemName: ['', Validators.required],
      materialType: ['', Validators.required],
      location: ['', Validators.required],
      recycledDate: [''] // Optional field
    });

  }

  ngOnInit() {
    this.loadItems();
  }

  loadItems() {
    this.recyclableItemService.getAllItems().subscribe(
      (data: RecyclableItem[]) => {
        this.items = data; 
      },
      (error) => {
        console.error('Error fetching items:', error); 
      }
    );
  }

  onSelectItem(item: RecyclableItem) {
    this.selectedItem = item; 
  }

  addItem() {
    if (this.addItemForm.valid) {
      const newItem: RecyclableItemDto = {
        ...this.addItemForm.value,
        recycledDate: this.addItemForm.value.recycledDate ? this.addItemForm.value.recycledDate.toString() : null
      };

      this.recyclableItemService.addItem(newItem).subscribe(
        () => {
          this.loadItems();
          this.addItemForm.reset();
        },
        (error) => {
          console.error('Error adding item:', error);
        }
      );
    }
  }
}
