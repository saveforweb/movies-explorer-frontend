function SectionHeader(props) {
    const { text } = props;
    return (
        <h2 className="section-header">{text}</h2>
    );
}

export default SectionHeader;