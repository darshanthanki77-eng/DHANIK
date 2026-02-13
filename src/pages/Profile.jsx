import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    User,
    Settings,
    Mail,
    Phone,
    Calendar,
    Link as LinkIcon,
    Copy,
    Lock,
    ShieldCheck,
    Globe,
    Wallet,
    X,
    KeyRound
} from 'lucide-react';
import './Profile.css';

const Profile = () => {
    const [showPasswordModal, setShowPasswordModal] = useState(false);
    const [copied, setCopied] = useState(false);

    const copyReferralLink = () => {
        navigator.clipboard.writeText('https://www.rextoken.in/register?ref=ABU1101');
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const infoFields = [
        { label: 'Full Name', value: 'Abuzar Munshi', icon: <User size={16} /> },
        { label: 'Email Address', value: 'zarwebcoders@gmail.com', icon: <Mail size={16} /> },
        { label: 'Phone Number', value: 'Not set', icon: <Phone size={16} /> },
        { label: 'Member Since', value: '12/30/2025', icon: <Calendar size={16} /> },
    ];

    return (
        <div className="profile-container">
            <motion.div
                className="profile-header"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
            >
                <h1>Profile</h1>
                <button className="btn-primary shimmer-btn" style={{ padding: '8px 20px', fontSize: '0.9rem' }}>
                    Edit Profile
                </button>
            </motion.div>

            <motion.div
                className="main-profile-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
            >
                <div className="profile-user-section">
                    <div className="avatar-large">A</div>
                    <div className="user-info-details">
                        <h2>Abuzar Munshi</h2>
                        <div className="user-badges">
                            <span className="status-badge badge-unverified">Unverified</span>
                            <button
                                className="btn-primary"
                                style={{
                                    padding: '4px 12px',
                                    fontSize: '0.75rem',
                                    background: '#FFD200',
                                    color: '#05090C',
                                    boxShadow: 'none',
                                    border: 'none',
                                    fontWeight: '700'
                                }}
                            >
                                Update Wallet
                            </button>
                        </div>
                    </div>
                </div>

                <div className="personal-info-section">
                    <h3 style={{ marginBottom: '1.5rem', color: '#FFD200' }}>Personal Information</h3>
                    <div className="personal-info-grid">
                        {infoFields.map((field, idx) => (
                            <div key={idx} className="info-field-box">
                                <label>
                                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                                        {field.icon} {field.label}
                                    </span>
                                </label>
                                <p>{field.value}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="referral-link-section">
                    <h3 style={{ marginBottom: '0.5rem', color: '#FFD200' }}>Referral Link</h3>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Share your link to grow your network and earn more.</p>
                    <div className="link-box">
                        <div className="link-input-like">https://www.rextoken.in/register?ref=ABU1101</div>
                        <button className="btn-primary shimmer-btn" style={{ whiteSpace: 'nowrap' }} onClick={copyReferralLink}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <Copy size={18} />
                                {copied ? 'Copied!' : 'Copy Link'}
                            </div>
                        </button>
                    </div>
                </div>

                <div className="security-actions-grid">
                    <div className="security-card">
                        <KeyRound size={32} style={{ color: '#FFD200', marginBottom: '1rem' }} />
                        <h4 style={{ marginBottom: '1rem' }}>Security Settings</h4>
                        <button
                            className="btn-primary"
                            style={{ width: '100%', background: 'rgba(255, 210, 0, 0.1)', color: '#FFD200', border: '1px solid #FFD200' }}
                            onClick={() => setShowPasswordModal(true)}
                        >
                            Change Password
                        </button>
                    </div>
                    <div className="security-card">
                        <ShieldCheck size={32} style={{ color: '#00E5FF', marginBottom: '1rem' }} />
                        <h4 style={{ marginBottom: '1rem' }}>Two-Factor Auth</h4>
                        <button
                            className="btn-primary"
                            style={{ width: '100%', background: 'rgba(0, 229, 255, 0.1)', color: '#00E5FF', border: '1px solid #00E5FF' }}
                        >
                            Enable 2FA
                        </button>
                    </div>
                </div>
            </motion.div>

            {/* Password Change Modal */}
            <AnimatePresence>
                {showPasswordModal && (
                    <div className="modal-overlay" onClick={() => setShowPasswordModal(false)}>
                        <motion.div
                            className="modal-content"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                                <h2>Change Password</h2>
                                <X size={20} style={{ cursor: 'pointer', color: 'var(--text-secondary)' }} onClick={() => setShowPasswordModal(false)} />
                            </div>

                            <div className="modal-input-group">
                                <label>Current Password</label>
                                <input type="password" placeholder="••••••••" className="modal-input" />
                            </div>

                            <div className="modal-input-group">
                                <label>New Password</label>
                                <input type="password" placeholder="••••••••" className="modal-input" />
                            </div>

                            <div className="modal-input-group">
                                <label>Confirm New Password</label>
                                <input type="password" placeholder="••••••••" className="modal-input" />
                            </div>

                            <div className="modal-footer">
                                <button
                                    className="btn-primary shimmer-btn"
                                    style={{ flex: 1 }}
                                    onClick={() => setShowPasswordModal(false)}
                                >
                                    Confirm Change
                                </button>
                                <button
                                    className="btn-outline"
                                    style={{ flex: 1, borderColor: '#334155', color: 'white' }}
                                    onClick={() => setShowPasswordModal(false)}
                                >
                                    Cancel
                                </button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Profile;
