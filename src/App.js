import React, { Component } from 'react'
import './App.css';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { ApolloProvider } from 'react-apollo';
import client from './constant/apollo/config'
import { Provider } from 'react-redux'
import store from './reducers/rootReducer'

//============== Container 
import Login from './container/login/login'
import Register from './container/register/register'
import Dashboard from './container/dashboard/dashboard'
import NotFound from './container/notfound/notfound'
// import Members from './container/dashboard/member'
import AddIncome from './container/income/add-income'
import Profile from './container/profile/profile'
import EditProfile from './container/profile/edit-profile'
import Sidebars from './container/sidebar/sidebar'


const headDetail = [{
  label: 'Add Incom',
  path: '/income/add'
},{
  label: 'Show Income',
  path: '/income/show'
}]
//store.subscribe(() => console.log("state in store ====> ", store.getState()))

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Provider store={store}>
          <Router history={browserHistory}>
            <Route path='/' component={null}>
              <IndexRoute component={Login} />
              <Route path="register" component={Register} />
            </Route>
            <Route path='income' component={Sidebars} headDetail={headDetail}>
              <IndexRoute component={AddIncome} />
              <Route path='income/add' component={AddIncome} />
            </Route>
            <Route path='profile' component={Sidebars} >
              <IndexRoute component={Profile} />
              <Route path='/profile/edit' component={EditProfile}/>
            </Route>
            <Route path='member' component={Dashboard} />
            <Route path="*" component={NotFound}/>
          </Router>
        </Provider>
      </ApolloProvider>
    );
  }
}

export default App;


// <Router>
// <Switch>
//   <Sidebars>
//     <Route exact path='/' component={Main} />
//     <PublicRoute path="/login" component={Login} />
//     <PublicRoute path="/register" component={Register} />

//     <PrivateRoute exact path="/dashboard" component={Dashboard} />
//     <PrivateRoute path="/members" component={Members} />

//     <PrivateRoute exact path="/income" component={Income} />
//   </Sidebars>
//   <Route component={NotFound} />
// </Switch>
// </Router>

// <Router history={browserHistory} onUpdate={logPageView}>
//           <Route path="/dashboard" component={Container}>
//             <IndexRoute component={DashboardContainer}/>
//           </Route>
//           <Route path="/" component={Container}>
//             <IndexRoute component={DashboardContainer}/>
//             <Route path="forum" component={ForumContainer}/>
//             <Route path="message(/:threadId)" component={Message}/>
//             <Route path="connect" component={Tab} headerDetails={contentHeaderDetail}>
//               <IndexRoute component={ConnectionCard} showDropdown={true}/>
//               <Route path="member-directory" component={ConnectionCard} isMemberDirectory={true} showDropdown={false}/>
//               <Route path="connect-request" component={ConnectionCard} isConnectRequest={true} showDropdown={false}/>
//             </Route>
//             <Route path="account" component={null}>
//               <IndexRoute component={Account}/>
//               <Route path="account-history" component={AccountHistory}/>
//               <Route path="edit-account" component={UpdateAccountInfo}/>
//               <Route path="update-payment" component={UpdatePaymentContainer} />
//               <Route path="membership" component={Membership}/>
//             </Route>

//             <Route path="notification" component={Notification}/>

//             <Route path="connect" component={Tab} headerDetails={contentHeaderDetail}>
//               <IndexRoute component={ConnectionCard} showDropdown={true}/>
//               <Route path="member-directory" component={ConnectionCard} isMemberDirectory={true} showDropdown={false}/>
//               <Route path="connect-request" component={ConnectionCard} isConnectRequest={true} showDropdown={false}/>
//             </Route>

//             <Route path="booking" component={Tab} headerDetails={bookingHeaderDetail} activeChildRoute>
//               <IndexRoute component={MyBooking} />
//               <Route path=":spaceId" component={SpaceReserve} />
//             </Route>
//             <Route path="space-booking" component={Tab} headerDetails={bookingHeaderDetail} activeChildRoute>
//               <IndexRoute component={SpaceBooking} />
//               <Route path=":spaceId" component={SpaceBooking} />
//             </Route>
//             <Route path="booking-history" component={Tab} headerDetails={bookingHeaderDetail}>
//               <IndexRoute component={BookingHistory} />
//             </Route>


//             <Route path="benefit">
//               <IndexRoute component={Benefit}/>
//               <Route path="detail/:id" component={BenefitView}/>
//             </Route>
//             <Route path="help" component={Tab} headerDetails={helpHeaderDetail}>
//               <IndexRoute component={FaqCollapse}/>
//               <Route path="inquiry" component={Information}/>
//             </Route>
//             <Route name="post" path="/post/:id" component={ViewPostContainer}/>
//           </Route>
//           <Route path="/" component={ContainerWithoutSideBar}>
//             <Route path="profile/:id" component={ProfileContainer}/>
//           </Route>
//           <Route path="/payment" component={Payment}/>
//           <Route path="/space-payment" component={SpacePayment}/>
//           <Route path="/login" component={LoginContainer}/>
//           <Route path="/register" component={Register}/>
//           <Route path="/terms-of-service" component={TermsOfService}/>
//           <Route path="/terms-and-conditions" component={TermsAndConditions}/>
//           <Route path="/account-activation" component={ForgetPassword}/>
//           <Route path="/account-setup/:token" component={AccountSetup}/>
//           <Route path="/password-setup/:token" component={ResetPassword}/>
//           <Route path="/booking-payment" component={BookingPayment} />
//           <Route path="*" component={NotFound}/>
//         </Router>