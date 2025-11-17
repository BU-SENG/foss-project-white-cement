import { useState } from 'react';
import { Link } from 'react-router-dom';

function Signup() {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    major: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const togglePassword = () => setShowPassword(!showPassword);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submit logic here
    console.log(form);
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h2 style={styles.title}>Create Your Account</h2>
        <p style={styles.subtitle}>Find your study partners in minutes.</p>

        <label>Full Name</label>
        <input
          type="text"
          name="fullName"
          placeholder="Okoye Kennedy"
          value={form.fullName}
          onChange={handleChange}
          style={styles.input}
          required
        />

        <label>University Email Address</label>
        <input
          type="email"
          name="email"
          placeholder="ken1@student.babcock.edu.ng"
          value={form.email}
          onChange={handleChange}
          style={styles.input}
          required
        />

        <label>Department/Major</label>
        <input
          type="text"
          name="major"
          placeholder="Software Engineering"
          value={form.major}
          onChange={handleChange}
          style={styles.input}
          required
        />

        <label>Password</label>
        <div style={{ position: 'relative' }}>
          <input
            type={showPassword ? 'text' : 'password'}
            name="password"
            placeholder="Enter your password"
            value={form.password}
            onChange={handleChange}
            style={styles.input}
            required
          />
          <button
            type="button"
            onClick={togglePassword}
            style={styles.eyeButton}
            aria-label="Toggle password visibility"
          >
            {showPassword ? '🙈' : '👁'}
          </button>
        </div>

        <button type="submit" style={styles.continueButton}>Continue</button>

        <p style={styles.loginText}>
          Already have an account? <Link to="/login" style={styles.loginLink}>Log in</Link>
        </p>
      </form>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#f1f5f9',
  },
  form: {
    backgroundColor: '#192734',
    padding: '2rem',
    borderRadius: '0.5rem',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    width: '100%',
    maxWidth: '400px',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    color: 'white',
  },
  title: {
    margin: 0,
    fontSize: '1.5rem',
    fontWeight: '600',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: '0.9rem',
    color: '#6b7280',
    textAlign: 'center',
    marginBottom: '1rem',
  },
  input: {
    padding: '0.5rem',
    borderRadius: '0.375rem',
    border: '1px solid #d1d5db',
    width: '100%',
    fontSize: '1rem',
  },
  eyeButton: {
    position: 'absolute',
    right: '0.5rem',
    top: '50%',
    transform: 'translateY(-50%)',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontSize: '1.2rem',
  },
  continueButton: {
    backgroundColor: '#3b82f6',
    color: '#fff',
    padding: '0.75rem',
    border: 'none',
    borderRadius: '0.375rem',
    cursor: 'pointer',
    fontWeight: '600',
    fontSize: '1rem',
    marginTop: '1rem',
  },
  loginText: {
    color: '#94a3b8',
    textAlign: 'center',
    marginTop: '1rem',
    fontSize: '0.9rem',
  },
  loginLink: {
    color: '#3b82f6',
    textDecoration: 'none',
    fontWeight: '600',
  },
};

export default Signup;
