import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Admin.css';

const Admin = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [filter, setFilter] = useState('all');
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');

  // ✅ FIXED: All useEffect hooks must be at the top level, before any conditional returns
  
  // Check if user is already authenticated
  useEffect(() => {
    const auth = localStorage.getItem('adminAuth');
    if (auth === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  // Fetch contacts only when authenticated
  useEffect(() => {
    if (isAuthenticated) {
      fetchContacts();
    }
  }, [isAuthenticated]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === 'Sithija@90354125') {
      setIsAuthenticated(true);
      localStorage.setItem('adminAuth', 'true');
    } else {
      alert('Incorrect password');
    }
  };

  const fetchContacts = async () => {
    try {
      const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';
      const response = await axios.get(`${API_URL}/contact`);
      setContacts(response.data);
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch messages');
      setLoading(false);
    }
  };

  const markAsRead = async (id) => {
    try {
      const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';
      await axios.patch(`${API_URL}/contact/${id}/read`);
      fetchContacts();
    } catch (err) {
      console.error('Error marking as read:', err);
    }
  };

  const deleteMessage = async (id) => {
    if (window.confirm('Are you sure you want to delete this message?')) {
      try {
        const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';
        await axios.delete(`${API_URL}/contact/${id}`);
        fetchContacts();
        setSelectedMessage(null);
      } catch (err) {
        console.error('Error deleting message:', err);
      }
    }
  };

  const getFilteredContacts = () => {
    if (filter === 'all') return contacts;
    if (filter === 'unread') return contacts.filter(c => !c.isRead);
    if (filter === 'read') return contacts.filter(c => c.isRead);
    return contacts.filter(c => c.inquiryType === filter);
  };

  // ✅ Now the conditional return comes AFTER all hooks
  if (!isAuthenticated) {
    return (
      <div className="admin-login">
        <form onSubmit={handleLogin}>
          <h2>Admin Login</h2>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }

  const filteredContacts = getFilteredContacts();
  const unreadCount = contacts.filter(c => !c.isRead).length;

  if (loading) {
    return (
      <div className="admin-container">
        <div className="loading">Loading messages...</div>
      </div>
    );
  }

  return (
    <div className="admin-container">
      <div className="admin-header">
        <h1>📬 Contact Messages</h1>
        <div className="stats">
          <div className="stat-card">
            <span className="stat-number">{contacts.length}</span>
            <span className="stat-label">Total Messages</span>
          </div>
          <div className="stat-card unread">
            <span className="stat-number">{unreadCount}</span>
            <span className="stat-label">Unread</span>
          </div>
        </div>
      </div>

      {error && <div className="error-message">{error}</div>}

      <div className="filters">
        <button 
          className={filter === 'all' ? 'active' : ''} 
          onClick={() => setFilter('all')}
        >
          All ({contacts.length})
        </button>
        <button 
          className={filter === 'unread' ? 'active' : ''} 
          onClick={() => setFilter('unread')}
        >
          Unread ({unreadCount})
        </button>
        <button 
          className={filter === 'read' ? 'active' : ''} 
          onClick={() => setFilter('read')}
        >
          Read ({contacts.length - unreadCount})
        </button>
        <button 
          className={filter === 'Internship' ? 'active' : ''} 
          onClick={() => setFilter('Internship')}
        >
          Internships
        </button>
        <button 
          className={filter === 'Freelance' ? 'active' : ''} 
          onClick={() => setFilter('Freelance')}
        >
          Freelance
        </button>
      </div>

      <div className="messages-layout">
        <div className="messages-list">
          {filteredContacts.length === 0 ? (
            <div className="no-messages">
              <p>📭 No messages found</p>
            </div>
          ) : (
            filteredContacts.map((contact) => (
              <div
                key={contact._id}
                className={`message-card ${!contact.isRead ? 'unread' : ''} ${
                  selectedMessage?._id === contact._id ? 'selected' : ''
                }`}
                onClick={() => {
                  setSelectedMessage(contact);
                  if (!contact.isRead) markAsRead(contact._id);
                }}
              >
                <div className="message-header">
                  <div className="sender-info">
                    <span className="sender-name">{contact.name}</span>
                    {!contact.isRead && <span className="unread-badge">New</span>}
                  </div>
                  <span className="inquiry-type">{contact.inquiryType}</span>
                </div>
                <div className="message-subject">{contact.subject}</div>
                <div className="message-preview">{contact.message.substring(0, 80)}...</div>
                <div className="message-footer">
                  <span className="message-date">
                    {new Date(contact.createdAt).toLocaleDateString()} at{' '}
                    {new Date(contact.createdAt).toLocaleTimeString()}
                  </span>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="message-detail">
          {selectedMessage ? (
            <div className="detail-content">
              <div className="detail-header">
                <div>
                  <h2>{selectedMessage.name}</h2>
                  <a href={`mailto:${selectedMessage.email}`} className="email-link">
                    📧 {selectedMessage.email}
                  </a>
                </div>
                <button 
                  className="delete-btn"
                  onClick={() => deleteMessage(selectedMessage._id)}
                >
                  🗑️ Delete
                </button>
              </div>

              <div className="detail-meta">
                <span className="meta-item">
                  <strong>Type:</strong> {selectedMessage.inquiryType}
                </span>
                <span className="meta-item">
                  <strong>Date:</strong> {new Date(selectedMessage.createdAt).toLocaleString()}
                </span>
              </div>

              <div className="detail-subject">
                <strong>Subject:</strong> {selectedMessage.subject}
              </div>

              <div className="detail-message">
                <strong>Message:</strong>
                <p>{selectedMessage.message}</p>
              </div>

              <div className="detail-actions">
                <a 
                  href={`mailto:${selectedMessage.email}?subject=Re: ${selectedMessage.subject}`}
                  className="action-btn reply-btn"
                >
                  ↩️ Reply via Email
                </a>
                <a 
                  href={`tel:${selectedMessage.phone || ''}`}
                  className="action-btn"
                >
                  📞 Call (if available)
                </a>
              </div>
            </div>
          ) : (
            <div className="no-selection">
              <p>📬 Select a message to view details</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Admin;