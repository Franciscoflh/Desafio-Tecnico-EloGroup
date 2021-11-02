import { Switch, Route } from 'react-router-dom';

import {NewUser} from './paginas/NovoUsuario/NovoUsuario';
import { Leads } from './paginas/Leads/leads';

export const Routes = (): JSX.Element => {
  return (
    <Switch>
      <Route path="/" exact component={NewUser} />
      <Route path="/leads" component={Leads} />
    </Switch>
  );
};