import React from "react";
import ContentList from "../../components/content-list/content-list.component";
import { useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selectors";

const ContentBlock = ({ typeOfContent }) => {
  const user = useSelector(
    createStructuredSelector({
      currentUser: selectCurrentUser,
    })
  );

  const userId = user._id;

  if (typeOfContent === "Books") {
    // Fetch books for this component
    return <ContentList typeOfContent={typeOfContent} />;
  } else if (typeOfContent === "Courses") {
    // Fetch courses for this component
    return <ContentList typeOfContent={typeOfContent} />;
  }
  throw Error("Wrong content type for content-block container");
};

export default ContentBlock;
