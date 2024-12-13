import InterestsPage from "./Interests/page";
import AuthPage from "./Auth/page";
import Page from "./Landingpage/page";

function Home(){
    return(
      <main>
       <Page/>
       <AuthPage/>
       <InterestsPage/>

      </main>
    )
  }
  
  export default Home;