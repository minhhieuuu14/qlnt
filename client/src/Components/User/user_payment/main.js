import React, { useState, useEffect } from "react";
import axios from "axios";
import "./payment.css"; // Import CSS file for styling

const PostTable = () => {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/payment");
        setPayments(response.data);
      } catch (error) {
        console.error("Error fetching payments:", error);
      }
    };

    fetchPayments();
  }, []);

  return (
    <div className="table-container">
      <h1>Thông tin thanh toán !</h1>
      <table className="payment-table">
        <thead>
          <tr>
            <th>Mã thanh toán</th>
            <th>Mã bài đăng</th>
            <th>Mã quản trị viên</th>
            <th>Tiền</th>
            <th>Thời gian thanh toán</th>
            <th>Trạng thái</th>
            <th className="function-cell">Chức năng</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((payment) => (
            <tr key={payment.paymentId}>
              <td>{payment.paymentId}</td>
              <td>{payment.postId}</td>
              <td>{payment.adminId}</td>
              <td>{payment.amount}</td>
              <td>{payment.paymentTime}</td>
              <td>{payment.status}</td>
              <td>
                {" "}
                <a href="#" className="detail-link update-button">
                  Chi tiết
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PostTable;
