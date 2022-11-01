  const Footer=({projet,developper,date})=>{
    return(
            <div className="footer">
                <h5>	{projet}</h5>
                /<h5 className="dev"> &copy; {developper}{date}</h5>
            </div>
    );
}

export default Footer;