import React from 'react'

export function Section<T>({ title, data}: { title: string; data: T[];}) {
  return (
    <section className="my-4">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <ul className="space-y-2">
        {data.map((item, index) => (
          <li key={`${index}-${title}`}>react component for rendering</li>
        ))}
      </ul>
    </section>
  );
}
