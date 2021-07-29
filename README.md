# peer-component
Web Component for peer.js components

## Current Status: Non functioning prototype

When I am finished you will be able to include this javascript into your application and you will be able to sync two components between two browsers using Peer.js. 

So, this would look like: 


``` xml

<peer-component>
  <h1>Peer</h1>
</peer-component>

```

This will generate a div with a QR code at the beggining. following that link to the same page will connect your two computers to that peer with: 


```xml  

<peer-component target-id="target_id">
  <!-- This DIV will sync to the other div to here -->
  
</peer-component>


```


To come: 

If use has input, canvas or video, all changes should be streamed. 

If use has an image, the image should transfer via binary data with the SRC. 