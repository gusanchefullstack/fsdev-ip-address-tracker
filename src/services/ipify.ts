import axios from 'axios';
import type { IpData } from '../types/ip';

const API_KEY = import.meta.env.VITE_IPIFY_API_KEY as string;
const BASE_URL = 'https://geo.ipify.org/api/v2/country,city';

function isDomain(query: string): boolean {
  return /^(?![\d.]+$)[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(query);
}

export async function getIpData(query?: string): Promise<IpData> {
  const params: Record<string, string> = { apiKey: API_KEY };

  if (query) {
    if (isDomain(query)) {
      params.domain = query;
    } else {
      params.ipAddress = query;
    }
  }

  const { data } = await axios.get<IpData>(BASE_URL, { params });
  return data;
}
