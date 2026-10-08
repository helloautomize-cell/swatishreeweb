import { imageEntry } from "@/lib/images";
import EveImage from "./EveImage";

export default function DoctorPortrait({ slot, id, priority = false }: { slot: string; id: string; priority?: boolean }) {
  if (imageEntry(slot)) return <EveImage src={slot} priority={priority} sizes="(max-width: 860px) 300px, 420px" imgClassName="cut" />;
  return <>
    <svg className="cut" viewBox="0 0 400 520" preserveAspectRatio="xMidYMax meet" role="img" aria-label="Illustrated portrait placeholder. Approved doctor cut-out pending.">
      <defs>
        <linearGradient id={`${id}-coat`} x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#FFFFFF" /><stop offset="1" stopColor="#F5F6F2" /></linearGradient>
        <linearGradient id={`${id}-hair`} x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#3A2A23" /><stop offset="1" stopColor="#241915" /></linearGradient>
      </defs>
      <path d="M200 38C138 38 108 90 110 154c2 64-8 112-24 150 34 22 74 28 114 26 40 2 80-4 114-26-16-38-26-86-24-150 2-64-28-116-90-116z" fill={`url(#${id}-hair)`} />
      <path d="M176 214h48l5 78c-9 14-49 14-58 0z" fill="#B57D60" />
      <path d="M176 240c10 12 38 12 48 0v-10h-48z" fill="#9E6A50" opacity=".55" />
      <ellipse cx="148" cy="164" rx="9" ry="15" fill="#BE8668" /><ellipse cx="252" cy="164" rx="9" ry="15" fill="#BE8668" /><ellipse cx="200" cy="158" rx="52" ry="66" fill="#C79173" />
      <path d="M146 158c-4-60 26-86 58-86 34 0 60 26 50 86-10-34-30-52-62-52-22 0-40 18-46 52z" fill={`url(#${id}-hair)`} />
      <path d="M200 74c-6 18-26 34-52 44" stroke="#4A362D" strokeWidth="2" fill="none" opacity=".6" />
      <path d="M180 196c12 8 28 8 40 0" stroke="#9E6A50" strokeWidth="2.4" fill="none" strokeLinecap="round" opacity=".7" />
      <path d="M112 236c-8 50-4 96 16 130l18-6c-14-34-16-80-6-118zM288 236c8 50 4 96-16 130l-18-6c14-34 16-80 6-118z" fill={`url(#${id}-hair)`} />
      <path d="M58 520c0-120 30-190 92-218l50-10 50 10c62 28 92 98 92 218z" fill="#5F7350" />
      <path d="M180 290l20 50 20-50z" fill="#B57D60" />
      <path d="M58 520c0-120 30-190 92-218l24-6 22 108-24 116zM342 520c0-120-30-190-92-218l-24-6-22 108 24 116z" fill={`url(#${id}-coat)`} />
      <path d="M150 302l24-6 20 96-36-62zM250 302l-24-6-20 96 36-62z" fill="#E9EEE3" />
      <path d="M196 404l-24 116M204 404l24 116" stroke="#DDE4D4" strokeWidth="2" />
      <path d="M166 296c-22 36-24 86 2 122M234 296c22 36 22 80 2 106" stroke="#6B4F3A" strokeWidth="5" fill="none" strokeLinecap="round" />
      <circle cx="236" cy="412" r="11" fill="#CDD8C6" stroke="#6B4F3A" strokeWidth="4" />
      <rect x="96" y="398" width="48" height="16" rx="4" fill="#E9EEE3" /><rect x="102" y="404" width="26" height="4" rx="2" fill="#5F7350" />
      <path d="M262 452h52" stroke="#DDE4D4" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
    <span className="phlabel">Portrait placeholder</span>
  </>;
}
