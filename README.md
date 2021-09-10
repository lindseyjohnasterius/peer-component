# peer-component

## PROJECT STATUS

This is a design document with a perhaps functional prototype of an experimental Auth system. It should be considered extremely dangerous to use. 
### NOTE: THIS SHOULD NOT BE CONSIDERED SECURE. DO NOT USE , ONLY READ AND EVEN THEN BE CAREFUL.

Demo: https://lindseymysse.github.io/peer-component/demo.html

## Usage

Include peer-component.js in your website and use:

```html

  <script src="https://unpkg.com/peerjs@1.3.1/dist/peerjs.min.js"></script>
  <script src="https://lindseymysse.github.io/LNSYs-toolbox/helpers.js"></script>
  <script type="text/javascript" src="https://lindseymysse.github.io/qr-code-element/qr-code.js"></script>
  <script type="text/javascript" src="peer-component.js"></script>

  <peer-component></peer-component>
```

If there is not an existing device identity, this will generate a local identity with: 

it's own:

- unique id
- cryptographic public key
- cryptographic private key

It will also allow for upload and download of keys from this widget. 

You will then be able to access that particular devices identity by querying the HTML Element: 

```javascript
  document.querySelector('user-persona').getAttribute('user-name')
  document.querySelector('user-persona').getAttribute('peer-id')
```

This should store an arbitrary amountr of XML data. This XML Data can be: 


```HTML
  <user-name></user-name>
  <peer-id></peer-id>
  <user-img src="binary object of file"></user-img>
```

You can upload a private key, but you cannot download a private key. 

