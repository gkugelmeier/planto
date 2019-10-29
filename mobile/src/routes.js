import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'

import Access from './pages/Access';
import Login from './pages/Login';
import NewUser from './pages/NewUser';
import Dashboard from './pages/Dashboard';
import Plants from './pages/Plants';
import NewPlant from './pages/NewPlant';
import HowToPlant from './pages/HowToPlant';

const Routes = createAppContainer(
    createStackNavigator({
        Access,
        Login,
        NewUser,
        Dashboard,
        Plants,
        NewPlant,
        HowToPlant
    })
);

export default Routes;