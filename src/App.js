import ChatFeed from './components/ChatFeed';
import {ChatEngine, }   from 'react-chat-engine';
import './App.css'
import LoginForm from './components/LoginForm';

const App = ()=>{

   if(!localStorage.getItem('username')) return <LoginForm/>
   
return(
 <ChatEngine 
    height ="100vh"
    projectID="d6d6c527-e484-4b93-9047-5ae010c05006"
    userName={localStorage.getItem('username')}
    userSecret={localStorage.getItem('password')}
    renderChatFeed={(chatAppProps)=> <ChatFeed {...chatAppProps}  />}
 />
)
}

export default App
