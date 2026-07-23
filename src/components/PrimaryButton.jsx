import { ArrowRight } from 'lucide-react';

export default function PrimaryButton({ children, href = '#membership', alternate = false }) {
  return <a href={href} className={`btn ${alternate ? 'alt' : ''}`}>{children}<ArrowRight size={16}/></a>;
}
