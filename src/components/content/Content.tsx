import Readme from './Readme'
import Wander from '../wander/Wander'
import { StoreContext } from '../store/StoreProvider';
import { useContext, Switch, Match } from 'solid-js';

export default function Content() {
    const store = useContext(StoreContext)

    return (
      <Switch fallback={<div>Error</div>}>
        <Match when={store.state.selectedResource === "section:README"}>
          <Readme></Readme>
        </Match>
        <Match when={store.state.selectedResource === "section:Wander"}>
          <Wander></Wander>
        </Match>
      </Switch>
    );
}