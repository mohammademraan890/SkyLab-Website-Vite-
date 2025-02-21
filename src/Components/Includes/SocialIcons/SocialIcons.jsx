import { socialIcons } from '../../Data/Data'
import './SocialIcons.css'
const SocialIcons = () => {
  return (
    <div className='menuNav-socialLinks d-flex align-items-center'>
      {socialIcons.map((icon) => {
        return (
          <a key={icon.id} className='d-flex align-items-center justify-content-center' href={icon.link}>{icon.svg}</a>
        )
      })}
    </div>
  )
}

export default SocialIcons
