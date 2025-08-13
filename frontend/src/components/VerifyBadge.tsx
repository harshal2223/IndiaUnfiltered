import React from 'react';

interface VerifyBadgeProps {
  verifiedPct: number;
}

export default function VerifyBadge({ verifiedPct }: VerifyBadgeProps) {
  const color = verifiedPct > 75 ? 'green' : verifiedPct > 50 ? 'yellow' : 'red';
  return (
    <div className={`inline-flex items-center px-2 py-0.5 rounded text-white text-xs bg-${color}-600`}>
      Verified {verifiedPct}%
    </div>
  );
}
