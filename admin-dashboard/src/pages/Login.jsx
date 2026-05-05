import { useState } from 'react'

const Login = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail]               = useState('')
  const [password, setPassword]         = useState('')

  return (
    <div className="login-page">
      <div className="login-bg-decor" />
      <div className="login-card">
        <div className="login-logo">
          <div className="logo-icon" style={{ margin: '0 auto 12px', width: 48, height: 48, background: 'linear-gradient(135deg, #6366f1, #8b5cf6)', borderRadius: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24 }}>🚀</div>
          <h1>Welcome back</h1>
          <p>Sign in to your ShopEase admin panel</p>
        </div>

        <div className="form-group">
          <label className="form-label">Email Address</label>
          <div className="form-input-icon-wrap">
            <span className="input-icon">📧</span>
            <input className="form-input" type="email" placeholder="admin@shopeasy.com" value={email} onChange={e => setEmail(e.target.value)} />
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">Password</label>
          <div className="password-wrapper">
            <input className="form-input" type={showPassword ? 'text' : 'password'} placeholder="••••••••" value={password} onChange={e => setPassword(e.target.value)} />
            <button className="password-toggle" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? '🙈' : '👁️'}
            </button>
          </div>
        </div>

        <div className="login-options">
          <label className="remember-me">
            <input type="checkbox" />
            <span>Remember me</span>
          </label>
          <span className="forgot-link">Forgot password?</span>
        </div>

        <button className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '12px' }}>
          Sign In →
        </button>

        <p style={{ textAlign: 'center', marginTop: 20, fontSize: 12, color: 'var(--text-muted)' }}>
          Demo credentials: admin@shopeasy.com / admin123
        </p>
      </div>
    </div>
  )
}

export default Login
