import React from "react";

type ManoParagrafasProps = {
  content: string
  author?: string
}

const ManoParagrafas: React.FC<ManoParagrafasProps> = ({ content, author }) => (
  <div>
    <p>{content}</p>
    {author && (
      <small>
        <strong>{author}</strong>
      </small>
    )}
    <hr />
  </div >
);

export default ManoParagrafas;
