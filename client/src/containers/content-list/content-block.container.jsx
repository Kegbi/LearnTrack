import React from "react";
import ContentList from "../../components/content-list/content-list.component";
import { useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selectors";

const ContentBlock = ({ typeOfContent, content, isPending }) => {
  const user = useSelector(
    createStructuredSelector({
      currentUser: selectCurrentUser,
    })
  );

  const userId = user._id;

  return (
    <ContentList
      typeOfContent={typeOfContent}
      content={content}
      isPending={isPending}
    />
  );
};

export default ContentBlock;
