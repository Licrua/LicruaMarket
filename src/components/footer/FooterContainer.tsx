import FooterCopyright from './FooterCopyright'
import FooterLogo from './FooterLogo'
import FooterSlogan from './FooterSlogan'
import SocialLinks from './FooterSocialLinks'

function FooterContainer() {
  return (
    <footer className="footer footer-center bg-primary text-primary-content p-10">
      <aside>
        <FooterLogo />
        <FooterSlogan />
        <FooterCopyright />
      </aside>
      <nav>
        <SocialLinks />
      </nav>
    </footer>
  )
}

export default FooterContainer
