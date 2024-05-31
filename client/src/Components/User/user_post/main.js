import React, { useState, useEffect } from "react";
import axios from "axios";
import "./post.css"; // Import CSS file for styling
import { Link } from "react-router-dom";

const PostTable = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/post");
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="table-container">
      <h1 style={{ width: "700px" }}>Thông tin tất cả bài đăng !</h1>
      <table className="user-table">
        <thead>
          <tr>
            <th>Mã bài đăng </th>
            <th>Tiêu đề bài đăng</th>
            <th>Diện tích</th>
            <th>Giá</th>
            <th>Địa chỉ</th>
            <th>Trạng thái</th>
            <th className="function-cell">Chức năng</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id}>
              <td>{post.postId}</td>
              <td>{post.userId}</td>
              <td>{post.title}</td>
              <td>{post.username}</td>
              <td>{post.status}</td>
              <td>{post.status}</td>
              <td>
                <Link
                  to={`/detail/${post.id}`}
                  className="detail-link update-button"
                >
                  Chi tiết
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PostTable;
