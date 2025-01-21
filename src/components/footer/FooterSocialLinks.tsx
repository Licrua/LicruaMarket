import socialLinks from '@/data/social-links'
import Image from 'next/image'

export default function SocialLinks() {
  return (
    <div className="grid grid-flow-col gap-4">
      {socialLinks.map((link) => (
        <a href={link.url} key={link.id} className="p-2">
          <Image width={50} height={50} src={link.img} alt={link.name} />
        </a>
      ))}
    </div>
  )
}
