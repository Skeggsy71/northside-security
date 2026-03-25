import Link from "next/link";

export function MobileCTABar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-navy-950/95 p-3 backdrop-blur md:hidden">
      <Link
        href="/contact"
        className="block rounded-md bg-cta py-3 text-center text-sm font-bold uppercase tracking-wide text-navy-950"
      >
        Book Free Site Check →
      </Link>
    </div>
  );
}
