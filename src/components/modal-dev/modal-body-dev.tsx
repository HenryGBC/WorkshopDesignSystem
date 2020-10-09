import { Component, State, Method, Event, Element, h, Prop, EventEmitter } from '@stencil/core';



@Component({
  tag: 'modal-body-dev',
  styleUrl: 'modal-dev.scss',
})


export class ModalBodyDev{
  
  buttons: string[] = ['Okay', 'Cancel']
  
  @State() showOptions: boolean = false;
  @Prop() head: string;
  @Prop() content: string;
  @Event() close: EventEmitter; 
  @Element() modalEl: HTMLElement;
  
  @Method()
  async open(){
    this.modalEl.style.display = 'block';
  }
  showOptionsHandler() {
  
    this.showOptions = true;
  }
  
  closeModalHandler(){
    
    // this.modalEl.style.display =  'none';
    this.showOptions = false;
    this.close.emit();
  }

  render(){
    let options = null;
    if(this.showOptions){
      options = (
        this.buttons.map(btn=> (

          <button-dev color="success" onClick={this.closeModalHandler.bind(this)}>{btn}</button-dev>
      )));

    }
    return (
      <div>
        <h1>{this.head}</h1>
        <p>{this.content}</p>
        <hr />
        <button onClick={this.showOptionsHandler.bind(this)}>Show Options</button>
        <hr />
        <div class="footer">
                {options}

        </div>

      </div>

    ) 


  }
  
}
