import React from 'react'

export default class NewTabCard extends React.Component {
  render () {
    const {
      url,
      title,
      source,
      urlToImage,
      time,
      favicon
    } = this.props.data
    
    const faviconStyle = {
      backgroundImage: `url(${favicon})`
    }

    const imageStyle = {
      backgroundImage: `url(${urlToImage})`
    }

    return (
      <a href={url}>
        <div className='new-tab-card'>
          <div className='info-container'>
            <div className='title'>
              {title}
            </div>
            <div className='site-container'>
              <div className='favicon' style={faviconStyle} />
              <span className='domain'>
                {source.name}
              </span>
              <span className='time'>
                - {time}
              </span>
            </div>
          </div>
          <div className='image' style={imageStyle} />
        </div>
      </a>
    )
  }
}