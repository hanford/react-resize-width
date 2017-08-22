## react-resize-width

<p>Be notified when the value of the document.body changes efficiently with one event listener</p>

<br />

## Install

```
$ npm install react-resize-width --save
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
| parentElement           | ref | null | false |

MIT © [Jack Hanford](http://jackhanford.com)
