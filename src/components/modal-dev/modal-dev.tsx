import { Component, Prop, Method, State, h, Listen } from '@stencil/core';

@Component({
  tag: 'modal-dev',
  styleUrl: 'modal-dev.scss',
  shadow: true,
})
export class ModalDev {
  @Prop() head: string;
  @Prop() content: string;

  
  @State() show = false;


  @Method()
  async open(){
    // this.modalEl.style.display = 'block';
    this.show = true;
  }
  @Listen('modal-body-dev:close')
  closeModalHandler(event){
    console.log(event);
    this.show = false;
  }
  render(){
    let content = null
    if (this.show){
      content = [<modal-backdrop-dev></modal-backdrop-dev>, <modal-body-dev class="modal-body-dev" head={this.head}  content={this.content}></modal-body-dev>];
 
    }
    return content;  
  }
  

}
