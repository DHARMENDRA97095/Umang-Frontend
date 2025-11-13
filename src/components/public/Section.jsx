
/**
 * Section Component
 * A responsive container for consistent spacing across all sections.
 * - Centers content with max width
 * - Adds vertical spacing
 * - Uses responsive padding for different screen sizes
 */
export default function Section({ children, className = "" }) {
  return (
    <section
      className={`w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 lg:pt-24 pb-12 sm:pb-16 lg:pb-14 ${className}`}
    >

      {children}
    </section>
  );
}
