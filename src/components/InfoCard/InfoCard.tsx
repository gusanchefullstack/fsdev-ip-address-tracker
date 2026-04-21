import type { IpData } from '../../types/ip';
import { InfoItem } from '../InfoItem/InfoItem';
import './InfoCard.css';

interface InfoCardProps {
  data: IpData | null;
  loading: boolean;
}

export function InfoCard({ data, loading }: InfoCardProps) {
  const location = data
    ? `${data.location.city}, ${data.location.region} ${data.location.postalCode}`
    : '';

  const timezone = data ? `UTC ${data.location.timezone}` : '';

  return (
    <section className="info-card" aria-label="IP address information">
      {loading ? (
        <p className="info-card__loading">Loading…</p>
      ) : (
        <>
          <InfoItem label="IP Address" value={data?.ip ?? ''} />
          <InfoItem label="Location" value={location} />
          <InfoItem label="Timezone" value={timezone} />
          <InfoItem label="ISP" value={data?.isp ?? ''} />
        </>
      )}
    </section>
  );
}
