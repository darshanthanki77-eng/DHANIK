import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Wallet,
    AlertTriangle,
    History,
    ArrowUpRight,
    Users,
    CreditCard,
    DollarSign,
    Activity,
    Lock,
    Building2,
    Zap,
    CheckCircle2,
    BarChart3,
    TrendingUp,
    ShieldAlert
} from 'lucide-react';
import './Withdrawal.css';

const Withdrawal = () => {
    const [activeSource, setActiveSource] = useState('Total Income');
    const [amount, setAmount] = useState('');

    const stats = [
        { title: 'Monthly ROI', subtitle: 'Return on Investment', value: 'DH 0', icon: <TrendingUp size={18} />, color: '#FFD200', progress: 40 },
        { title: 'Level Income ROI', subtitle: 'Level Earnings', value: '₹0', icon: <Users size={18} />, color: '#00E5FF', progress: 30 },
        { title: 'Normal Withdrawal', subtitle: 'Available Balance', value: 'DH 0', icon: <CreditCard size={18} />, color: '#3B82F6', progress: 20 },
        { title: 'SOS Withdrawal', subtitle: 'Emergency Fund', value: 'DH 0', icon: <ShieldAlert size={18} />, color: '#EC4899', progress: 10 },
        { title: 'Total Withdrawal', subtitle: 'Lifetime Withdrawn', value: '₹0', icon: <CheckCircle2 size={18} />, color: '#8B5CF6', progress: 60 },
        { title: 'Total Income', subtitle: 'Total Earnings', value: 'DH 0', icon: <DollarSign size={18} />, color: '#FCD34D', progress: 50 },
        { title: 'Stake ROI', subtitle: 'Staking Returns', value: 'DH 0', icon: <Zap size={18} />, color: '#10B981', progress: 35 },
        { title: 'Stake Token', subtitle: 'Staked Balance', value: 'DH 0', icon: <Lock size={18} />, color: '#F87171', progress: 15 },
    ];

    return (
        <div className="withdrawal-container">
            <motion.div
                className="withdrawal-header"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
            >
                <div>
                    <h1>Withdrawal <span className="gold-glow-text">Center</span></h1>
                    <p className="header-welcome">Welcome! Manage your earnings and withdraw funds securely from your available wallets.</p>
                </div>
                <button className="btn-primary shimmer-btn" style={{ padding: '12px 24px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Wallet size={18} />
                        Connect Wallet
                    </div>
                </button>
            </motion.div>

            <motion.div
                className="warning-alert"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
            >
                <div className="warning-icon"><AlertTriangle size={24} /></div>
                <div className="warning-text">
                    <h4>Wallet Not Connected</h4>
                    <p>Please connect your MetaMask wallet to view your withdrawal balances and transaction data from the blockchain.</p>
                </div>
            </motion.div>

            <div className="withdrawal-stats-grid">
                {stats.map((stat, idx) => (
                    <motion.div
                        key={idx}
                        className="withdraw-stat-card"
                        style={{ '--glow-color': stat.color }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 + idx * 0.05 }}
                    >
                        <div className="stat-card-header">
                            <div>
                                <h3>{stat.title}</h3>
                                <p>{stat.subtitle}</p>
                            </div>
                            <div className="stat-card-icon" style={{ color: stat.color }}>
                                {stat.icon}
                            </div>
                        </div>
                        <div className="withdraw-stat-value">{stat.value}</div>
                        <div className="stat-progress-bar">
                            <motion.div
                                className="stat-progress-fill"
                                initial={{ width: 0 }}
                                animate={{ width: `${stat.progress}%` }}
                                style={{ background: stat.color }}
                            />
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="withdrawal-main-grid">
                <motion.div
                    className="request-card"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    <h2 className="section-title"><ArrowUpRight size={22} className="gold-glow-text" /> Initial Withdrawal Request</h2>

                    <div className="form-group">
                        <label>Select Source</label>
                        <div className="source-selection">
                            <div
                                className={`source-card ${activeSource === 'Total Income' ? 'active' : ''}`}
                                onClick={() => setActiveSource('Total Income')}
                            >
                                <Zap size={20} className={activeSource === 'Total Income' ? 'gold-glow-text' : ''} />
                                <h4>Total Income</h4>
                                <p>DH 0</p>
                            </div>
                            <div
                                className={`source-card ${activeSource === 'SOS' ? 'active' : ''}`}
                                onClick={() => setActiveSource('SOS')}
                            >
                                <Lock size={20} className={activeSource === 'SOS' ? 'gold-glow-text' : ''} />
                                <h4>SOS Withdrawal</h4>
                                <p>DH 0</p>
                            </div>
                        </div>
                    </div>

                    <div className="form-group">
                        <label>
                            <span>Withdrawal Amount (DH)</span>
                            <span style={{ color: '#A855F7', fontWeight: 'bold' }}>MAX: 0</span>
                        </label>
                        <div className="input-container">
                            <input
                                type="text"
                                className="withdraw-input"
                                placeholder="DH 0.00"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                            />
                            <button className="max-btn">MAX</button>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px', fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                            <span>Minimum: DH 100</span>
                            <span>Available: DH 0</span>
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Withdrawal Method</label>
                        <button className="method-btn">
                            <Building2 size={20} className="gold-glow-text" />
                            Bank Transfer
                        </button>
                    </div>

                    <div className="form-group">
                        <label>Account Number</label>
                        <input type="text" className="withdraw-input" placeholder="Enter account number" />
                        <p style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', marginTop: '8px' }}>
                            Please provide complete bank details for withdrawal to a different account.
                        </p>
                    </div>

                    <button className="btn-primary shimmer-btn" style={{ width: '100%', padding: '16px' }}>
                        Submit Withdrawal Request
                    </button>

                    <div className="fee-note-box">
                        <Activity size={20} style={{ color: '#FFD200' }} />
                        <p style={{ fontSize: '0.8rem', color: '#9CA3AF' }}>
                            Withdrawal requests are processed within 24-48 hours. A 5% processing fee applies for income withdrawal.
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    className="history-card"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                >
                    <h2 className="section-title"><History size={22} className="gold-glow-text" /> Withdrawal History</h2>

                    <div className="table-responsive">
                        <table className="withdrawal-history-table">
                            <thead>
                                <tr>
                                    <th>Source</th>
                                    <th>Amount</th>
                                    <th>Date</th>
                                    <th>Method</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                        </table>
                        <div className="empty-history">
                            <div style={{ padding: '2rem', background: 'rgba(255, 255, 255, 0.03)', borderRadius: '50%', width: 'fit-content', margin: '0 auto 1.5rem' }}>
                                <DollarSign size={40} className="gold-glow-text" />
                            </div>
                            <h3>No Withdrawal History</h3>
                            <p>Your withdrawal requests will appear here</p>
                        </div>
                    </div>
                </motion.div>
            </div>

            <div className="withdrawal-footer-grid">
                <motion.div className="footer-stat-card" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}>
                    <div className="footer-stat-info">
                        <h4>Total Withdrawn</h4>
                        <p>₹0</p>
                    </div>
                    <CheckCircle2 size={32} style={{ opacity: 0.1 }} />
                </motion.div>

                <motion.div className="footer-stat-card" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}>
                    <div className="footer-stat-info">
                        <h4>Pending Withdrawals</h4>
                        <p>₹0</p>
                    </div>
                    <Activity size={32} style={{ opacity: 0.1 }} />
                </motion.div>

                <motion.div className="footer-stat-card" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }}>
                    <div className="footer-stat-info">
                        <h4>Withdrawal Fee</h4>
                        <p>5%</p>
                    </div>
                    <span style={{ fontSize: '1.8rem', fontWeight: '800', color: '#00E5FF' }}>5%</span>
                </motion.div>
            </div>
        </div>
    );
};

export default Withdrawal;
