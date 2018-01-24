import React, {Component} from 'react';
import { Markdown } from 'react-showdown';
import { capitalizeFirstLetter } from "../../utils/stringModifier";

class ContentPreview extends Component {
    constructor(props) {
        super(props);
        this.belongToMajor = props.belongToMajor;
        this.belongToMinor = props.belongToMinor;
        this.title = props.title;
        this.content = props.content;
        this.dataUpdated = props.dataUpdated;
    }

    // componentWillMount() {
    //     this.content = Converter.makeHtml(this.content);
    //     console.log(this.content);
    // }

    // componentWillReceiveProps(nextProps) {
    //     if(nextProps.title !== this.props.title) {
    //         this.title = nextProps.title;
    //     }
    // }

    render() {
        return(
            <div className={["content-preview", this.belongToMajor].join(' ')}>
                <Markdown markup={this.content}/>
                <div className={"read-more"}>
                    <a href="">Read more</a>
                </div>
            </div>
        );
    }
}

export default ContentPreview;