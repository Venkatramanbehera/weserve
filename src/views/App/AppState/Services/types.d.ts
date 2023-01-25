export interface ServiceDTO {
  id: number;
  is_active: number;
  created_by: number;
  name: string;
  description: string;
  created_at: string;
  updated_by: number;
  updated_at: string;
  type: 'Default' | 'Custom';
}

export interface AppStateDTO {
  error: string;
  loading: boolean;
  services: ServiceDTO[];
}
