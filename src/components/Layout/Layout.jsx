import { NavLink, Outlet } from "react-router-dom";
import {List,ListItem,Nav,Main} from "./Layout.module";

const Layout = () => {

return ( 
<div>
  <Nav>
  <List>
   <ListItem>
      <NavLink to='/'>Home</NavLink>
   </ListItem>
   <ListItem>
      <NavLink to='/movies'>Movies</NavLink>
   </ListItem> 
 </List>
  </Nav>
 <Main>
   <Outlet/>
 </Main>
</div>
);
}
 
export default Layout;