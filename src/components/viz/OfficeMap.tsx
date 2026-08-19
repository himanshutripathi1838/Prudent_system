import { COMPANY, CONTACT } from "@/data/site";

export default function OfficeMap() {
  const query = encodeURIComponent(CONTACT.addressLine);
  const mapSrc = `https://maps.google.com/maps?q=${query}&t=&z=16&ie=UTF8&iwloc=&output=embed`;

  return (
    <div className="relative h-full w-full overflow-hidden">
      <iframe
        title={`${COMPANY.short} Bhopal Office Location`}
        src={mapSrc}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
        className="h-full w-full border-0 brightness-90 contrast-105 transition-filter duration-300 hover:brightness-100"
        aria-label={`Google Map showing ${COMPANY.short} office at ${CONTACT.addressLine}`}
      />
    </div>
  );
}
