import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Users,
    User,
    Mail,
    Briefcase,
    DollarSign,
    IdCard,
    Search,
    Filter,
    ChevronRight,
    TrendingUp,
    Activity,
    Layers
} from 'lucide-react';
import './ReferralNetwork.css';

const ReferralNetwork = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const levels = [
        { level: 1, members: 1, business: '₹0', income: '0.00', percentage: 5, performance: 10, color: '#FFD200' },
        { level: 2, members: 0, business: '₹0', income: '0.00', percentage: 2, performance: 0, color: '#00E5FF' },
        { level: 3, members: 0, business: '₹0', income: '0.00', percentage: 1, performance: 0, color: '#FFD200' },
        { level: 4, members: 0, business: '₹0', income: '0.00', percentage: 1, performance: 0, color: '#00E5FF' },
        { level: 5, members: 0, business: '₹0', income: '0.00', percentage: 1, performance: 0, color: '#FFD200' },
        { level: 6, members: 0, business: '₹0', income: '0.00', percentage: 1, performance: 0, color: '#00E5FF' },
        { level: 7, members: 0, business: '₹0', income: '0.00', percentage: 7.5, performance: 0, color: '#FFD200' },
        { level: 8, members: 0, business: '₹0', income: '0.00', percentage: 5, performance: 0, color: '#00E5FF' },
        { level: 9, members: 0, business: '₹0', income: '0.00', percentage: 2.5, performance: 0, color: '#FFD200' },
        { level: 10, members: 0, business: '₹0', income: '0.00', percentage: 2.5, performance: 0, color: '#00E5FF' },
    ];

    const teamMembers = [
        {
            id: 'A',
            name: 'Abuzar Munshi',
            email: 'abuzarmunshi@gmail.com',
            address: '0x0000...0000',
            level: 1,
            joinDate: '30 Dec 2025',
            investment: '₹0',
            income: '0.00',
            percentage: 5,
            status: 'active'
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <div className="referral-network-container">
            <motion.div
                className="network-header"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
            >
                <h1>Referral <span className="gold-glow-text">Network</span></h1>
                <p>Manage and track your referral network growth. View all levels of your downline team and their performance.</p>
            </motion.div>

            {/* Profile Info Card */}
            <motion.div
                className="profile-info-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
            >
                <div className="section-label">
                    <h2>Your Profile Information</h2>
                    <p>Complete overview of your referral network account</p>
                </div>

                <div className="profile-stats-row">
                    <div className="p-stat-item">
                        <div className="p-stat-header"><div className="p-stat-icon"><IdCard size={14} /></div> User ID</div>
                        <div className="p-stat-value">3A21FC09</div>
                    </div>
                    <div className="p-stat-item">
                        <div className="p-stat-header"><div className="p-stat-icon"><User size={14} /></div> Full Name</div>
                        <div className="p-stat-value">Abuzar Munshi</div>
                    </div>
                    <div className="p-stat-item">
                        <div className="p-stat-header"><div className="p-stat-icon"><Mail size={14} /></div> Email Address</div>
                        <div className="p-stat-value">zarwebcoders@g...</div>
                    </div>
                    <div className="p-stat-item">
                        <div className="p-stat-header"><div className="p-stat-icon"><Users size={14} /></div> Total Network</div>
                        <div className="p-stat-value">1</div>
                    </div>
                    <div className="p-stat-item">
                        <div className="p-stat-header"><div className="p-stat-icon"><Briefcase size={14} /></div> Overall Business</div>
                        <div className="p-stat-value">₹0</div>
                    </div>
                    <div className="p-stat-item">
                        <div className="p-stat-header"><div className="p-stat-icon" style={{ color: '#00E5FF' }}><DollarSign size={14} /></div> Total Level Income</div>
                        <div className="p-stat-value gold-glow-text">₹0.00</div>
                    </div>
                </div>
            </motion.div>

            {/* Performance Section */}
            <div className="performance-section-header">
                <div className="section-label">
                    <h2>Your Network Performance</h2>
                    <p>Detailed breakdown of your network by levels</p>
                </div>
                <div className="active-levels-badge">
                    <Layers size={16} />
                    Active Levels: 1
                </div>
            </div>

            <motion.div
                className="network-summary-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
            >
                <div className="summary-table-header">
                    <span>Level</span>
                    <span>Members</span>
                    <span>Business Volume</span>
                    <span>Level Income (%)</span>
                    <span>Performance</span>
                </div>

                <div className="levels-list">
                    {levels.map((lvl) => (
                        <div key={lvl.level} className="level-row">
                            <div className="level-info">
                                <div className="level-badge" style={{
                                    background: `linear-gradient(135deg, ${lvl.color} 0%, ${lvl.color}CC 100%)`,
                                    boxShadow: `0 4px 15px ${lvl.color}44`
                                }}>
                                    L{lvl.level}
                                </div>
                                <div className="level-details">
                                    <h4>Level {lvl.level}</h4>
                                    <p>{lvl.members} members</p>
                                </div>
                            </div>

                            <div>
                                <span style={{ fontWeight: 700 }}>{lvl.members}</span>
                                <span style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', marginLeft: '5px' }}>members</span>
                            </div>

                            <div className="business-vol">
                                <span style={{ fontWeight: 700 }}>{lvl.business}</span>
                                {lvl.members > 0 && <span style={{ color: '#10B981', fontSize: '0.7rem' }}>● Active level</span>}
                            </div>

                            <div className="income-info">
                                <span style={{ fontWeight: 700, color: '#00E5FF' }}>₹{lvl.income}</span>
                                <span style={{ color: '#FFD200', fontSize: '0.7rem' }}>{lvl.percentage}% of business</span>
                            </div>

                            <div className="performance-bar-wraper">
                                <div className="perf-label">
                                    <span>Activity</span>
                                    <span style={{ fontWeight: 700 }}>{lvl.performance}%</span>
                                </div>
                                <div className="perf-bar-bg">
                                    <motion.div
                                        className="perf-bar-fill"
                                        initial={{ width: 0 }}
                                        animate={{ width: `${lvl.performance}%` }}
                                        style={{ background: lvl.color }}
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="summary-footer-stats">
                    <div className="footer-stat">
                        <h5>Total Members</h5>
                        <p>1</p>
                    </div>
                    <div className="footer-stat">
                        <h5>Total Business Volume</h5>
                        <p>₹0</p>
                    </div>
                    <div className="footer-stat">
                        <h5>Total Level Income</h5>
                        <p className="gold-glow-text">₹0.00</p>
                    </div>
                </div>
            </motion.div>

            {/* Team Members List */}
            <div className="section-label" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <div>
                    <h2>Team Members</h2>
                    <p>Complete list of your downline network</p>
                </div>
                <div className="active-levels-badge" style={{ background: 'rgba(255, 210, 0, 0.1)' }}>
                    Total: 1
                </div>
            </div>

            <motion.div
                className="team-table-card"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <div className="table-controls">
                    <div className="search-input-wrapper">
                        <Search className="search-icon" size={18} />
                        <input
                            type="text"
                            placeholder="Search by name, email, or wallet..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <select className="filter-select">
                        <option>All Levels</option>
                        <option>Level 1</option>
                        <option>Level 2</option>
                    </select>
                </div>

                <div style={{ overflowX: 'auto' }}>
                    <table className="team-list-table">
                        <thead>
                            <tr>
                                <th>User</th>
                                <th>Level</th>
                                <th>Join Date</th>
                                <th>Investment</th>
                                <th>Your Income</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {teamMembers.map((member) => (
                                <tr key={member.name}>
                                    <td>
                                        <div className="user-cell">
                                            <div className="user-avatar">{member.id}</div>
                                            <div className="user-meta">
                                                <h5>{member.name}</h5>
                                                <p>{member.email}</p>
                                                <p style={{ opacity: 0.5 }}>{member.address}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <span style={{ color: '#FFD200', fontWeight: 600 }}>Level {member.level}</span>
                                    </td>
                                    <td>{member.joinDate}</td>
                                    <td>{member.investment}</td>
                                    <td>
                                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                                            <span style={{ fontWeight: 700, color: '#00E5FF' }}>₹{member.income}</span>
                                            <span style={{ fontSize: '0.7rem', color: '#FFD200' }}>{member.percentage}% of {member.investment}</span>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="status-indicator status-active">
                                            <Activity size={12} />
                                            {member.status}
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </motion.div>
        </div>
    );
};

export default ReferralNetwork;
