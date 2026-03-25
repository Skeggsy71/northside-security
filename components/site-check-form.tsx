"use client";

import { useActionState } from "react";
import { useSearchParams } from "next/navigation";
import { CheckCircle, ArrowRight, Loader2 } from "lucide-react";
import { submitLead, type SubmitResult } from "@/app/actions/submit-lead";

export function SiteCheckForm() {
  const searchParams = useSearchParams();
  const interest = searchParams.get("interest") || "";

  const [state, formAction, isPending] = useActionState<SubmitResult | null, FormData>(
    submitLead,
    null
  );

  if (state?.success) {
    return (
      <div className="rounded-xl border border-trust/30 bg-trust/5 p-6 text-center">
        <p className="flex items-center justify-center gap-2 text-lg font-bold text-trust"><CheckCircle className="h-5 w-5" /> Request Submitted</p>
        <p className="mt-2 text-slate-300">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-4">
      <input type="text" name="website" tabIndex={-1} aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 opacity-0" autoComplete="off" />
      {interest && <input type="hidden" name="interest" value={interest} />}
      {state?.message && !state.success && <p className="text-sm text-red-400">{state.message}</p>}

      <div>
        <label htmlFor="name" className="mb-1 block text-sm font-medium text-slate-300">Name</label>
        <input type="text" id="name" name="name" required minLength={2} className="w-full rounded-md border border-border bg-navy-900 px-4 py-3 text-white placeholder-slate-600 focus:border-accent focus-visible:outline-none focus:ring-2 focus:ring-accent" placeholder="Your name" />
        {state?.errors?.name && <p className="mt-1 text-sm text-red-400">{state.errors.name}</p>}
      </div>

      <div>
        <label htmlFor="phone" className="mb-1 block text-sm font-medium text-slate-300">Phone</label>
        <input type="tel" id="phone" name="phone" required className="w-full rounded-md border border-border bg-navy-900 px-4 py-3 text-white placeholder-slate-600 focus:border-accent focus-visible:outline-none focus:ring-2 focus:ring-accent" placeholder="04xx xxx xxx" />
        {state?.errors?.phone && <p className="mt-1 text-sm text-red-400">{state.errors.phone}</p>}
      </div>

      <div>
        <label htmlFor="suburb" className="mb-1 block text-sm font-medium text-slate-300">Suburb</label>
        <input type="text" id="suburb" name="suburb" required minLength={2} className="w-full rounded-md border border-border bg-navy-900 px-4 py-3 text-white placeholder-slate-600 focus:border-accent focus-visible:outline-none focus:ring-2 focus:ring-accent" placeholder="e.g. Joondalup" />
        {state?.errors?.suburb && <p className="mt-1 text-sm text-red-400">{state.errors.suburb}</p>}
      </div>

      <button type="submit" disabled={isPending} className="w-full rounded-md bg-cta py-4 text-sm font-bold uppercase tracking-wide text-navy-950 transition-colors hover:bg-amber-400 disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed">
        {isPending ? (
          <span className="flex items-center justify-center gap-2"><Loader2 className="h-4 w-4 animate-spin" /> Submitting...</span>
        ) : (
          <span className="flex items-center justify-center gap-1">Book Your Free Site Check <ArrowRight className="h-4 w-4" /></span>
        )}
      </button>
    </form>
  );
}
