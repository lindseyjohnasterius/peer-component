# peer-component

## PROJECT STATUS

This is a design document with a perhaps functional prototype of an expirimental Auth system. It should be considered extremely dangerous to use. 
### NOTE: THIS SHOULD NOT BE CONSIDERED SECURE. DO NOT USE , ONLY READ AND EVEN THEN BE CAREFUL.


## Usage

Include user-persona.js in your website and use:

```html
  <user-persona></user-persona>
```

If there is not an existing user persona, this will generate a local identity with: 

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

