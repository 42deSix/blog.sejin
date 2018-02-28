import React, {Component} from 'react';
import {mdConverter} from "../../../../server/utils/mdModifier";
import LoadingView from '../LoadingView';
import {decapitalizeFirstLetter} from "../../../../server/utils/stringModifier";
import FacebookProvider, { Comments } from 'react-facebook';

class ContentViewContent extends Component {
    render() {
        const renderContents = (postPayload) => {
            if (!postPayload || postPayload.length === 0) {
                return (
                    <div>
                        <LoadingView isTable={false}/>
                    </div>
                );
            }
            return (
                <div className={["content-view", decapitalizeFirstLetter(this.props.belongToMajor)].join(' ')}>
                    <div>
                        <h1>{postPayload[0].title}</h1>
                        {mdConverter(postPayload[0].content)}
                    </div>
                    <div className="fb-comments-wrapper">
                        <FacebookProvider appId="1662680190479239" language="ko_KR">
                            <Comments
                                className="fb-comments"
                                href={window.location.href + "/postviewer/" + this.props.postNo}
                                width="100%"
                                numPosts={10}
                            />
                        </FacebookProvider>
                    </div>
                </div>
            );
        };

        return (
            renderContents(this.props.postPayload)
        );
    }
}

export default ContentViewContent;