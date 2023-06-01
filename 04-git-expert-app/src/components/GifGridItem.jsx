import PropTypes from 'prop-types';

export const GifGridItem = (image) => {
    const {id,title,url} = image;
  return (
    <div className="card">
        <img src={url} alt={title}></img>
        <p>{title}</p>
    </div>
  )
}

GifGridItem.PropTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}
