
import Logo from '../assets/php.png';
{/* <p className='no-content'>No content available</p> */}

interface IProps {
  items: Array<number>;
}

function LogoGrid({items}: IProps) {
  return (
    <div className="content">
      {items && items.map((_, index) => (
    <div key={index} className="content-item">
        <img key={index} src={Logo} alt="description" width="100%" />
    </div>
      ))}
  </div>
  )
}

export default LogoGrid