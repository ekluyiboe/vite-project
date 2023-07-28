const Languageoption = (props) => {
    return(
        <div>
            <select onChange={props.onChange}>
                <option>Select Language</option>
                <option value={'en'}>English</option>
                <option value={'fr'}>French</option>
            </select>
        </div>
    )
}
export default Languageoption;