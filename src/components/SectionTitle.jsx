export default function SectionTitle({ tag, title, copy, className = '' }) {
  return <div className={`title ${className}`}><small>{tag}</small><h2>{title}</h2>{copy && <p>{copy}</p>}</div>;
}
