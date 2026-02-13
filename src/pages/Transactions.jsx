import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    History,
    Search,
    ArrowUpRight,
    ArrowDownLeft,
    RefreshCcw,
    DollarSign,
    CheckCircle2,
    Clock,
    ExternalLink
} from 'lucide-react';
import './Transactions.css';

const Transactions = () => {
    const [activeTab, setActiveTab] = useState('All');
    const [searchTerm, setSearchTerm] = useState('');

    const tabs = ['All', 'Withdrawal', 'Investment', 'Income'];

    return (
        <div className="transactions-container">
            <motion.div
                className="transactions-header"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
            >
                <h1>Transaction <span className="gold-glow-text">History</span></h1>
                <p>View and track all your financial activities with real-time status updates.</p>
            </motion.div>

            <motion.div
                className="filter-bar"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
            >
                <div className="filter-tabs">
                    {tabs.map(tab => (
                        <div
                            key={tab}
                            className={`filter-tab ${activeTab === tab ? 'active' : ''}`}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab}
                        </div>
                    ))}
                </div>

                <div className="search-container">
                    <Search className="search-icon" size={18} />
                    <input
                        type="text"
                        placeholder="Search by ID or description..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </motion.div>

            <motion.div
                className="transactions-table-card"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
            >
                <div style={{ overflowX: 'auto' }}>
                    <table className="transactions-table">
                        <thead>
                            <tr>
                                <th>Type</th>
                                <th>Description</th>
                                <th>Amount</th>
                                <th>Date</th>
                                <th>Status</th>
                                <th>Hash / ID</th>
                            </tr>
                        </thead>
                    </table>

                    <div className="no-transactions">
                        <div style={{
                            width: '80px',
                            height: '80px',
                            borderRadius: '50%',
                            background: 'rgba(255, 255, 255, 0.02)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            margin: '0 auto 1.5rem',
                            color: 'rgba(255, 210, 0, 0.2)'
                        }}>
                            <History size={40} />
                        </div>
                        <h3>No Transactions Found</h3>
                        <p>No transactions found matching your criteria at this moment.</p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Transactions;
