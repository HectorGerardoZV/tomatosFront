
import "./principalPanel.css"

const PrincipalPanel = (props) => {
    const { Page } = props;
    return (
        <section className="principalPanel">
            <Page />
        </section>
    )
}

export default PrincipalPanel