export interface MapMarker {
  id: string;
  type: 'LIGHT' | 'CCTV' | 'POLICE' | 'SAFE_BELL' | 'STORE';
  position: {
    lat: number;
    lng: number;
  };
  title: string;
  description?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface SafetyZone {
  id: string;
  type: 'SAFE' | 'DANGER';
  path: Array<{
    lat: number;
    lng: number;
  }>;
  title: string;
  description?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface SafeRoute {
  id: string;
  path: Array<{
    lat: number;
    lng: number;
  }>;
  distance: number;
  duration: number;
  safetyScore: number;
  markers: MapMarker[];
  zones: SafetyZone[];
}
