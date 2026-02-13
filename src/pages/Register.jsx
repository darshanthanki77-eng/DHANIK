import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Lock, Zap, User, ArrowRight, ShieldCheck, Users } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import './Auth.css';

const Register = () => {
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        // Simulate registration
        navigate('/dashboard');
    };

    return (
        <div className="auth-wrapper" style={{ padding: '4rem 1rem' }}>
            <motion.div
                className="auth-card"
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
            >
                <div className="auth-header">
                    <div className="auth-logo">
                        <div className="auth-logo-icon">
                            <Zap size={24} fill="#05090C" />
                        </div>
                        <span className="auth-logo-text gold-glow-text">DHANIK</span>
                    </div>
                    <p>Create your account and start your financial journey.</p>
                </div>

                <form onSubmit={handleRegister}>
                    <div className="auth-form-group">
                        <label>Full Name</label>
                        <div className="auth-input-wrapper">
                            <input
                                type="text"
                                className="auth-input"
                                placeholder="John Doe"
                                required
                            />
                            <User className="auth-input-icon" size={18} />
                        </div>
                    </div>

                    <div className="auth-form-group">
                        <label>Email Address</label>
                        <div className="auth-input-wrapper">
                            <input
                                type="email"
                                className="auth-input"
                                placeholder="your@email.com"
                                required
                            />
                            <Mail className="auth-input-icon" size={18} />
                        </div>
                    </div>

                    <div className="auth-form-group">
                        <label>Password</label>
                        <div className="auth-input-wrapper">
                            <input
                                type="password"
                                className="auth-input"
                                placeholder="••••••••"
                                required
                            />
                            <Lock className="auth-input-icon" size={18} />
                        </div>
                    </div>

                    <div className="auth-form-group">
                        <label>Confirm Password</label>
                        <div className="auth-input-wrapper">
                            <input
                                type="password"
                                className="auth-input"
                                placeholder="••••••••"
                                required
                            />
                            <ShieldCheck className="auth-input-icon" size={18} />
                        </div>
                    </div>

                    <div className="auth-form-group">
                        <label>Referral Code (Optional)</label>
                        <div className="auth-input-wrapper">
                            <input
                                type="text"
                                className="auth-input"
                                placeholder="Enter referral or sponsor code"
                            />
                            <Users className="auth-input-icon" size={18} />
                        </div>
                        <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', marginTop: '8px' }}>
                            Leave empty to use system default wallet address (Admin).
                        </p>
                    </div>

                    <button type="submit" className="btn-primary auth-btn shimmer-btn">
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                            Create Account
                            <ArrowRight size={18} />
                        </div>
                    </button>
                </form>

                <div className="auth-footer">
                    Already have an account?
                    <Link to="/login" className="auth-link">Login Here</Link>
                </div>
            </motion.div>
        </div>
    );
};

export default Register;
