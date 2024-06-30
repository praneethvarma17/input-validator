import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CurrencyformatDirective } from './currencyformat.directive';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CurrencyformatDirective, NgbModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'input-validator';

  @ViewChild('myInput', { read: CurrencyformatDirective })
  myInputDirectiveRef!: CurrencyformatDirective;

  constructor(private modalService: NgbModal) { }

  openModal(modal: any) {
    const modalElementRef = this.modalService.open(modal)
    modalElementRef.shown.subscribe({
      next: (res: any) => {
      
    console.log(this)
    this.myInputDirectiveRef.updateUI("1000")
      }
    })
  }
}
