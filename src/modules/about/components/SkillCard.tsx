import React from 'react'

interface SkillCardProps {
  name: string
  icon: JSX.Element
}

export default function SkillCard({ name, icon }: SkillCardProps) {
  return (
    <div className="mx-2">
      <div className="glass-card rounded-full px-5 py-2.5 border border-glass-border flex items-center gap-3">
        <div className="w-5 h-5 text-on-surface-variant/70">{icon}</div>
        <span className="font-geist text-mono text-on-surface-variant whitespace-nowrap">
          {name}
        </span>
      </div>
    </div>
  )
}
