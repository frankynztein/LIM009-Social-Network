import {viewLogin} from './view/viewLogIn.js';
import {viewRegister} from './view/viewRegister.js';
import {viewFeed} from './view/viewFeed.js';

const changeTmp = (hash) => {
    if (hash === '#/' || hash === '' || hash === '#') {
      return viewTmp('#/login');
    } else if (hash === '#/register' || hash === '#/profile') {
        return viewTmp(hash);
      } else {
        return viewTmp('#/login');
      }
    }
  
const viewTmp = (routers) => {
    const router = routers.substr(2, routers.length - 2)
    const root = document.getElementById('content');
    console.log(router)
    root.innerHTML = '';
    switch (router) {
      case 'login':
          root.innerHTML = '';        
          root.appendChild(viewLogin());  
        break;
      case 'register':
        root.appendChild(viewRegister());
        break;
      case 'profile':
        root.appendChild(viewFeed());
        break;
      default:
        root.appendChild(viewLogin());
        break;
    }
  }
  
  export const initRouter = () => {
    window.addEventListener('load', changeTmp(window.location.hash))
    if (("onhashchange" in window)) window.onhashchange = () => changeTmp(window.location.hash)
  }