import { Component, OnInit, Renderer2 } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { register } from 'swiper/element/bundle';
import { FaqModalComponent } from '../faq-modal/faq-modal.component';
import { SupabaseService } from '../services/supabase.service';
import { ModalController } from '@ionic/angular';
register();
 
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0,
      })),
      state('*', style({
        opacity: 1,
      })),
      transition('void <=> *', animate('500ms ease-in-out')), // Adjust the duration as needed
    ]),
  ],
})
export class HomePage implements OnInit {
  faqs: any[] | null = null;
  filteredFaqs: any[] | null = null;
  searchTerm = '';
  showSkeleton = true;

  constructor(
    private supabaseService: SupabaseService,
    private modalController: ModalController,
  ) {}

  ngOnInit(): void {
    // Delay in milliseconds (adjust as needed)
    const delay = 3000; // 3 seconds

    // Hide skeleton and show real content after the delay
    setTimeout(() => {
      this.showSkeleton = false;
    }, delay);

    this.fetchFaqs(); // Move the fetchFaqs call to the ngOnInit method
  }

  async fetchFaqs(): Promise<void> {
    this.faqs = await this.supabaseService.fetchFaqs();
    this.filteredFaqs = this.faqs;
  }

  filterFaqs(): void {
    if (this.faqs) {
      this.filteredFaqs = this.faqs.filter(faq =>
        faq.question.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
  }

  async openModal(faq: any): Promise<void> {
    const modal = await this.modalController.create({
      component: FaqModalComponent,
      componentProps: {
        faq,
      },
    });

    await modal.present();
  }

}
