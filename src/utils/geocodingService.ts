const OPENCAGE_API_KEY = import.meta.env.VITE_OPENCAGE_API_KEY;

interface GeocodeResult {
  lat: number;
  lng: number;
  address: string;
  mapsUrl: string;
}

export async function getGoogleMapsLink(address: string): Promise<GeocodeResult | null> {
  try {
    const url = 'https://api.opencagedata.com/geocode/v1/json';
    const params = new URLSearchParams({
      q: address,
      key: OPENCAGE_API_KEY
    });

    const response = await fetch(`${url}?${params}`);
    const data = await response.json();

    if (data.status.code === 200 && data.results.length > 0) {
      const result = data.results[0];
      const lat = result.geometry.lat;
      const lng = result.geometry.lng;
      
      return {
        lat,
        lng,
        address: result.formatted,
        mapsUrl: `https://www.google.com/maps?q=${lat},${lng}`
      };
    }
    return null;
  } catch (error) {
    console.error('Geocoding error:', error);
    return null;
  }
}

export function generateEmbedUrl(lat: number, lng: number): string {
  return `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3864.5!2d${lng}!3d${lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zLocation!5e0!3m2!1sen!2sph!4v1234567890`;
}
