import AcceptButton from "./AcceptButton";
import TermsOfUseParagraph from "./TermsOfUseParagraph";

function TermsOfUse(props){
    return (
        <div className="termsOfUse">
            <h1>Terms of Use</h1>
            {props.paragraphs.map((paragraph, index) => (
                <TermsOfUseParagraph index={index} paragraph={paragraph}/>
            ))}
            <AcceptButton onAccept={props.onAccept}/>
        </div>
    );
}

export default TermsOfUse;