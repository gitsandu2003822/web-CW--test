// Import React
const { useState, useEffect } = React;

// Main App Component
function App() {
    const [students, setStudents] = useState([]); // State to hold student data
    const [searchIndex, setSearchIndex] = useState(''); // State to hold search input

    // Sample function to populate the student table
    const populateTable = () => {
        // Sample data
        const sampleStudents = [
            { id: '1', name: 'John Doe', class: '10', marks: '85', grade: 'A' },
            { id: '2', name: 'Jane Smith', class: '9', marks: '90', grade: 'A+' }
        ];
        setStudents(sampleStudents);
    };

    // Search function
    const searchStudent = () => {
        // Logic to search students by index
        const filteredStudents = students.filter(student => student.id === searchIndex);
        setStudents(filteredStudents.length ? filteredStudents : []); // Update the state
    };

    // Populate table on component mount
    useEffect(() => {
        populateTable();
    }, []);

    return (
        <div className="container">
            <div className="top-bar">
                <h2>Staff Dashboard</h2>
                <div>
                    <button className="btn btn-primary me-2">Update Login</button>
                    <button className="btn btn-danger">Logout</button>
                </div>
            </div>

            <div className="button-container">
                <button className="btn btn-success" onClick={() => location.href='addStudent.html'}>Add New Student</button>
                <button className="btn btn-purple">Add Marks</button>
                <button className="btn btn-warning" onClick={() => window.location.href='viewAppointments.html'}>Add New Admin</button>
            </div>

            <div className="search-box">
                <input 
                    type="text" 
                    id="searchIndex" 
                    className="form-control" 
                    placeholder="Enter Index No" 
                    value={searchIndex}
                    onChange={(e) => setSearchIndex(e.target.value)} // Update search input
                />
                <button className="btn btn-primary" type="button" onClick={searchStudent}>
                    <i className="bi bi-search"></i> Search
                </button>
            </div>

            <div className="table-responsive">
                <table className="table table-bordered text-center">
                    <thead>
                        <tr>
                            <th>Index No</th>
                            <th>Student Name</th>
                            <th>Class</th>
                            <th>Marks</th>
                            <th>Grade</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.length > 0 ? (
                            students.map((student) => (
                                <tr key={student.id}>
                                    <td>{student.id}</td>
                                    <td>{student.name}</td>
                                    <td>{student.class}</td>
                                    <td>{student.marks}</td>
                                    <td>{student.grade}</td>
                                    <td><button className="btn btn-danger btn-sm">Delete</button></td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="6" className="text-center text-muted">No students found</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            <footer>
                <p>&copy; 2025 School Management System. All rights reserved.</p>
            </footer>
        </div>
    );
}

// Render the app to the root element
ReactDOM.render(<App />, document.getElementById('root'));
