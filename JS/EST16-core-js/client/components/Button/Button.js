


class CustomButton extends HTMLElement{
  count = 0;

  constructor(){
    super();
  }

  connectedCallback(){
    console.log('connected');
    this.attachEvent();
    this.render(); // 2. 그래서 여기에 추가해주는 게 맞음!
    
  }

  disconnectedCallback(){
    console.log('disconnected');
  }

  static get observedAttributes(){
    return ['data-value'];
  }

  attributeChangedCallback(name, oldValue, newValue){
    console.log( name, oldValue, newValue );
    this.render(); // 1. 가장 먼저 실행되는 중. 초기화가 일어나기도 전에.
  }

  // 임의로 마음대로 정한 메서드 

  handleClick(){
    console.log('clicked');
    this.dataset.value = ++this.count;
    
  }

  attachEvent(){
    this.addEventListener('click',this.handleClick);
  }


  render(){
    this.innerHTML = this.dataset.value;
  }


}


customElements.define('my-button',CustomButton);