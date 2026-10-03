import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-2xl flex-col items-center px-4 py-28 text-center">
      <p className="text-sm font-semibold uppercase tracking-wider text-teal-600">
        404
      </p>
      <h1 className="mt-2 text-3xl font-extrabold text-slate-900">
        Page not found
      </h1>
      <p className="mt-4 text-slate-600">
        The page you are looking for may have been moved or no longer exists.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          href="/"
          className="rounded-lg bg-teal-600 px-5 py-3 text-sm font-semibold text-white hover:bg-teal-700"
        >
          Back to home
        </Link>
        <Link
          href="/contact"
          className="rounded-lg border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
        >
          Contact me
        </Link>
      </div>
    </section>
  );
}
