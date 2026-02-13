import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Lock, Zap, ArrowRight, Eye, EyeOff } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import './Auth.css';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        // Simulate login
        navigate('/dashboard');
    };

    return (
        <div className="auth-wrapper">
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
                    <p>Welcome back! Securely login to your account.</p>
                </div>

                <form onSubmit={handleLogin}>
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
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                            <label style={{ marginBottom: 0 }}>Password</label>
                            <Link to="#" className="auth-link" style={{ fontSize: '0.8rem', fontWeight: 500 }}>Forgot Password?</Link>
                        </div>
                        <div className="auth-input-wrapper">
                            <input
                                type={showPassword ? "text" : "password"}
                                className="auth-input"
                                placeholder="••••••••"
                                required
                            />
                            <Lock className="auth-input-icon" size={18} />
                            <button
                                type="button"
                                className="password-toggle"
                                onClick={() => setShowPassword(!showPassword)}
                                style={{
                                    position: 'absolute',
                                    right: '16px',
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    background: 'none',
                                    border: 'none',
                                    color: 'var(--text-secondary)',
                                    cursor: 'pointer'
                                }}
                            >
                                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                            </button>
                        </div>
                    </div>

                    <button type="submit" className="btn-primary auth-btn shimmer-btn">
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                            Login Now
                            <ArrowRight size={18} />
                        </div>
                    </button>
                </form>

                <div className="auth-footer">
                    Don't have an account?
                    <Link to="/register" className="auth-link">Sign Up Here</Link>
                </div>
            </motion.div>
        </div>
    );
};

export default Login;
