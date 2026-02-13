import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    ArrowRight,
    Upload,
    Download,
    Search,
    Wallet,
    FileText,
    AlertCircle,
    ExternalLink,
    ChevronRight
} from 'lucide-react';
import './Investments.css';

const Investments = () => {
    const [amount, setAmount] = useState('');
    const [txId, setTxId] = useState('');
    const [sponsorId, setSponsorId] = useState('Please connect wallet first');

    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <div className="investments-container">
            <motion.div
                className="page-header"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1>Investment <span className="gold-glow-text">Plans</span></h1>
                <p>Submit your investment request and start earning passive ROI.</p>
            </motion.div>

            <motion.div
                className="investment-card"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <div className="card-header">
                    <h2 className="card-title">Investment Request</h2>
                    <p className="card-subtitle">Fill the form below to make an investment</p>
                </div>

                <form className="investment-form" onSubmit={(e) => e.preventDefault()}>
                    <div className="form-grid">
                        <motion.div className="form-group" variants={itemVariants}>
                            <label>Investment Amount (₹)</label>
                            <div className="input-wrapper">
                                <input
                                    type="number"
                                    className="input-field"
                                    placeholder="Enter investment amount (Min: ₹500)"
                                    value={amount}
                                    onChange={(e) => setAmount(e.target.value)}
                                />
                            </div>
                            <p className="input-helper">Minimum investment amount: ₹500</p>
                        </motion.div>

                        <motion.div className="form-group" variants={itemVariants}>
                            <label>Transaction ID</label>
                            <div className="input-wrapper">
                                <input
                                    type="text"
                                    className="input-field"
                                    placeholder="Enter your transaction ID"
                                    value={txId}
                                    onChange={(e) => setTxId(e.target.value)}
                                />
                            </div>
                        </motion.div>

                        <motion.div className="form-group" variants={itemVariants}>
                            <label>Payment Slip</label>
                            <div className="file-upload-wrapper">
                                <input type="file" id="file-upload" className="file-input-custom" />
                                <label htmlFor="file-upload" className="file-label">
                                    <Upload size={18} className="gold-glow-text" />
                                    <span>Choose File (No file chosen)</span>
                                </label>
                            </div>
                            <p className="input-helper">Upload your payment receipt/screenshot</p>
                        </motion.div>

                        <motion.div className="form-group" variants={itemVariants}>
                            <label>Sponsor ID (Referrer's Wallet Address)</label>
                            <div className="input-wrapper">
                                <input
                                    type="text"
                                    className="input-field"
                                    style={{ background: 'rgba(255,255,255,0.01)', cursor: 'not-allowed' }}
                                    value={sponsorId}
                                    readOnly
                                />
                            </div>
                            <p className="input-helper">Your sponsor's wallet address (saved during signup)</p>
                        </motion.div>
                    </div>

                    <motion.div className="submit-container" variants={itemVariants}>
                        <button className="btn-primary shimmer-btn submit-btn">
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                                Submit Investment Request
                                <ArrowRight size={20} />
                            </div>
                        </button>
                        <p style={{ textAlign: 'center', marginTop: '1.5rem', color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
                            <AlertCircle size={14} style={{ verticalAlign: 'middle', marginRight: '6px' }} />
                            Note: Your investment request will be processed within 24 hours after verification
                        </p>
                    </motion.div>
                </form>
            </motion.div>

            {/* History Section Redesign */}
            <motion.section
                className="history-section"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
            >
                <div className="history-header">
                    <h2>Investment <span className="gold-glow-text">History</span></h2>
                    <motion.button
                        className="export-btn"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Download size={18} />
                        Export CSV
                    </motion.button>
                </div>

                <div className="table-container">
                    <div style={{ overflowX: 'auto' }}>
                        <table>
                            <thead>
                                <tr>
                                    <th>Amount</th>
                                    <th>Purchase Date</th>
                                    <th>Transaction ID</th>
                                    <th>Status</th>
                                    <th>Approved Date</th>
                                    <th>Invoice</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* Rows will appear here */}
                            </tbody>
                        </table>
                    </div>

                    <motion.div
                        className="empty-state"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                    >
                        <div className="empty-icon-wrapper">
                            <motion.div
                                animate={{ rotate: [0, 360] }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                style={{ position: 'absolute', inset: 0, border: '1px dashed rgba(255, 210, 0, 0.2)', borderRadius: '50%' }}
                            />
                            <FileText size={42} className="gold-glow-text" style={{ opacity: 0.5 }} />
                        </div>
                        <h3>No Investment History</h3>
                        <p>Your investment records are waiting for your first move. Make an investment above to start your ROI journey today!</p>
                        <motion.button
                            className="btn-primary shimmer-btn explore-btn"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Explore Our Plans
                        </motion.button>
                    </motion.div>
                </div>
            </motion.section>
        </div>
    );
};

export default Investments;
