import { useEffect, useState } from "react";
import Gallery from "./components/Gallery";
import "./App.css"
import TermsOfUse from "./components/TermsOfUse";

const baseUrl = "http://188.166.203.164";

function App() {
  const [data, setData] = useState(null);
  const [termsOfUseAccepted, setTermsOfUseAccepted] = useState(false);

  const acceptTermsOfUse = () => {
    setTermsOfUseAccepted(true);
  };

  useEffect(() => {
    getData().then(data => setData(data));
  }, [])

  if(data){
    return (
      <>
        {!termsOfUseAccepted && <TermsOfUse paragraphs={data.terms_of_use.paragraphs} onAccept={acceptTermsOfUse}/>}
        {termsOfUseAccepted && <Gallery images={data.images}/>}
      </>
    );
  }
}

async function getData() {
  return await fetch(baseUrl + "/static/test.json")
    .then(response => response.json());
}

export default App;