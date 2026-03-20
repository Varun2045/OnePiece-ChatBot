import { ANALYTICS_EVENTS, GA_MEASUREMENT_ID } from './constants';

declare global {
  interface Window {
    gtag?: (command: string, targetId: string, config?: Record<string, any>) => void;
  }
}

export const trackEvent = (action: string, category: string = 'Chat', label?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: 1
    });
  }
};

export const trackPageView = () => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_title: 'Luffy Chat',
      page_location: window.location.href
    });
  }
};
