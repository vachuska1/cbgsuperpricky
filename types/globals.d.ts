interface Window {
    gtag: (
      command: string, 
      event: string, 
      params?: Record<string, any>
    ) => void;
  }