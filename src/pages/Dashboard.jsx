import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    LayoutDashboard,
    TrendingUp,
    Coins,
    UserCheck,
    ArrowUpRight,
    Users,
    History,
    User,
    Wallet,
    LogOut,
    Copy,
    Zap,
    ShieldCheck,
    Globe,
    BarChart3,
    ChevronRight,
    Activity,
    Menu,
    X
} from 'lucide-react';
import './Dashboard.css';
import Investments from './Investments';
import StakeROI from './StakeROI';
import KYC from './KYC';
import Withdrawal from './Withdrawal';
import ReferralNetwork from './ReferralNetwork';
import Transactions from './Transactions';
import Profile from './Profile';

const Dashboard = () => {
    const [activeTab, setActiveTab] = useState('Dashboard');
    const [scrolled, setScrolled] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(window.innerWidth > 1024);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 1024) {
                setSidebarOpen(true);
            } else {
                setSidebarOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
    };

    const menuItems = [
        { name: 'Dashboard', icon: <LayoutDashboard size={20} /> },
        { name: 'Investments', icon: <TrendingUp size={20} /> },
        { name: 'Stake ROI', icon: <Coins size={20} /> },
        { name: 'KYC Verification', icon: <UserCheck size={20} /> },
        { name: 'Withdrawal', icon: <ArrowUpRight size={20} /> },
        { name: 'Referral Network', icon: <Users size={20} /> },
        { name: 'Transactions', icon: <History size={20} /> },
        { name: 'Profile', icon: <User size={20} /> },
    ];

    return (
        <div className="dashboard-container">
            {/* Sidebar */}
            <motion.aside
                className={`sidebar ${sidebarOpen ? 'open' : 'mini'}`}
                initial={false}
                animate={{
                    width: (window.innerWidth <= 1024) ? 280 : (sidebarOpen ? 280 : 80),
                    x: (window.innerWidth <= 1024 && !sidebarOpen) ? -280 : 0
                }}
                transition={{ type: 'spring', damping: 30, stiffness: 200, mass: 0.8 }}
            >
                <div className="sidebar-toggle-btn" onClick={() => setSidebarOpen(!sidebarOpen)}>
                    {sidebarOpen ? <X size={20} /> : <ChevronRight size={20} />}
                </div>
                <div className="logo-section">
                    <div className="logo-icon">
                        <Zap size={24} fill="#05090C" />
                    </div>
                    <span className="logo-text gold-glow-text">DHANIK</span>
                </div>

                <nav className="nav-menu">
                    {menuItems.map((item) => (
                        <motion.div
                            key={item.name}
                            className={`nav-item ${activeTab === item.name ? 'active' : ''}`}
                            onClick={() => {
                                setActiveTab(item.name);
                                if (window.innerWidth <= 1024) setSidebarOpen(false);
                            }}
                            whileHover={{ x: 5 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span className="nav-icon">{item.icon}</span>
                            <span className="nav-name">{item.name}</span>
                            {activeTab === item.name && (
                                <motion.div
                                    className="active-indicator"
                                    layoutId="active-nav"
                                    style={{
                                        position: 'absolute',
                                        right: 0,
                                        width: '4px',
                                        height: '20px',
                                        background: 'white',
                                        borderRadius: '4px 0 0 4px'
                                    }}
                                />
                            )}
                        </motion.div>
                    ))}
                </nav>

                <div className="sidebar-footer">
                    <div className="nav-item">
                        <span className="nav-icon"><LogOut size={20} /></span>
                        <span className="nav-name">Logout</span>
                    </div>
                </div>
            </motion.aside>

            <motion.main
                className={`main-content ${!sidebarOpen ? 'mini-sidebar' : ''}`}
                animate={{
                    marginLeft: (window.innerWidth <= 1024) ? 0 : (sidebarOpen ? 280 : 80)
                }}
                transition={{ type: 'spring', damping: 30, stiffness: 200, mass: 0.8 }}
            >
                {/* Mobile Hamburger (only shows on mobile when sidebar is closed) */}
                {(window.innerWidth <= 1024 && !sidebarOpen) && (
                    <motion.div
                        className="menu-toggle"
                        onClick={() => setSidebarOpen(true)}
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                    >
                        <Menu size={24} />
                    </motion.div>
                )}

                <AnimatePresence mode="wait">
                    {activeTab === 'Dashboard' ? (
                        <motion.div
                            key="dashboard"
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            exit={{ opacity: 0, y: -20 }}
                        >
                            {/* Header section */}
                            <motion.section className="hero-card" variants={itemVariants}>
                                <div className="hero-info">
                                    <motion.h1
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.3 }}
                                    >
                                        Welcome back, <span className="gold-glow-text">Dhanik User</span>
                                    </motion.h1>
                                    <p>Manage your crypto investments and track your earnings.</p>

                                    <div className="wallet-actions">
                                        <button className="btn-primary shimmer-btn">
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                                <Wallet size={18} />
                                                Wallet Connected
                                            </div>
                                        </button>
                                        <button className="btn-outline">Disconnect</button>
                                    </div>

                                    <div style={{ marginTop: '20px', position: 'relative', width: '300px' }}>
                                        <p style={{ fontSize: '0.8rem', color: '#9CA3AF', marginBottom: '8px' }}>Referral Link</p>
                                        <div style={{
                                            display: 'flex',
                                            background: 'rgba(255,255,255,0.05)',
                                            padding: '10px',
                                            borderRadius: '10px',
                                            border: '1px solid var(--card-border)'
                                        }}>
                                            <input
                                                type="text"
                                                readOnly
                                                value="dhanik.io/ref/User77"
                                                style={{
                                                    background: 'transparent',
                                                    border: 'none',
                                                    color: 'white',
                                                    width: '100%',
                                                    outline: 'none'
                                                }}
                                            />
                                            <Copy size={18} className="gold-glow-text" style={{ cursor: 'pointer' }} />
                                        </div>
                                    </div>
                                </div>

                                <div className="hero-balance">
                                    <div className="wallet-balance-card">
                                        <p style={{ color: '#9CA3AF', fontSize: '0.9rem', marginBottom: '8px' }}>Total Wallet Balance</p>
                                        <span className="balance-amount gold-glow-text">$ 14,250.60</span>
                                        <div style={{ display: 'flex', gap: '10px', marginTop: '15px', justifyContent: 'flex-end' }}>
                                            <button className="btn-primary shimmer-btn" style={{ padding: '8px 16px', fontSize: '0.9rem' }}>Connect Wallet</button>
                                            <button className="btn-outline" style={{ padding: '8px 12px', borderColor: 'var(--card-border)', color: 'white' }}>
                                                <Copy size={16} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </motion.section>

                            {/* Token Overview Cards */}
                            <div className="overview-grid">
                                {[
                                    { label: 'DHANIK Token Balance', value: '45,280 DH', icon: <Coins />, subValue: '≈ $2,340.50' },
                                    { label: 'Current Token Rate', value: '$0.0517', icon: <TrendingUp />, subValue: '+12.5% Monthly' },
                                    { label: 'Investment Phase', value: 'PHASE 3', icon: <Globe />, subValue: '85% Completed' }
                                ].map((stat, index) => (
                                    <motion.div
                                        key={index}
                                        className="stat-card"
                                        variants={itemVariants}
                                        whileHover={{ y: -10, rotate: index % 2 === 0 ? 1 : -1 }}
                                    >
                                        <div className="stat-icon">{stat.icon}</div>
                                        <p style={{ color: '#9CA3AF', fontSize: '0.9rem' }}>{stat.label}</p>
                                        <h3 style={{ fontSize: '1.8rem', margin: '10px 0' }} className="gold-glow-text">{stat.value}</h3>
                                        <p style={{ color: '#00E5FF', fontSize: '0.85rem' }}>{stat.subValue}</p>
                                    </motion.div>
                                ))}
                            </div>

                            <div className="dashboard-grid">
                                {/* Income Breakdown */}
                                <motion.div className="income-section" variants={itemVariants}>
                                    <h2 style={{ marginBottom: '1.5rem', fontSize: '1.5rem' }}>Income Breakdown</h2>
                                    <div className="income-grid">
                                        {[
                                            { label: 'ROI (Retun on Investment)', value: '$1,240.50', trend: '+5.2%' },
                                            { label: 'Yearly Bonus', value: '$500.00', trend: 'Fixed' },
                                            { label: 'Sponsor Income', value: '$2,850.20', trend: '+18.4%' },
                                            { label: 'Total Earnings', value: '$4,590.70', trend: 'All Time' }
                                        ].map((item, idx) => (
                                            <motion.div
                                                key={idx}
                                                className="income-card"
                                                whileHover={{ scale: 1.05 }}
                                            >
                                                <p style={{ color: '#9CA3AF', marginBottom: '10px' }}>{item.label}</p>
                                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                                                    <h3 style={{ fontSize: '1.5rem' }}>{item.value}</h3>
                                                    <span style={{ color: item.trend.includes('+') ? '#00E5FF' : '#F5C518', fontSize: '0.8rem' }}>{item.trend}</span>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </motion.div>

                                {/* Mining Center */}
                                <motion.div className="mining-card" variants={itemVariants}>
                                    <div className="mining-header">
                                        <h3>Mining Center</h3>
                                        <div className="status-badge">
                                            <span className="pulse-dot"></span>
                                            Active
                                        </div>
                                    </div>

                                    <div style={{ textAlign: 'center', position: 'relative', margin: '2rem 0' }}>
                                        <svg width="150" height="150" viewBox="0 0 100 100">
                                            <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="8" />
                                            <motion.circle
                                                cx="50" cy="50" r="45" fill="none" stroke="url(#goldGradient)" strokeWidth="8"
                                                strokeDasharray="283"
                                                initial={{ strokeDashoffset: 283 }}
                                                animate={{ strokeDashoffset: 283 - (283 * 0.998) }}
                                                transition={{ duration: 2, delay: 1 }}
                                                strokeLinecap="round"
                                            />
                                            <defs>
                                                <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                                    <stop offset="0%" stopColor="#FFD200" />
                                                    <stop offset="100%" stopColor="#FFAE00" />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                                            <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>99.8%</span>
                                            <p style={{ fontSize: '0.6rem', color: '#9CA3AF' }}>UPTIME</p>
                                        </div>
                                    </div>

                                    <div className="mining-details">
                                        <div style={{ display: 'flex', justifyContent: 'space-between', margin: '15px 0' }}>
                                            <span style={{ color: '#9CA3AF' }}>Monthly %</span>
                                            <span style={{ fontWeight: 'bold' }}>8.5%</span>
                                        </div>
                                        <div className="progress-container">
                                            <div className="progress-bar-bg">
                                                <motion.div
                                                    className="progress-bar-fill"
                                                    initial={{ width: '0%' }}
                                                    animate={{ width: '99.8%' }}
                                                    transition={{ duration: 1.5, delay: 0.5 }}
                                                ></motion.div>
                                            </div>
                                        </div>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
                                            <span style={{ color: '#9CA3AF' }}>Total Mining Income</span>
                                            <span className="gold-glow-text" style={{ fontWeight: 'bold' }}>$840.40</span>
                                        </div>

                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '2rem' }}>
                                            <button className="btn-primary shimmer-btn" style={{ width: '100%' }}>Claim Stake ROI</button>
                                            <button className="btn-outline" style={{ width: '100%', color: '#F5C518', borderColor: '#F5C518' }}>Claim ROI</button>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Referral Program */}
                            <motion.section className="referral-section" variants={itemVariants}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                                    <h2>Referral Program</h2>
                                    <button className="btn-primary shimmer-btn" style={{ padding: '8px 16px', fontSize: '0.8rem' }}>View All Network</button>
                                </div>

                                <div className="referral-stats">
                                    {[
                                        { label: 'Referral ID', value: 'DH-77821', icon: <User /> },
                                        { label: 'Sponsor', value: 'CryptoPro_01', icon: <ShieldCheck /> },
                                        { label: 'Direct Team', value: '42 Active', icon: <Users /> },
                                        { label: 'Level Income', value: '$5,240', icon: <BarChart3 /> },
                                        { label: 'Sponsor Income', value: '$1,120', icon: <Coins /> },
                                        { label: 'Total Earned', value: '$6,360', icon: <TrendingUp /> }
                                    ].map((stat, idx) => (
                                        <div key={idx} className="ref-stat-item">
                                            <div style={{
                                                width: '35px', height: '35px',
                                                borderRadius: '50%',
                                                background: 'rgba(245, 197, 24, 0.1)',
                                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                margin: '0 auto 10px',
                                                color: '#F5C518'
                                            }}>
                                                {stat.icon}
                                            </div>
                                            <p style={{ color: '#9CA3AF', fontSize: '0.75rem' }}>{stat.label}</p>
                                            <p style={{ fontWeight: 'bold', fontSize: '1rem' }}>{stat.value}</p>
                                        </div>
                                    ))}
                                </div>

                                <div style={{ marginTop: '2rem' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                                        <span style={{ fontSize: '0.9rem' }}>Network Progress (Level 7)</span>
                                        <span style={{ color: '#F5C518' }}>72%</span>
                                    </div>
                                    <div className="progress-bar-bg">
                                        <motion.div
                                            className="progress-bar-fill"
                                            initial={{ width: '0%' }}
                                            animate={{ width: '72%' }}
                                            transition={{ duration: 1 }}
                                        />
                                    </div>
                                </div>
                            </motion.section>
                        </motion.div>
                    ) : activeTab === 'Investments' ? (
                        <motion.div
                            key="investments"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Investments />
                        </motion.div>
                    ) : activeTab === 'Stake ROI' ? (
                        <motion.div
                            key="stake-roi"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.5 }}
                        >
                            <StakeROI />
                        </motion.div>
                    ) : activeTab === 'KYC Verification' ? (
                        <motion.div
                            key="kyc"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.5 }}
                        >
                            <KYC />
                        </motion.div>
                    ) : activeTab === 'Withdrawal' ? (
                        <motion.div
                            key="withdrawal"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Withdrawal />
                        </motion.div>
                    ) : activeTab === 'Referral Network' ? (
                        <motion.div
                            key="referral"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.5 }}
                        >
                            <ReferralNetwork />
                        </motion.div>
                    ) : activeTab === 'Transactions' ? (
                        <motion.div
                            key="transactions"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Transactions />
                        </motion.div>
                    ) : activeTab === 'Profile' ? (
                        <motion.div
                            key="profile"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Profile />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="other"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            style={{ padding: '2rem', textAlign: 'center' }}
                        >
                            <h2 className="gold-glow-text">{activeTab} Page</h2>
                            <p style={{ color: '#9CA3AF', marginTop: '1rem' }}>Coming Soon...</p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.main>

            {/* Overlay for mobile sidebar */}
            <AnimatePresence>
                {sidebarOpen && window.innerWidth <= 1024 && (
                    <motion.div
                        className="sidebar-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSidebarOpen(false)}
                    />
                )}
            </AnimatePresence>

            <style jsx>{`
        .pulse-dot {
          width: 8px;
          height: 8px;
          background: #00E5FF;
          border-radius: 50%;
          display: inline-block;
          margin-right: 8px;
          box-shadow: 0 0 10px #00E5FF;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(0, 229, 255, 0.7); }
          70% { transform: scale(1); box-shadow: 0 0 0 10px rgba(0, 229, 255, 0); }
          100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(0, 229, 255, 0); }
        }
      `}</style>
        </div>
    );
};

export default Dashboard;
