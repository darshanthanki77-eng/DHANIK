import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    User,
    CreditCard,
    FileText,
    Building2,
    Upload,
    ChevronRight,
    ChevronLeft,
    CheckCircle2,
    AlertCircle
} from 'lucide-react';
import './KYC.css';

const steps = [
    { id: 1, title: 'Profile Photo', icon: <User size={20} /> },
    { id: 2, title: 'Aadhar Details', icon: <CreditCard size={20} /> },
    { id: 3, title: 'PAN Details', icon: <FileText size={20} /> },
    { id: 4, title: 'Bank Details', icon: <Building2 size={20} /> },
];

const KYC = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        aadharNumber: '',
        panNumber: '',
        bankName: '',
        accountNumber: '',
        ifscCode: ''
    });

    const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, 4));
    const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const renderStep = () => {
        switch (currentStep) {
            case 1:
                return (
                    <motion.div
                        key="step1"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="upload-area"
                    >
                        <div className="photo-placeholder">
                            <User size={120} style={{ opacity: 0.1 }} />
                            <p style={{ fontSize: '1rem', marginTop: '15px' }}>Click or drag to upload</p>
                        </div>
                        <button className="btn-primary shimmer-btn upload-btn">
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <Upload size={18} />
                                Upload Photo
                            </div>
                        </button>
                        <div className="upload-note">
                            <p>Please upload a clear, recent photo of yourself</p>
                            <p style={{ fontSize: '0.75rem', marginTop: '5px', opacity: 0.6 }}>Max file size: 5MB | Supported formats: JPG, PNG</p>
                        </div>
                    </motion.div>
                );
            case 2:
                return (
                    <motion.div
                        key="step2"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                    >
                        <div className="kyc-input-group">
                            <label>Full Name (as per Aadhar)</label>
                            <input type="text" className="kyc-input" placeholder="Enter your full name" />
                        </div>
                        <div className="kyc-input-group">
                            <label>Aadhar Number</label>
                            <input
                                type="text"
                                name="aadharNumber"
                                className="kyc-input"
                                placeholder="12-digit Aadhar number"
                                value={formData.aadharNumber}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="kyc-input-group">
                            <label>Upload Aadhar Card (Front & Back)</label>
                            <div className="upload-area" style={{ padding: '2rem', border: '2px dashed rgba(255,255,255,0.05)', borderRadius: '16px' }}>
                                <Upload size={32} style={{ opacity: 0.2, marginBottom: '1rem' }} />
                                <button className="btn-outline" style={{ borderColor: 'rgba(255,255,255,0.1)', color: 'white' }}>Select Files</button>
                            </div>
                        </div>
                    </motion.div>
                );
            case 3:
                return (
                    <motion.div
                        key="step3"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                    >
                        <div className="kyc-input-group">
                            <label>PAN Card Number</label>
                            <input
                                type="text"
                                name="panNumber"
                                className="kyc-input"
                                placeholder="Enter 10-digit PAN"
                                value={formData.panNumber}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="kyc-input-group">
                            <label>Upload PAN Card Copy</label>
                            <div className="upload-area" style={{ padding: '2rem', border: '2px dashed rgba(255,255,255,0.05)', borderRadius: '16px' }}>
                                <Upload size={32} style={{ opacity: 0.2, marginBottom: '1rem' }} />
                                <button className="btn-outline" style={{ borderColor: 'rgba(255,255,255,0.1)', color: 'white' }}>Select Files</button>
                            </div>
                        </div>
                    </motion.div>
                );
            case 4:
                return (
                    <motion.div
                        key="step4"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                    >
                        <div className="kyc-input-group">
                            <label>Bank Name</label>
                            <input
                                type="text"
                                name="bankName"
                                className="kyc-input"
                                placeholder="e.g. HDFC Bank"
                                value={formData.bankName}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="kyc-input-group" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                            <div>
                                <label>Account Number</label>
                                <input
                                    type="text"
                                    name="accountNumber"
                                    className="kyc-input"
                                    placeholder="Account Number"
                                    value={formData.accountNumber}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div>
                                <label>IFSC Code</label>
                                <input
                                    type="text"
                                    name="ifscCode"
                                    className="kyc-input"
                                    placeholder="IFSC Code"
                                    value={formData.ifscCode}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                        <div className="kyc-input-group">
                            <label>Upload Cancelled Cheque / Passbook Copy</label>
                            <div className="upload-area" style={{ padding: '2rem', border: '2px dashed rgba(255,255,255,0.05)', borderRadius: '16px' }}>
                                <Upload size={32} style={{ opacity: 0.2, marginBottom: '1rem' }} />
                                <button className="btn-outline" style={{ borderColor: 'rgba(255,255,255,0.1)', color: 'white' }}>Select Files</button>
                            </div>
                        </div>
                    </motion.div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="kyc-container">
            <motion.div
                className="kyc-header"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <h1>KYC <span className="gold-glow-text">Verification</span></h1>
                <p>Complete your identity verification to unlock all platform features and withdrawals.</p>
            </motion.div>

            <div className="kyc-stepper">
                <div className="stepper-line">
                    <div
                        className="stepper-line-progress"
                        style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
                    ></div>
                </div>
                {steps.map((step) => (
                    <div
                        key={step.id}
                        className={`step-item ${currentStep === step.id ? 'active' : ''} ${currentStep > step.id ? 'completed' : ''}`}
                    >
                        <div className="step-number">
                            {currentStep > step.id ? <CheckCircle2 size={20} /> : step.id}
                        </div>
                        <span className="step-label">{step.title}</span>
                    </div>
                ))}
            </div>

            <motion.div
                className="kyc-form-card"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
            >
                <div className="form-step-title">
                    {steps[currentStep - 1].title}
                </div>

                <div className="step-content">
                    <AnimatePresence mode="wait">
                        {renderStep()}
                    </AnimatePresence>
                </div>

                <div className="nav-buttons">
                    <button
                        className="btn-primary btn-secondary"
                        onClick={prevStep}
                        disabled={currentStep === 1}
                        style={{ opacity: currentStep === 1 ? 0.3 : 1, pointerEvents: currentStep === 1 ? 'none' : 'auto' }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <ChevronLeft size={20} />
                            Previous
                        </div>
                    </button>

                    <button className="btn-primary shimmer-btn" onClick={nextStep}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            {currentStep === 4 ? 'Submit KYC' : 'Next Step'}
                            <ChevronRight size={20} />
                        </div>
                    </button>
                </div>

                {/* Info Box */}
                <div style={{
                    marginTop: '2rem',
                    padding: '1rem',
                    background: 'rgba(255, 210, 0, 0.03)',
                    border: '1px solid rgba(255, 210, 0, 0.1)',
                    borderRadius: '12px',
                    display: 'flex',
                    gap: '12px'
                }}>
                    <AlertCircle size={20} style={{ color: '#FFD200', flexShrink: 0 }} />
                    <p style={{ fontSize: '0.8rem', color: '#9CA3AF' }}>
                        Your data is encrypted and stored securely. Verification typically takes 24-48 business hours.
                    </p>
                </div>
            </motion.div>
        </div>
    );
};

export default KYC;
