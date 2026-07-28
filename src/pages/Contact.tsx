import SimplePage from '../components/SimplePage';

export default function Contact() {
  return (
    <SimplePage
      title="Contact Us"
      subtitle="We usually respond within one business day."
    >
      <p>
        Email us at{' '}
        <span className="text-white font-medium">support@nestly.example</span>{' '}
        for questions about bookings, hosting, or anything else. For
        urgent issues during an active stay, use the in-app support chat
        for the fastest response.
      </p>
    </SimplePage>
  );
}
