import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RecyclableItem } from './RecyclableItem.model'; 
import { RecyclableItemDto } from './RecyclableItemDto.model'; 

@Injectable({
  providedIn: 'root',
})
export class RecyclableItemService {
  private baseUrl = 'http://localhost:8080/api/recylable-item'; 

  constructor(private http: HttpClient) {}

  // Get all recyclable items
  getAllItems(): Observable<RecyclableItem[]> {
    return this.http.get<RecyclableItem[]>('http://localhost:8080/api/recylable-item/items');
  }

  // Get recyclable items without recycling schedule
  getItemsWithoutRecyclingSchedule(): Observable<RecyclableItem[]> {
    return this.http.get<RecyclableItem[]>(`http://localhost:8080/api/recylable-item/items-without-recycling-schedule`);
  }

  // Add a new recyclable item
  addItem(item: RecyclableItemDto): Observable<string> {
    return this.http.post<string>(`http://localhost:8080/api/recylable-item/items`, item);
  }

  // Delete a recyclable item by ID
  deleteItem(id: number): Observable<void> {
    return this.http.delete<void>(`http://localhost:8080/api/recylable-item/items/${id}`);
  }
}
