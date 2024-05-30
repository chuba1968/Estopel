// src/app/services/supabase.service.ts

import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SupabaseService {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(environment.supabaseUrl, environment.supabaseKey);
  }

  async fetchFaqs() {
    const { data, error } = await this.supabase.from('faqs').select('*');
    if (error) {
      console.error('Error fetching FAQs:', error.message);
      return null;
    } else {
      return data;
    }
  }

  async fetchServices() {
    const { data, error } = await this.supabase.from('services').select('*');
    if (error) {
      console.error('Error fetching Services:', error.message);
      return null;
    } else {
      return data;
    }
  }
}
