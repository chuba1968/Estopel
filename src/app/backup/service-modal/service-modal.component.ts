// service-modal.component.ts

import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-service-modal',
  templateUrl: 'service-modal.component.html',
})
export class ServiceModalComponent {
  @Input() service: any;

  constructor(private modalController: ModalController) {}

  closeModal(): void {
    this.modalController.dismiss();
  }
}
