import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail author="Scott" date="Today at 5:00PM" content="Meaningful post!" avatar={faker.image.avatar()} />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Kai" date="Today at 9:00PM" content="Nice blog post!" avatar={faker.image.avatar()} />\
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Chase" date="Today at 5:00PM" content="I'm cool!" avatar={faker.image.avatar()} />
            </ApprovalCard>
            <ApprovalCard>
                <div>
                    <h4>Warning</h4>
                    Grant read permission?
                </div>
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App/>, document.querySelector("#root"));