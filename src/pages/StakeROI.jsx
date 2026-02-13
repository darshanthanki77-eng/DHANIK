import React from 'react';
import { motion } from 'framer-motion';
import {
    History,
    Wallet,
    PlusCircle,
    RefreshCcw,
    Clock,
    ShieldCheck,
    TrendingUp,
    Lock
} from 'lucide-react';
import './StakeROI.css';

const StakeROI = () => {
    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 15 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <div className="stake-roi-container">
            <motion.div
                className="stake-header"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1>Stake <span className="gold-glow-text">ROI</span></h1>
                <p>Stake your tokens to earn high ROI rewards and boost your earnings.</p>
            </motion.div>

            <motion.div
                className="stake-stats-row"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.div className="stake-stat-card" variants={itemVariants}>
                    <span className="stat-label">Total Staked</span>
                    <div className="stat-value">0.00 <span className="gold-glow-text">DH</span></div>
                </motion.div>

                <motion.div className="stake-stat-card" variants={itemVariants}>
                    <span className="stat-label">Pending ROI</span>
                    <div className="stat-value" style={{ color: '#00E5FF' }}>0.0000 <span className="gold-glow-text">DH</span></div>
                </motion.div>

                <motion.div className="stake-stat-card" variants={itemVariants}>
                    <span className="stat-label">Status</span>
                    <div className="status-badge">
                        <div className="pulse-dot" style={{ background: '#9CA3AF', boxShadow: 'none', animation: 'none' }}></div>
                        Inactive
                    </div>
                </motion.div>
            </motion.div>

            <div className="staking-grid">
                <motion.div
                    className="new-stake-card"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    <div className="card-icon" style={{ color: '#FFD200', marginBottom: '1.5rem' }}>
                        <PlusCircle size={48} />
                    </div>
                    <h2>New Stake</h2>
                    <p className="connect-prompt">Please connect your wallet to stake tokens and start earning rewards.</p>
                    <button className="btn-primary shimmer-btn" style={{ padding: '14px 32px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <Wallet size={20} />
                            Connect Wallet
                        </div>
                    </button>
                </motion.div>

                <motion.div
                    className="history-card"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                >
                    <div className="history-header">
                        <h3><Clock size={20} className="gold-glow-text" /> Staking History</h3>
                        <button className="refresh-btn">
                            <RefreshCcw size={18} />
                        </button>
                    </div>

                    <div className="staking-table-wrapper">
                        <table className="history-table">
                            <thead>
                                <tr>
                                    <th>Staked Amount</th>
                                    <th>Start Date</th>
                                    <th>Unlock Date</th>
                                    <th>Lock Period</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                        </table>
                        <div className="empty-history">
                            <div style={{ opacity: 0.1, marginBottom: '1rem' }}>
                                <History size={60} />
                            </div>
                            <p>No staking history found</p>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Bonus Info Section */}
            <motion.div
                style={{
                    marginTop: '2rem',
                    padding: '1.5rem',
                    background: 'rgba(255, 210, 0, 0.03)',
                    border: '1px solid rgba(255, 210, 0, 0.1)',
                    borderRadius: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '15px'
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
            >
                <div style={{ color: '#FFD200' }}>
                    <ShieldCheck size={28} />
                </div>
                <div>
                    <h4 style={{ color: '#FFD200', marginBottom: '4px' }}>Secure Staking Mechanism</h4>
                    <p style={{ fontSize: '0.85rem', color: '#9CA3AF' }}>Your assets are protected by our advanced smart contract security. Withdrawals are subject to the lock period selected during staking.</p>
                </div>
            </motion.div>
        </div>
    );
};

export default StakeROI;
