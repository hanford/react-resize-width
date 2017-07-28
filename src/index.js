import React, { PureComponent } from 'react'

import window from 'global/window'
import document from 'global/document'

export default class Resize extends PureComponent {
  state = {
    width: 0
  }

  componentDidMount () {
    this.setState({width: document.body.offsetWidth})

    window.addEventListener('resize', this.recordPosition)
  }

  componentWillUnMount () {
    window.removeEventListener('resize', this.recordPosition)
  }

  recordPosition = event => {
    const { onResize } = this.props
    const bodyWidth = document.body.offsetWidth

    onResize(bodyWidth, event)
    this.setState({ width: bodyWidth })
  }

  render () {
    return null
  }
}
