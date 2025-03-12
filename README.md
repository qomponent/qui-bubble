# qui-bubble

Bubble component (for chat)


## Installation

```bash
npm i @qomponent/qui-bubble
```

## Usage

```javascript
import '@qomponent/qui-bubble';
```

```html
<div class="chat-container">
    <qui-bubble 
        message="Hello! How are you?" 
        side="left" 
        name="Alice"
        icon="https://randomuser.me/api/portraits/women/1.jpg">
        </qui-bubble>

    <qui-bubble 
        message="I'm good! How about you?" 
        side="right">
    </qui-bubble>

    <qui-bubble side="right">
        <span style="color: blue; font-weight: bold;">Custom <i>styled</i> message!</span>
    </qui-bubble>

    <qui-bubble side="left">
        <img src="https://source.unsplash.com/100x100/?nature" alt="Nice view">
    </qui-bubble>

</div>
```


## Example

To run the example:

```bash
npm install
npm start
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

## License

[Apache 2](http://www.apache.org/licenses/LICENSE-2.0)