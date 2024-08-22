import { useEffect, useState } from "react";
function CommentSection() {
  const [comments, setComments] = useState<String[]>([]);
  useEffect(() => {
    const fetchComments = async () => {
      const response = await fetch("https://dummyjson.com/comments").then(
        (res) => res.json()
      );
      let strings: string[] = [];
      let n = 0;
      for (var responseComment of response.comments) {
        strings[n] = responseComment.body;
        n++;
      }
      setComments(strings);
    };

    fetchComments();
  }, []);
  return (
    <>
      <h1>Comment Section</h1>
      <ul>
        {comments.map((comment, index) => {
          return <li key={index}>{comment}</li>;
        })}
      </ul>
    </>
  );
}
export default CommentSection;
