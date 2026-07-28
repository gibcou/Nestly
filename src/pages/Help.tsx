import SimplePage from '../components/SimplePage';

export default function Help() {
  return (
    <SimplePage
      title="Help Center"
      subtitle="Answers to common questions about booking, hosting, and your account."
    >
      <p>
        Looking for help with a reservation, payment, or your account
        settings? Browse topics below or reach out directly through our
        Contact page and we'll get back to you quickly.
      </p>
      <ul className="list-disc list-inside space-y-1">
        <li>Managing and changing a booking</li>
        <li>Payments, receipts, and refunds</li>
        <li>Account and profile settings</li>
        <li>Becoming a host</li>
      </ul>
    </SimplePage>
  );
}
