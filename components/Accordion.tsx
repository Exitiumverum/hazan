'use client'

import { useState } from 'react'

interface AccordionItem {
  title: string
  content: string
}

interface AccordionProps {
  items: AccordionItem[]
}

export default function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div
          key={index}
          className="bg-slate-800 rounded-lg shadow-lg overflow-hidden transition-all duration-300 border border-slate-700"
        >
          <button
            onClick={() => toggleItem(index)}
            className="w-full text-right px-6 py-4 flex items-center justify-between hover:bg-slate-700 transition-colors"
          >
            <span className="font-semibold text-lg text-white">{item.title}</span>
            <svg
              className={`w-5 h-5 text-gray-300 transition-transform duration-300 ${
                openIndex === index ? 'rotate-180' : ''
              }`}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {openIndex === index && (
            <div className="px-6 pb-4 text-gray-200 leading-relaxed">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

