import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ServiceModalComponent } from '../service-modal/service-modal.component';
import { SupabaseService } from '../services/supabase.service'; 
@Component({
  selector: 'app-practice-areas',
  templateUrl: './practice-areas.page.html',
  styleUrls: ['./practice-areas.page.scss'],
})
export class PracticeAreasPage implements OnInit {

  services: any[] | null = null;
  filteredServices: any[] | null = null;
  searchTerm = '';

  constructor(private supabaseService: SupabaseService, 
  private modalController: ModalController) {}

  ngOnInit(): void {
    this.fetchServices();
  }

  async fetchServices(): Promise<void> {
    this.services = await this.supabaseService.fetchServices();
    this.filteredServices = this.services;
  }

  filterServices(): void {
    if (this.services) {
      this.filteredServices = this.services.filter((service) =>
        service.service_name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
  }

  async openModal(service: any): Promise<void> {
    const modal = await this.modalController.create({
      component: ServiceModalComponent,  // Create a modal component to display the full description
      componentProps: {
        service,
      },
    });

    await modal.present();
  }
}
