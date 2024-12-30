
function customRender(reactElement, container) {

  /* const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;
  domElement.setAttribute('href', reactElement.props.href);
  domElement.setAttribute('target', reactElement.props.target);
 container.appendChild(domElement);*/
const domElement = document.createElement(reactElement.type);
domElement.innerHTML = reactElement.children;
for (const Prop in reactElement.props) {
 if(Prop == 'children') {
   continue;
 }
  domElement.setAttribute(Prop, reactElement.props[Prop]);
}
container.appendChild(domElement);
}
const reactElement = {
  type: 'a',
  props: {
    href: 'https://www.google.com',
    target: '_blank'
  },
  children: 'Click me'
};
const mainContainer = document.querySelector('#root');

customRender(reactElement, mainContainer);