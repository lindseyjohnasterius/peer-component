



class PeerComponent extends HTMLElement {
  connectedCallback(){
    /*
      Gets the target-id
    */    

    this.peer = new Peer()

    this.peer.on('open', (id) => {
      this.target_id = this.getAttribute('target-id')
      if(this.target_id === null){
        const route = window.location.href + `?&target-id=${id}`
        this.QR_CODE = document.createElement('qr-code')
        this.QR_CODE.setAttribute('value', route)
        this.appendChild(this.QR_CODE)
      } else {
        this.connection = this.peer.connect(this.target_id)
        this.connection.on('data', (data) => {
          this.innerHTML = data
        })
      }
    })

    this.peer.on('connection', (conn) => {
      this.connection = conn
      this.QR_CODE.remove()
      this.innerHTML = 'peered to ' + conn.peer
    })
  }

  static get observedAttributes() {
    return [];
  }

  handleInputChange(){

  }

  handleTextAreaChange(){

  }

  handleCanvas(canvas){

  }

  handleImage(img){

  }

  handleVideo(video){

  }

  handleAudio(audio){

  }

  update(){
    console.log('updating!')
    if(!this.connection) return

    console.log('sending:', this.innerHTML)
    this.connection.send(this.innerHTML)

    // send new HTML to all peers
  }

  attributeChangedCallback(name, old_value, new_value){
    switch(name){
      default:
    }
  }

}

customElements.define('peer-component', PeerComponent)


