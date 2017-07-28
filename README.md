## react-resize-body

<p>Be notified when the value of the document.body changes efficiently with one event listener</p>

<br />

## Install

```
$ npm install react-resize-body --save
```

## Usage

```js
import ResizeWidth from 'react-resize-width'

render () {
  return (
    <ResizeWidth
      onResize={this.handleResize}
    />
  )
}
```

## API
| Param          | Type    | args | required |
|----------------|---------|-----------------|-----------------|
| onResize           | Function | value, event | true |

MIT © [Jack Hanford](http://jackhanford.com)
