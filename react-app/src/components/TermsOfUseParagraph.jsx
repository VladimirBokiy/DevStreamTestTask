function TermsOfUseParagraph(props) {
    return (
        <div className="termsOfUseParagraph" key={props.index}>
            <h2>{props.paragraph.title}</h2>
            <p>{props.paragraph.content || props.paragraph.text}</p>
        </div>
    );
}

export default TermsOfUseParagraph;