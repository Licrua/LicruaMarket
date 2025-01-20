import socialLinks from "@/data/social-links";

export default function SocialLinks() {
  return (
    <div className="grid grid-flow-col gap-4">
      {socialLinks.map((link) => (
        <a href={link.url} key={link.id} className="p-2">
          <img src={link.img} alt={link.name} />
        </a>
      ))}
    </div>
  )
}

