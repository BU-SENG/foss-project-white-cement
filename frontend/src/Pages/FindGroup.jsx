export default function FindGroup() {
  return (
   <>
      <style>{`
        body {
          margin: 0;
          font-family: 'Poppins', sans-serif;
          background-color: #0f172a;
        }

        .find-container {
          max-width: 900px;
          margin: 0 auto;
          padding: 2rem;
          color: #fff;
        }

        .page-title {
          font-size: 2rem;
          font-weight: 700;
        }

        .subtitle {
          color: #94a3b8;
          margin-bottom: 2rem;
        }

        .card {
          background-color: #1e293b;
          border-radius: 12px;
          padding: 1.5rem;
          margin-bottom: 1.5rem;
          border: 1px solid #334155;
        }

        .section-title {
          margin-bottom: 1rem;
          font-weight: 600;
        }

        /* Search Bar */
        .search-bar {
          width: 100%;
          padding: 0.8rem;
          border-radius: 10px;
          border: 1px solid #334155;
          background-color: #0f172a;
          color: white;
          outline: none;
        }

        /* Interest chips */
        .chip-container {
          display: flex;
          flex-wrap: wrap;
          gap: 0.7rem;
          margin-top: 1rem;
        }

        .chip {
          padding: 0.45rem 0.9rem;
          border-radius: 20px;
          background-color: #0f172a;
          border: 1px solid #334155;
          color: #cbd5e1;
          cursor: pointer;
          transition: 0.2s;
          font-size: 0.85rem;
        }

        .chip.selected {
          background-color: #3b82f6;
          border-color: #3b82f6;
          color: #fff;
        }

        .chip:hover {
          border-color: #475569;
        }

        /* Selector Buttons (Study Style, Skill Level) */
        .select-row {
          display: flex;
          gap: 1rem;
        }

        .select-btn {
          flex: 1;
          padding: 1rem;
          background-color: #0f172a;
          border: 1px solid #334155;
          color: #cbd5e1;
          border-radius: 10px;
          text-align: center;
          cursor: pointer;
          transition: 0.2s;
        }

        .select-btn.selected {
          background-color: #3b82f6;
          border-color: #3b82f6;
          color: white;
        }

        .select-btn:hover {
          border-color: #475569;
        }

        /* Availability buttons */
        .availability-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.8rem;
        }

        .avail-btn {
          background-color: #0f172a;
          border: 1px solid #334155;
          padding: 0.8rem;
          border-radius: 10px;
          text-align: center;
          cursor: pointer;
          transition: 0.2s;
          color: #cbd5e1;
        }

        .avail-btn.selected {
          background-color: #1d4ed8;
          border-color: #1d4ed8;
          color: white;
        }

        .avail-btn:hover {
          border-color: #475569;
        }

        /* Final Button */
        .submit-btn {
          width: 100%;
          margin-top: 1rem;
          background-color: #3b82f6;
          border: none;
          padding: 1rem;
          border-radius: 10px;
          font-size: 1rem;
          font-weight: 600;
          color: white;
          cursor: pointer;
          transition: 0.2s;
        }

        .submit-btn:hover {
          background-color: #2563eb;
        }
      `}</style>

      <div className="find-container">
        <h1 className="page-title">Find Your Perfect Study Group</h1>
        <p className="subtitle">
          Select your preferences below to get matched with the best groups for you.
        </p>

        {/* Interests */}
        <div className="card">
          <p className="section-title">Select Your Interests</p>
          <input type="text" className="search-bar" placeholder="Search for interests like 'AI' or 'Math'" />

          <div className="chip-container">
            <div className="chip selected">Artificial Intelligence</div>
            <div className="chip">Mathematics</div>
            <div className="chip">Chemistry</div>
            <div className="chip selected">History</div>
            <div className="chip">Computer Science</div>
            <div className="chip">Literature</div>
            <div className="chip">Physics</div>
          </div>
        </div>

        {/* Study Style */}
        <div className="card">
          <p className="section-title">What's Your Study Style?</p>

          <div className="select-row">
            <div className="select-btn">Quiet</div>
            <div className="select-btn selected">Collaborative</div>
            <div className="select-btn">Interactive</div>
          </div>
        </div>

        {/* Availability */}
        <div className="card">
          <p className="section-title">Your Availability</p>

          <div className="availability-grid">
            <div className="avail-btn">Weekday Mornings</div>
            <div className="avail-btn selected">Weekday Evenings</div>

            <div className="avail-btn selected">Weekend Afternoons</div>
            <div className="avail-btn">Weekend Evenings</div>

            <div className="avail-btn">Weekend Mornings</div>
          </div>
        </div>

        {/* Skill Level */}
        <div className="card">
          <p className="section-title">Preferred Skill Level</p>

          <div className="select-row">
            <div className="select-btn">Beginner</div>
            <div className="select-btn selected">Intermediate</div>
            <div className="select-btn">Advanced</div>
          </div>
        </div>

        {/* Submit */}
        <button className="submit-btn">Find My Group</button>
      </div>
    </>
  );
}
