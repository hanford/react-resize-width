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
    const { parentElement } = this.props

    const element = parentElement || document.body

    const width = element.offsetWidth

    onResize(width, event)
    this.setState({ width: width })
  }

  render () {
    return null
  }
}
