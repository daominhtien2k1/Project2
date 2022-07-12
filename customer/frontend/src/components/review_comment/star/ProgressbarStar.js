import "./progressbarstar.css"

function ProgressbarStar({percent, star}) {
    return (
        <div className="progress">
            <span>{star} star</span>
            <div className="progressbar" style={{width: `${percent}%`}}>
                {`${percent}%`}
            </div>
        </div>
    )
}

export default ProgressbarStar;