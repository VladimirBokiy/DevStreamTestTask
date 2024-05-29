import "./style.css";
import {acceptTermsOfUse} from "./termsOfUse";
import {renderGallery} from "./gallery";

const baseUrl = "http://188.166.203.164";

async function getData() {
  return await fetch(baseUrl + "/static/test.json")
    .then(response => response.json());
}

const data = await getData();

await acceptTermsOfUse(data.terms_of_use);

renderGallery(data.images);