import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input-integer',
  standalone: false,
  templateUrl: './input-integer.html',
  styleUrl: './input-integer.scss'
})
export class InputInteger {

  @Input() quantity: number = 0;
  @Input() max: number = 0;

  @Output() quantityChange: EventEmitter<number> = new EventEmitter<number>();

  upQuantity(): void {
    if (this.quantity < this.max) {
      this.quantity++;
      this.quantityChange.emit(this.quantity);
    }
  }

  downQuantity(): void {
    if (this.quantity > 0) {
      this.quantity--;
      this.quantityChange.emit(this.quantity);
    }
  }

  onChangeQuantity(event: any): void {
    const value = parseInt(event.target.value, 10);
    
    if (isNaN(value) || value < 0) {
      this.quantity = 0;
    } else if (value > this.max) {
      this.quantity = this.max;
    } else {
      this.quantity = value;
    }
    
    this.quantityChange.emit(this.quantity);
  }
}