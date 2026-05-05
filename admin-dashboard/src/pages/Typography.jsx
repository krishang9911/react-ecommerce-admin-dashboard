import { useState } from 'react'

const Settings = () => {
  const [notifications, setNotifications] = useState(true)
  const [emailAlerts, setEmailAlerts]     = useState(false)
  const [autoSave, setAutoSave]           = useState(true)

  const Toggle = ({ on, onClick }) => (
    <button className={`toggle-switch ${on ? 'on' : ''}`} onClick={onClick} />
  )

  return (
    <div>
      <div className="page-header">
        <div className="page-header-left">
          <h1>Settings</h1>
          <p>Manage your account and preferences.</p>
        </div>
        <button className="btn btn-primary btn-sm">Save Changes</button>
      </div>

      <div className="two-col">
        {/* Profile Settings */}
        <div className="card">
          <div className="card-header"><div className="card-title">Profile Settings</div></div>
          <div className="card-body">
            <div className="form-group">
              <label className="form-label">Full Name</label>
              <input className="form-input" defaultValue="Admin User" />
            </div>
            <div className="form-group">
              <label className="form-label">Email Address</label>
              <input className="form-input" defaultValue="admin@shopeasy.com" />
            </div>
            <div className="form-group">
              <label className="form-label">Role</label>
              <select className="form-select">
                <option>Super Admin</option>
                <option>Manager</option>
                <option>Viewer</option>
              </select>
            </div>
            <button className="btn btn-primary" style={{ width: '100%' }}>Update Profile</button>
          </div>
        </div>

        {/* Preferences */}
        <div className="card">
          <div className="card-header"><div className="card-title">Preferences</div></div>
          <div className="card-body">
            <div className="settings-section">
              <div className="settings-section-title">Notifications</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div className="toggle">
                  <Toggle on={notifications} onClick={() => setNotifications(!notifications)} />
                  <span style={{ fontSize: 13 }}>Push Notifications</span>
                </div>
                <div className="toggle">
                  <Toggle on={emailAlerts} onClick={() => setEmailAlerts(!emailAlerts)} />
                  <span style={{ fontSize: 13 }}>Email Alerts</span>
                </div>
                <div className="toggle">
                  <Toggle on={autoSave} onClick={() => setAutoSave(!autoSave)} />
                  <span style={{ fontSize: 13 }}>Auto Save</span>
                </div>
              </div>
            </div>
            <div className="divider" />
            <div className="settings-section">
              <div className="settings-section-title">Security</div>
              <div className="form-group">
                <label className="form-label">Current Password</label>
                <input className="form-input" type="password" placeholder="••••••••" />
              </div>
              <div className="form-group">
                <label className="form-label">New Password</label>
                <input className="form-input" type="password" placeholder="••••••••" />
              </div>
              <button className="btn btn-outline" style={{ width: '100%' }}>Change Password</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Settings
