import { useState } from 'react'

function GalleryItem(props) {
    let [view, setView] = useState(false)

    const simpleStyle = {
        'width': '80vw',
        /* height: 20vh; */
        border: '2px solid lightblue',
        borderRadius: '9px',
        margin: '.5%'
    }
    
    const textStyles = {
        detailText: {
            flex: '25%',
            margin: '0px',
            color: 'black',
            fontSize: '10px'
        }
    }

    const detailStyle = {
        outerDetail: {
            'display': 'flex',
            'width': '80vw',
            'height': '40vh',
            'border': '1px solid black',
            'margin': '2px',
            'backgroundImage': `url(${props.item.artworkUrl100})`,
        },
        innerDetail: {
            width: '100%',
            display: 'flex',
            margin: '8% 1%',
            backgroundColor: 'grey',
            opacity: '0.9',
            borderRadius: '10px',
        }
    }

    const simpleView = () => {
        return (
            <div style={simpleStyle}>
                <h3>{props.item.trackName}</h3>
                {/* <h4>{props.item.collectionName}</h4> */}
            </div>
        )
    }

    const detailView = () => {
        return (
            <div style={detailStyle.outerDetail}>
                <div style={detailStyle.innerDetail}>
                    <h4 style={textStyles.detailText}>{props.item.trackName}</h4>
                    <h4 style={textStyles.detailText}>{props.item.collectionName}</h4>
                    <h4 style={textStyles.detailText}>{props.item.primaryGenreName}</h4>
                    <h4 style={textStyles.detailText}>{props.item.releaseDate}</h4>
                </div>
            </div>
        )
    }
    
    return (
        <div onClick={() => setView(!view)} style={{'display': 'inline-block'}}>
            {/* This simple ternary shows the simple view when 'view' is false! */}
            {view ? detailView() : simpleView()}
        </div>
    )
}

export default GalleryItem
