import Content from "./content/Content";
import { Networks } from "./networks/Networks";
import Split from 'split-grid'
import '@shoelace-style/shoelace/dist/themes/light.css';

export default function Main() {

  setTimeout(() => {
    Split({
      columnGutters: [{
        track: 1,
        element: document.querySelector('.gutter'),
      }],
    })  
  })  

  return (
    <div id="split-panel">
      <div id="resource-panel">
        <Networks />
      </div>
      <div class="gutter"></div>
      <div id="content-panel">
        <Content />
      </div>
    </div>
  );
}
