// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {listDetails, getImageUrl, activeCheck} = props
  const {
    id,
    imageUrl,
    imageAltText,
    thumbnailUrl,
    thumbnailAltText,
  } = listDetails
  const onClickImgItem = () => {
    getImageUrl(id, imageUrl, imageAltText)
  }
  const activeStyle = activeCheck ? 'active-effect' : ''
  return (
    <li className="list-cont">
      <img
        onClick={onClickImgItem}
        className={`thumbnail-edit ${activeStyle}`}
        src={thumbnailUrl}
        alt={thumbnailAltText}
      />
    </li>
  )
}
export default ThumbnailItem
