import Header from "./components/Header"
import Footer from "./components/Footer"
import MainContent from "./components/MainContent"
// import WelcomeMessage from "./components/WelcomeMessage"
import UserProfile from './components/UserProfile'
function App() {
  

  return (
    <div>
        <h1>Welcome to the User Profile App</h1>
        {/* Example of using the UserProfile component with props */}
        <UserProfile name="Alice" age="25" bio="Loves hiking and photography"/>
        <Header/>
        <Footer/>
        <MainContent/>
        {/* <WelcomeMessage /> */}
       
    </div>
  );
}

export default App
