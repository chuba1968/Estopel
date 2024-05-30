// src/app/faq-modal/faq-modal.component.ts

import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-faq-modal',
  templateUrl: './faq-modal.component.html',
  styleUrls: ['./faq-modal.component.scss'],
})
export class FaqModalComponent {
  @Input() faq: any;

  constructor(private modalController: ModalController) {}

  closeModal(): void {
    this.modalController.dismiss();
  }
}
